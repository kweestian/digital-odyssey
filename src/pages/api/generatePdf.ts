import { NextApiResponse } from 'next';
import { ServerResponse, GeneratePdfRequest } from '@/types/server';
import { supabase } from '@/lib/supabaseClient';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

import fs from 'fs';
import path from 'path';
import { capitalizeFirstLetter } from '@/lib';

export default async function handler(req: GeneratePdfRequest, res: NextApiResponse<ServerResponse>) {
  if (req.method !== 'POST') {
    return res.status(405);
  }
  const {
    record: { email, user_id: userId },
  } = req.body;

  if (email && userId) {
    const emailWithoutDomain = email.split('@')[0];
    const emailSplit = emailWithoutDomain.split('.');
    const firstName = emailSplit[0];
    const lastName = emailSplit[1];

    // const filePath = path.join(process.cwd(), 'files', 'blank.pdf');
    const fontPath = path.join(process.cwd(), 'public', 'static', 'font', 'WTMonarchNova-Roman.ttf');

    // const pdfBytes = fs.readFileSync(filePath, 'utf8');

    const pdfBytes = await fetch('https://digital-odyssey-staging.enverselabs.com/static/image/blank.pdf').then(
      (pdfRes) => pdfRes.arrayBuffer(),
    );

    const pdfDoc = await PDFDocument.load(pdfBytes);

    pdfDoc.registerFontkit(fontkit);
    // load font and embed it to pdf document
    const fontBytes = fs.readFileSync(fontPath);
    const monarchFont = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the width and height of the first page
    const { height } = firstPage.getSize();

    firstPage.drawText(`${capitalizeFirstLetter(firstName)} ${capitalizeFirstLetter(lastName)}`, {
      x: 50,
      y: height - 4 * 30,
      size: 30,
      font: monarchFont,
      color: rgb(0, 0.53, 0.71),
    });

    const uploadFile = await pdfDoc.save();

    const { error: supbaBaseError } = await supabase.storage
      .from('kering')
      .upload(`${userId}/certificate/certificate.pdf`, uploadFile, {
        cacheControl: '3600',
        upsert: true,
      });

    if (supbaBaseError) {
      return res.status(500).json({ error: supbaBaseError.message });
    }
  }

  return res.status(200).json({ message: 'Magic Link sent, check your mailbox and follow the link!' });
}

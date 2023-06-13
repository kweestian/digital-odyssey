/* eslint-disable max-len */
import { NextApiResponse } from 'next';
import { ServerResponse, GeneratePdfRequest } from '@/types/server';
import { supabase } from '@/lib/supabaseClient';
import { PDFDocument, rgb } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';

import fs from 'fs';
import path from 'path';

const fileOptions: { [key: string]: string } = {
  sm: 'sm-banner.png',
  md: 'md-banner.png',
  lg: 'lg-banner.png',
};

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

    const fontPath = path.join(process.cwd(), 'public', 'static', 'font', 'Poppins', 'Poppins-ExtraLight.ttf');

    // const pdfBytes = fs.readFileSync(filePath, 'utf8');

    const pdfBytes = await fetch(
      'https://jtefeyxtvoloibgobpss.supabase.co/storage/v1/object/public/digital-odyssey-public/certificate-blank.pdf',
    ).then((pdfRes) => pdfRes.arrayBuffer());

    const pdfDoc = await PDFDocument.load(pdfBytes);
    pdfDoc.registerFontkit(fontkit);
    // const { height, width } = await jpgImage.scaleToFit();
    // load font and embed it to pdf document
    const fontBytes = fs.readFileSync(fontPath);
    const monarchFont = await pdfDoc.embedFont(fontBytes);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the width and height of the first page

    const displayName = `${firstName?.toLocaleUpperCase()} ${lastName?.toLocaleUpperCase()}`;

    const textWidth = monarchFont.widthOfTextAtSize(displayName, 48);
    const textHeight = monarchFont.heightAtSize(48);
    let imageUrl = 'sm';

    if (textWidth > 500) {
      imageUrl = 'md';
    } else if (textWidth > 1000) {
      imageUrl = 'lg';
    }

    const jpgUrl = `https://jtefeyxtvoloibgobpss.supabase.co/storage/v1/object/public/digital-odyssey-public/${fileOptions[imageUrl]}`;
    const jpgImageBytes = await fetch(jpgUrl).then((pdfRes) => pdfRes.arrayBuffer());

    const jpgImage = await pdfDoc.embedPng(jpgImageBytes);

    firstPage.drawImage(jpgImage, {
      // x: jpgImage.width / 2,
      // y: firstPage.getHeight() - firstPage.getHeight() / 4 - textHeight / 2,
      // width: jpgImage.width,
      // height: textHeight,
      x: firstPage.getWidth() / 2 - jpgImage.width / 2,
      y: firstPage.getHeight() - firstPage.getHeight() / 4 - textHeight,
      width: jpgImage.width,
      height: jpgImage.height,
    });

    firstPage.drawText(displayName, {
      x: firstPage.getWidth() / 2 - textWidth / 2,
      y: firstPage.getHeight() - firstPage.getHeight() / 4 - textHeight + textHeight / 2,
      size: 48,
      font: monarchFont,
      color: rgb(1, 1, 1),
    });

    const uploadFile = await pdfDoc.save();

    const { error: supbaBaseError } = await supabase.storage
      .from('kering')
      .upload(`${userId}/certificate/digital-odyssey-certificate_${firstName}-${lastName}.pdf`, uploadFile, {
        cacheControl: '3600',
        upsert: true,
      });

    if (supbaBaseError) {
      return res.status(500).json({ error: supbaBaseError.message });
    }
  }

  // const filePath = path.join(process.cwd(), 'files', 'blank.pdf');

  return res.status(200).json({ message: 'Succesfully uploaded image' });
}

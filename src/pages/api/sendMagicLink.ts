import { NextApiResponse } from 'next';
import { ALLOWED_DOMAINS } from '@/constants';
import { ServerResponse, SupabaseMagicLinkRequest } from '@/types/server';
import { supabase } from '@/lib/supabaseClient';

export default async function handler(req: SupabaseMagicLinkRequest, res: NextApiResponse<ServerResponse>) {
  if (req.method !== 'POST') {
    return res.status(405);
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const isAllowed =
    email === 'pm.marteau@gmail.com ' || ALLOWED_DOMAINS.some((allowedDomain) => email.endsWith(allowedDomain));

  if (!isAllowed) {
    return res.status(403).json({ error: 'Email not allowed' });
  }

  const { error } = await supabase.auth.signInWithOtp({
    email,
    // options: {
    //   emailRedirectTo: `${req.url}/login-check`,
    // },
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: 'Magic Link sent, check your mailbox and follow the link!' });
}

import { NextApiRequest } from 'next';

export interface MagicLinkRequestBody {
  email: string;
}

export interface EmailRequestBody {
  email: string;
  password: string;
}

export type ServerResponse =
  | {
      error: string;
      message?: never;
    }
  | {
      error?: never;
      message: string;
    };

export interface SupabaseMagicLinkRequest extends NextApiRequest {
  body: MagicLinkRequestBody;
}

export interface SupabaseEmailRequest extends NextApiRequest {
  body: EmailRequestBody;
}

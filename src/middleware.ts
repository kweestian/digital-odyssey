import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// import { ALLOWED_DOMAINS } from '@/constants';

export async function middleware(req: NextRequest) {
  // We need to create a response and hand it to the supabase client to be able to modify the response headers.
  const res = NextResponse.next();

  // Create authenticated Supabase Client.
  const supabase = createMiddlewareSupabaseClient({ req, res });

  try {
    // Try to get the session again with the token
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Check auth condition
    // if (ALLOWED_DOMAINS.some((emailPattern) => session?.user.email?.endsWith(emailPattern))) {
    //   // Authentication successful, forward request to protected route.

    //   return res;
    // }
    return res;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  const redirectUrl = req.nextUrl.clone();
  redirectUrl.pathname = '/auth/login';
  redirectUrl.searchParams.set('redirectedFrom', req.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);

  // return res;
}
// Auth condition not met, redirect to home page.

export const config = {
  matcher: ['/game/:path*'],
};

// export const config = {
//   matcher: ['/noqsoidqsodlsqdqsndqsdnl'],
// };

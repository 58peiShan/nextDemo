import { NextResponse, NextRequest } from 'next/server'
const middleware = (req, res) => {
      const loginUrl = new URL('/404', req.url)
      if (req.nextUrl.pathname.startsWith('/SSS')){
        return NextResponse.redirect(loginUrl)
      }
      return;
};
export default middleware;
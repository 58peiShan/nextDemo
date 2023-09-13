import { NextResponse } from 'next/server'
 
export function middleware(request) {
  //重導向
  // return NextResponse.redirect(new URL('/', request.url))
  //
  //重寫
  // return NextResponse.rewrite(new URL('/', request.url))

  //cookies
  // let response = NextResponse.next()
  // response.cookies.set('show-banner', 'false')
  // return response

  //json
  // return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

  //setHeader
  // const requestHeaders = new Headers(request.headers)
  // requestHeaders.set('x-hello-from-middleware1', 'hello')
  // const response = NextResponse.next({
  //   request: {
  //     headers: requestHeaders,
  //   },
  // })
  // response.headers.set('x-hello-from-middleware2', 'hello')
  // return response 
}
 
export const config = {
  matcher: '/photo/:path*',
}
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   metadataBase: new URL('https://acme.com'),
//   title:{
//     default: 'Acme',
//     template: '%s | Acme',
    
//   },
// }
// export const metadata = {
//   title: 'Shop',
// }

// export default function RootLayout({ children }) {
export default function Layout({ children }) {
  return (
    <html lang="en">
      <body style={{background:'gray'}}>{children}</body>
    </html>
  )
}

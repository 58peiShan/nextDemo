export const metadata = {
  title: 'Marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{background:'black',color:'white'}}>{children}</body>
    </html>
  )
}

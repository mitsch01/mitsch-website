import "./globals.css"
import Nav from "components/Nav"
import Header from "components/Header"
import Footer from "components/Footer"


export const metadata = {
  title: "Mitsch 🤍 Coding",
  description: "Portfolio Miriam Schwartz",
  keywords: "fullstack-development, frontend-development, react, next, seo, interactive, creative",
  author: "Miriam Schwartz"
}

export default function RootLayout({ children}) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}


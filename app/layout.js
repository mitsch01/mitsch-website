import "./globals.css"
import Header from "components/Header"
import Footer from "components/Footer"

export const metadata = {
  title: "Mitsch 🤍 Coding",
  description: "Portfolio Miriam Schwartz",
  keywords: "fullstack-development, frontend-development, react, next, seo, interactive, creative",
  content: "Showcasing my public GitHub repositories",
  author: "Miriam Schwartz"
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' /> 
      </head>
      <body>
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
  )
}

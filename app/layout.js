import Footer from "./Footer/page.jsx";
import Navbar from "./Navbar/page.jsx";
import './globals.css'

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import Footer from "./Footer/page.jsx";
import Navbar from "./Navbar/page.jsx";

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

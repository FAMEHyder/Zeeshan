import Navbar from "./Navbar/page.jsx";

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

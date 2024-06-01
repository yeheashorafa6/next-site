import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";
import Footer from "@/Component/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Y - S HomePage",
    template : "%s | Y - S",
  },
  description: "Generated A Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="container">

              {/* HEADER */}
              <Navbar/>
              {/* == HEADER  */}

              {/* CONTENT */}
              {children}
              {/* == CONTENT == */}

              {/* FOOTER */}
              <Footer/>
              {/* == FOOTER == */}

          </div>
      </body>
    </html>
  );
}

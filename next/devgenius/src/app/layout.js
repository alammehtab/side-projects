import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
// import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevGenius",
  description:
    "A software house providing services of full-stack web and mobile application development using the latest technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

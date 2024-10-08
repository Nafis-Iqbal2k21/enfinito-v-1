
import { Inter } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.css"
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <BootstrapClient />
        <Footer></Footer>
      </body>
    </html>
  );
}

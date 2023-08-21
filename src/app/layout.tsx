import Navbar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-100 ">
        {children}
      </body>
    </html>
  );
}

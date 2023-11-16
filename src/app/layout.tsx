import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./../components/Header/index.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Priyanshu Malaviya",
  description: "Portfolio of Priyashu Malaviya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

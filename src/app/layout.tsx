import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className='font-sans'>{children}</body>
    </html>
  );
}

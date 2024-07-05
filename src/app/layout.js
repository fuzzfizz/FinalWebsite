import { Inter } from "next/font/google";
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <title>Animal Planet</title>
        <meta name="description" content="A layout created with Bootstrap and Next.js" />
        <link rel="icon" href="/favicon.ico" />

        <BootstrapClient />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}

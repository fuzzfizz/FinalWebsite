"use client";
import { Inter } from "next/font/google";
import React from 'react';
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ["latin"] });
const Navbar = dynamic(() => import('@/components/Navbar'), { ssr: false });


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

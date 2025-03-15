import type { Metadata } from "next";
import "./globals.css";
import FooterComponent from "./components/footer/footer";
import Header from './components/header/header';
// import Head from 'next/head'

export const metadata: Metadata = {
  title: "Lux New Design",
  description: "Lux Landing page design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        
      </Head> */}
      <Header />
      <body
        className={` antialiased`}
      >
        {children}
      </body>
      <FooterComponent />
    </html>
  );
}

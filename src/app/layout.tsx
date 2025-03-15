import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import FooterComponent from "./components/footer/footer";
import Header from "./components/header/header";

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
      <body className="antialiased">
        <Head>
          <link
            rel="stylesheet"
            href="/styles/non-critical.css"
            media="print"
            onLoad={(e) => {
              const link = e.target as HTMLLinkElement;
              link.onload = null;
              link.removeAttribute("media");
            }}
          />
        </Head>
        <Header />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

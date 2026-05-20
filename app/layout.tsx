import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLoader from "@/components/layout/PageLoader";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/layout/CustomCursor";
import LenisProvider from "@/components/layout/LenisProvider";

export const metadata: Metadata = {
  title: "Architect Nexus",
  description: "Digital agency crafting bold digital experiences.",
  metadataBase: new URL("https://architectnexus.in"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-an-black text-an-white font-body">
        <LenisProvider>
          <PageLoader />
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

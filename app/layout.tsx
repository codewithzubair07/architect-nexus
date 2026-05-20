import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PageLoader from "@/components/layout/PageLoader";
import PageTransition from "@/components/layout/PageTransition";
import CustomCursor from "@/components/layout/CustomCursor";
import LenisProvider from "@/components/layout/LenisProvider";
import GlobalScrollReveal from "@/components/layout/GlobalScrollReveal";

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
      <body className="min-h-full bg-an-black font-body text-an-white">
        <LenisProvider>
          <div className="page-grid-overlay" />
          <div className="glow-blob glow-blob--one" />
          <div className="glow-blob glow-blob--two" />
          <PageLoader />
          <GlobalScrollReveal />
          <CustomCursor />
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}

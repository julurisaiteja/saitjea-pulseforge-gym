import type { Metadata } from "next";
import { Archivo_Black, Barlow } from "next/font/google";
const heading = Archivo_Black({ subsets: ["latin"], variable: "--font-archivo", weight: ["400"] });
const body = Barlow({ subsets: ["latin"], variable: "--font-barlow", weight: ["400","600","700"] });
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export const metadata: Metadata = { title: "PulseForge Gym", description: "Demo storefront" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-style="brutal-maximal">
      <body className={`${heading.variable} ${body.variable} antialiased pb-20 md:pb-0`}>
        <CartProvider>
          <WishlistProvider>
            <Header />
            {children}
            <Footer />
            <AiAssistant />
            <StickyMobileCta primaryHref="/schedule" primaryLabel="Reserve a class" />
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

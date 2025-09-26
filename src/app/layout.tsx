import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fruit Habibi - B2B Fruits & Vegetables Marketplace",
  description: "Connect African and Asian farmers with Middle Eastern importers. Premium B2B marketplace for fresh fruits and vegetables.",
  keywords: "fruits, vegetables, B2B, marketplace, farmers, importers, agriculture, trade",
  authors: [{ name: "Fruit Habibi Team" }],
  openGraph: {
    title: "Fruit Habibi - B2B Fruits & Vegetables Marketplace",
    description: "Connect African and Asian farmers with Middle Eastern importers. Premium B2B marketplace for fresh fruits and vegetables.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

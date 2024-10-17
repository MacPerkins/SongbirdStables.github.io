import type { Metadata } from "next";
import localFont from "next/font/local";
import { Birthstone, Itim } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Importing your custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Birthstone font from Google Fonts
const birthstone = Birthstone({
  weight: "400", // You can change the weight if needed
  subsets: ["latin"],
  variable: "--font-birthstone", // Use this as a CSS variable
});

const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim", // CSS variable for Itim
});

export const metadata: Metadata = {
  title: "Horse Riding Lessons",
  description: "Professional horse riding lessons",
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
        {/* Navigation Bar */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link className={`${birthstone.className} text-white text-3xl font-bold`} href="/">
              Songbird Stables
            </Link>
            <div className={`${itim.className} space-x-4`}>
              <Link className="text-gray-300 hover:text-white" href="/lessons">
                Lessons
              </Link>
              <Link className="text-gray-300 hover:text-white" href="/about">
                About Us
              </Link>
              <Link className="text-gray-300 hover:text-white" href="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}

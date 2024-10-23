// RootLayout.tsx
import { Metadata } from "next";
import Link from "next/link";
import { birthstone, itim } from "./fonts/fonts";
import "./globals.css";

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
        className={`${birthstone.variable} ${itim.variable} antialiased`}
      >
        {/* Navigation Bar */}
        <nav className="bg-blue-400 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              className={`${birthstone.className} text-white text-6xl font-bold`}
              href="/"
            >
              Songbird Stables
            </Link>
            <div className={`${itim.className} space-x-16`}>
              <Link
                className="text-white text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/lessons"
              >
                Lessons
              </Link>
              <Link
                className="text-white text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-white text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/contact"
              >
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

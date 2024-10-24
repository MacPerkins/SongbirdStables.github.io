'use client';

import Link from "next/link";
import { useState } from "react"; // Import useState for hamburger menu toggle
import { birthstone, itim } from "./fonts/fonts";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function for hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body className={`${birthstone.variable} ${itim.variable} antialiased`}>
        {/* Navigation Bar */}
        <nav className="bg-blue-400 p-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            {/* Logo */}
            <Link
              className={`${birthstone.className} text-white text-4xl sm:text-6xl font-bold`}
              href="/"
            >
              Songbird Stables
            </Link>

            {/* Hamburger Menu (visible on small screens) */}
            <button
              className="text-white text-3xl sm:hidden focus:outline-none mt-4"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              ☰
            </button>

            {/* Links - Hidden on small screens, shown on larger screens */}
            <div
              className={`${
                isOpen ? "flex flex-col mt-4 space-y-4" : "hidden"
              } sm:flex sm:flex-row sm:space-x-16 sm:mt-0`}
            >
              <Link
                className="text-white text-xl sm:text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/lessons"
              >
                Lessons
              </Link>
              <Link
                className="text-white text-xl sm:text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-white text-xl sm:text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
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
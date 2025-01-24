'use client';

import Link from "next/link";
import Image from "next/image"; // Import the Image component
import { useState } from "react"; // Import useState for hamburger menu toggle
import { birthstone, itim } from "./fonts/fonts";
import "./globals.css";
import Logo from "/src/public/images/logo.webp"; // Adjust the path to your logo image

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
            <Link href="/" className="flex items-center">
              <Image
                src={Logo} // Use the imported logo
                alt="Songbird Stables Logo"
                width={125} // Adjust width as needed
                height={50} // Adjust height as needed
                className="rounded-lg"
              />
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
                className="text-white text-4xl sm:text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/lessons"
              >
                Lessons
              </Link>
              <Link
                className="text-white text-4xl sm:text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-white text-4xl sm:text-2xl px-4 py-2 border border-transparent hover:border-white hover:shadow-lg transition duration-300 ease-in-out"
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

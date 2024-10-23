// fonts.ts
import { Birthstone, Itim } from "next/font/google";

// Google Fonts
export const birthstone = Birthstone({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-birthstone", // CSS variable for Birthstone
});

export const itim = Itim({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-itim", // CSS variable for Itim
});

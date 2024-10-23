import { birthstone, itim } from "../fonts/fonts";

export default function Footer() {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto text-center">
        <p className={`${birthstone.variable} font-bold`}>
          &copy; 2024 Songbird Stables. All Rights Reserved.
        </p>
        <p className={`${itim.variable}`}>
          <a href="/privacy" className="hover:underline">Privacy Policy</a> |{" "}
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { birthstone, itim } from "./fonts/fonts";
import Footer from "./components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horse Riding Lessons",
  description: "Professional horse riding lessons",
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gray-200 flex flex-col justify-center items-center">
        {/* Placeholder Hero Image */}
        <Image
          src="/path-to-placeholder-image.jpg" // Replace with your image path or use a URL
          alt="Placeholder Hero"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-60"
        />
        {/* Text Box */}
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg text-center max-w-lg">
          {/* Birthstone for header */}
          <h1 className={`${birthstone.variable} text-4xl font-bold mb-4`}>Welcome to Songbird Stables</h1>
          {/* Itim for paragraph */}
          <p className={`${itim.variable} mb-6`}>Professional horse riding lessons for all ages and skill levels.</p>
          <a
            href="/contact"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Grid Section */}
      <h2 className={`${birthstone.variable} text-xl font-semibold text-center mb-6 mt-6`}>Meet our lesson Horses!</h2>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16 bg-gray-100">
        {/* Box 1 */}
        <div className="flex flex-col items-center p-4 border-2 border-white rounded-lg m-4">
          <Image
            src="/path-to-placeholder-image.jpg" // Replace with your image path or use a URL
            alt="Placeholder Image 1"
            width={150}
            height={150}
            className="mb-4"
          />
          {/* Birthstone for header */}
          <h2 className={`${birthstone.variable} text-xl font-semibold`}>Caspian</h2>
        </div>
        {/* Box 2 */}
        <div className="flex flex-col items-center p-4 border-2 border-white rounded-lg m-4">
          <Image
            src="/path-to-placeholder-image.jpg" // Replace with your image path or use a URL
            alt="Placeholder Image 2"
            width={150}
            height={150}
            className="mb-4"
          />
          {/* Birthstone for header */}
          <h2 className={`${birthstone.variable} text-xl font-semibold`}>Dawn</h2>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col items-center p-4 border-2 border-white rounded-lg m-4">
          <Image
            src="/path-to-placeholder-image.jpg" // Replace with your image path or use a URL
            alt="Placeholder Image 3"
            width={150}
            height={150}
            className="mb-4"
          />
          {/* Birthstone for header */}
          <h2 className={`${birthstone.variable} text-xl font-semibold`}>Zoe</h2>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

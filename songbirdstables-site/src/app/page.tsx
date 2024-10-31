"use client";

import { useState } from "react";
import Image from "next/image";
import { birthstone, itim } from "./fonts/fonts";
import Footer from "./components/footer";
import { Metadata } from "next";
import Zoe from "/src/public/images/zoe.jpg";
import Caspian from "/src/public/images/caspian.jpg";
import Dawn from "/src/public/images/dawn.jpg";
import Hero from "/src/public/images/hero-image.jpg";

// export const metadata: Metadata = {
//   title: "Horse Riding Lessons",
//   description: "Professional horse riding lessons",
// };

export default function Home() {
  // State to manage modal visibility and image details
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Function to open modal and set image
  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] bg-gray-200 rounded-xl">
        <Image
          src={Hero}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="absolute z-0 opacity-60 rounded-xl"
        />
        <div className="absolute bottom-8 right-8 z-10 bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h1 className={`${birthstone.variable} text-4xl font-bold mb-4`}>
            Welcome to Songbird Stables
          </h1>
          <p className={`${itim.variable} mb-6`}>
            Professional horse riding lessons for all ages and skill levels.
          </p>
          <a
            href="/contact"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Grid Section */}
      <h2 className={`${birthstone.variable} text-5xl font-semibold text-center mb-6 mt-6`}>
        Meet our lesson Horses!
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8 py-16 bg-gray-100 rounded-t-xl">
        {/* Horse Boxes */}
        {[
          { src: Caspian, alt: "Caspian", name: "Caspian" },
          { src: Dawn, alt: "Dawn", name: "Dawn" },
          { src: Zoe, alt: "Zoe", name: "Zoe" },
        ].map((horse) => (
          <div
            key={horse.name}
            className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md w-full h-[300px] cursor-pointer"
            onClick={() => openModal(horse.src)}
          >
            <Image
              src={horse.src}
              alt={horse.alt}
              width={200}
              height={200}
              className="object-cover rounded-xl border border-transparent hover:border-black hover:shadow-xl mb-4"
            />
            <h2 className={`${birthstone.variable} text-4xl font-semibold`}>
              {horse.name}
            </h2>
          </div>
        ))}
      </section>

      {/* Image Modal */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={modalImage}
              alt="Expanded Horse"
              width={800}
              height={800}
              className="object-contain max-h-[90vh] max-w-[90vw] rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { birthstone, itim } from "./fonts/fonts";
import Footer from "./components/footer";
// import { Metadata } from "next";
import Zoe from "/src/public/images/zoe.jpg";
import Caspian from "/src/public/images/caspian.jpg";
import Dawn from "/src/public/images/dawn.jpg";
import Aurora from "/src/public/images/aurora.jpg";
import Juliet from "/src/public/images/juliet.jpg";
import Hero from "/src/public/images/hero-image.jpg";

export default function Home() {
  // State to manage modal visibility and image details
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<StaticImageData | null>(null);

  // Function to open modal and set image
  const openModal = (image: StaticImageData) => {
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
            href="/lessons"
            className="bg-blue-500 text-2xl text-white py-3 px-7 rounded-lg hover:bg-blue-600 transition"
          >
            Lesson Pricing
          </a>
        </div>
      </section>

      {/* Grid Section */}
      <h2 className={`${birthstone.variable} text-5xl font-semibold text-center mb-6 mt-6`}>
        Meet our lesson Horses!
      </h2>
      <section className="flex flex-col gap-8 px-8 py-16 bg-gray-100 rounded-t-xl">
        {/* Horse Boxes */}
        {[
          { src: Caspian, alt: "Caspian", name: "Caspian", description: "Caspian is our big teddy bear of a horse. Not only does he have gorgeous coloring, but he loves attention. He gets slightly worried about his riders, and beceause of this he is a more intermediate horse. He does well with more beginner riders that are more calm and not anxious when riding." },
          { src: Dawn, alt: "Dawn", name: "Dawn", description: "Dawn is our majestic girl. She loves attention and snuggles and will follow you around once she gets to know you. With a lively spirit, she loves to walk quickly and is fun to ride for all levels of riding." },
          { src: Zoe, alt: "Zoe", name: "Zoe", description: "Zoe is our sweet but spunky mustang. With her beautiful paint coat, Zoe loves and does great with kids, and is perfect for all levels of riders." },
          { src: Aurora, alt: "Aurora", name: "Aurora", description: "Aurora is our youngest horse here and is still in training. She is so sweet, and walks up to greet everyone that visits. She loves kids and is very gentle with her riders. She is used for young and beginner lessons and some advanced lessons." },
          { src: Juliet, alt: "Juliet", name: "Juliet", description: "Juliet is our dear momma horse. She has a cute baby right now that she is taking care of and will join lessons this fall/winter once her baby gets old enough." },
        ].map((horse) => (
          <div
            key={horse.name}
            className="flex flex-col sm:flex-row items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md w-full cursor-pointer"
            onClick={() => openModal(horse.src)}
          >
            <Image
              src={horse.src}
              alt={horse.alt}
              width={200}
              height={200}
              className="object-cover rounded-xl border border-transparent hover:border-black hover:shadow-xl mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="flex flex-col">
              <h2 className={`${birthstone.variable} text-4xl font-semibold mb-2`}>
                {horse.name}
              </h2>
              <p className={`${itim.variable} text-lg`}>
                {horse.description}
              </p>
            </div>
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

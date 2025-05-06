"use client";
import Footer from "../components/footer";
import Image from "next/image";
import SummerImage from "/src/public/images/lessons/summer2025.jpg";

export default function Summer2025Page() {
    return (
      <>
        {/* Page Title Section */}
        <div className="w-full text-center pt-6 bg-gray-100">
            <h1 className="text-6xl font-bold mb-2">Summer 2025</h1>
            <h2 className="text-3xl text-gray-700">Get ready for a summer of fun!</h2>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen">
          {/* Left Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2 p-4 md:p-6 flex items-center justify-center">
            <Image
              src={SummerImage}
              alt="Summer 2025"
              className="rounded-lg shadow-md object-cover w-full h-auto"
              width={600}
              height={400}
            />
          </div>

          {/* Right Content Section */}
          <div className="flex flex-col w-full md:w-1/2 p-4 md:p-6 justify-center">
            {/* Riding Waiver Section */}
            <section className="flex flex-col items-center justify-center p-6 bg-white shadow-md mb-6 rounded-lg">
              <h2 className="text-4xl font-semibold mb-4">Riding Waiver</h2>
              <a
                href="/riding-waiver.pdf"
                download
                className="text-blue-500 text-xl underline hover:text-blue-700 transition"
                
              >
                Download Riding Waiver
              </a>
            </section>

            {/* Summer 2025 Schedule Section */}
            <section className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg">
              <h2 className="text-4xl font-semibold mb-4">Summer 2025 Schedule</h2>
              <a
                href="/path/to/summer-2025-schedule.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-xl underline hover:text-blue-700 transition"
              >
                Download Summer 2025 Schedule
              </a>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
}

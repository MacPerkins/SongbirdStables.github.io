"use client"
import Footer from "../components/footer";

import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
}, []);
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        {/* Header */}
        <h2 className="text-5xl font-semibold text-center mb-8">Lessons</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-8">
        {/* Pricing Section */}
          <section className="bg-white text-center p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-3xl font-semibold mb-4">Pricing</h3>
            <ul className="space-y-2 text-lg">
              <li>Group Lesson (per student): $35/hour</li>
              <li>Private Lesson: $45/hour</li>
            </ul>
          </section>

          {/* Calendly Scheduling App */}
          <div className="calendly-inline-widget bg-white p-8 rounded-lg shadow-lg text-center md:ml-8 w-full md:w-1/2 flex flex-col items-center" data-url="https://calendly.com/songbird-stables-equestrian" style={{ minWidth: '320px', height: '500px' }}></div>

        </div>


        <Footer/>
      </div>
    );
  }
  
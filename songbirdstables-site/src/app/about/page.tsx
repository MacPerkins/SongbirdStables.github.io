import Image from "next/image";
import { birthstone, itim } from "../fonts/fonts";
import Footer from "../components/footer";
import AimeeHorses from "/src/public/images/aimeehorses.jpg"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] bg-gray-200 flex justify-center items-center">
        {/* Central Image */}
        <Image
          src={AimeeHorses}
          alt="About Us Image"
          width={850}
          height={300}
          className="shadow-lg"
        />
      </section>

      {/* About Us Information Section */}
      <section className="flex flex-col sm:flex-row justify-around items-center gap-8 px-8 py-16 bg-gray-100">
        {/* Text Box 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
          <h2 className={`${birthstone.variable} text-2xl font-bold mb-4`}>Who We Are</h2>
          <p className={`${itim.variable}`}>
            Growing up riding horses, Aimee Perkins, has been riding for over 19 years. During that time she has done a little of everything, including Western Pleasure, Speed Events, Jumping, and Training.
          </p>
        </div>

        {/* Text Box 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
          <h2 className={`${birthstone.variable} text-2xl font-bold mb-4`}>What we do</h2>
          <p className={`${itim.variable}`}>
            We provide begineer to intermediate horse riding lessons for ages 3+. We help students learn how to care for and saddle their horse, teach basic riding techniques, and tailor future lessons to the need of each student.
          </p>
        </div>

        {/* Text Box 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
          <h2 className={`${birthstone.variable} text-2xl font-bold mb-4`}>Why Choose Us</h2>
          <p className={`${itim.variable}`}>
          At Songbird Stables, we are all a family. As a small but growing business, class sizes are smaller, granting me more time to get to know each individual student, flexibility for time and makeup lessons. Students also are granted more time to be around the animals and help around the arena.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

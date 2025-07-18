import { birthstone, itim } from "../fonts/fonts";
import Image from "next/image";
import Riding from "/src/public/images/riding-background.jpg";
import Footer from "../components/footer";

export default function ContactPage() {


    return (
        <section className="min-h-screen flex flex-col bg-gray-100">

            {/* Main Content Section */}
            <div className="flex-grow flex flex-col items-center justify-center">

                {/* Contact Section */}
                <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-8">
                    {/* Horse Riding Image */}
                    <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
                        <Image
                            src={Riding}
                            alt="Background Image of Horse Riding"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </div>

                    {/* Contact Information Box */}
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center mb-6 md:ml-8 w-full md:w-1/2 flex flex-col items-center">
                        <h2 className={`${birthstone.variable} text-4xl font-bold mb-4`}>Contact Us</h2>
                        <p className={`${itim.variable} mb-6`}>
                            We would love to hear from you! Reach out for any questions or conflicts with scheduling a lesson.
                        </p>
                        <div className="text-lg">
                            <p className="mb-2 text-xl font-semibold">
                                Phone: 
                                <a href="tel:8018556542" className="font-normal text-blue-500 hover:underline"> 801-855-6542</a>
                            </p>
                            <p className="mb-2 text-xl font-semibold">
                                Email: 
                                <a href="mailto:songbird.stables.equestrian@gmail.com" className="font-normal text-blue-500 hover:underline"> songbird.stables.equestrian@gmail.com</a>
                            </p>
                            <p className="text-xl font-semibold">
                                Follow us on Instagram: 
                                <a href="https://www.instagram.com/songbird.stables" target="_blank" rel="noopener noreferrer" className="font-normal text-blue-500 hover:underline"> @songbird.stables</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </section>
    );
}

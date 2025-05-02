"use client"
import Footer from "../components/footer";
import Image from "next/image";
import GroupLessonImage from "/src/public/images/lessons/group-lesson1.jpg";
// import PrivateLessonImage from "/src/public/images/private-lesson-placeholder.jpg";
// import HorseBasicsImage from "/src/public/images/horse-basics-placeholder.jpg";

export default function LessonPage() {
    return (
      <>
        <div className="flex flex-col bg-gray-100">
          
          <div className="flex flex-col md:flex-col items-center justify-center w-full max-w-4xl mx-auto p-8">
            {/* Pricing Section */}
            <section className="bg-white flex flex-col md:flex-row items-center text-center p-6 rounded-lg w-full max-w-4xl shadow-md m-6">
              <Image
                src={GroupLessonImage}
                alt="Group Lessons"
                width={300}
                height={200}
                className="rounded-lg mb-4 md:mb-0 md:mr-6"
                loading="lazy"
              />
              <div>
                <h3 className="text-5xl font-semibold mb-4">Group Lessons</h3>
                <p className="text-xl mb-4">Group lessons are available for a max of 3 students per session.</p>
                <ul className="list-disc list-inside space-y-2 text-xl">
                  <li>$35 per hour for each student enrolled.</li>
                  <li>Riding techniques.</li>
                  <li>Horsemanship skills</li>
                </ul>
              </div>
            </section>

            <section className="bg-white flex flex-col md:flex-row items-center text-center p-6 rounded-lg w-full shadow-md m-6">
              {/* <Image
                src={PrivateLessonImage}
                alt="Private Lessons"
                width={300}
                height={200}
                className="rounded-lg mb-4 md:mb-0 md:mr-6"
                loading="lazy"
              /> */}
              <div>
                <h3 className="text-5xl font-semibold mb-4">Private Lessons</h3>
                <ul className="list-disc list-inside space-y-2 text-xl">
                  <li>$70 per hour.</li>
                  <li>Riding techniques.</li>
                  <li>Horsemanship skills</li>
                </ul>
              </div>
            </section>

            <section className="bg-white flex flex-col md:flex-row items-center text-center p-6 rounded-lg w-full shadow-md m-6 relative">
              {/* New Banner */}
              <div className="absolute top-0 left-0 bg-red-500 text-white text-5xl font-bold px-4 py-1 rounded-br-lg animate-pulse">
                New!
              </div>
              {/* <Image
                src={HorseBasicsImage}
                alt="Horse Basics Class"
                width={300}
                height={200}
                className="rounded-lg mb-4 md:mb-0 md:mr-6"
                loading="lazy"
              /> */}
              <div>
                <h3 className="text-5xl font-semibold mb-4">Horse Basics Class</h3>
                <p className="text-xl text-left mb-4">Whether you are brand new to the barn or just brushing up your skills, this course is a perfect introduction to the world of horses. We will cover everything from head to hoof as we explore basic horse anatomy, learn all about tack, (what it is, how it works, the name of its parts), and how to react to horses being spooked, startled, and other real life horse surprises.<br/><br/> This class will be hands-on, build your confidence around horses, and a whole lot of fun!</p>
                <ul className="list-disc list-inside space-y-2 text-xl">
                  <li>$10 for a 30 minute class session.</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
}

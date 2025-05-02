import { birthstone, itim } from "../fonts/fonts";
import Footer from "../components/footer";

export default function PolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Policy Information Section */}
      <section className="flex flex-col sm:flex-col justify-around items-center gap-8 px-8 py-16 bg-gray-100">
        {/* Text Box 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-1xl text-center">
          <h2 className={`${birthstone.variable} text-5xl font-bold mb-4`}>Riding Policy</h2>
          <p className={`${itim.variable} text-left text-xl `}>
            At Songbird Stables, safety comes first! All students are required to bring the following:
            <br />
            <br />
            <ul className="list-disc list-inside mb-4 text-2xl font-bold">
              <li>A riding helmet (bike helmets not permitted)</li>
              <li>A pair of riding boots with a one-inch heel</li>
              <li>A pair of long pants (no shorts or skirts)</li>
            </ul>
            These essentials ensure a safe and successful riding experience each week.
          </p>
        </div>

        {/* Text Box 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-1xl text-center">
          <h2 className={`${birthstone.variable} text-5xl font-bold mb-4`}>Payment Policy</h2>
          <p className={`${itim.variable} text-left text-xl`}>
            Full monthly payment is required <strong>before the first lesson of each month</strong>. This is included in the riding contract.
            <br /><br />
            If payment is not received before the first scheduled lesson, <strong>a $10 late fee will be added.</strong> If not paid within 24 hours of the lesson, another <strong>$5 will be added, bringing the total to $15.</strong> Students will not be permitted to ride until all lesson fees and late fees are paid in full.
            <br /><br />
            This is because I have had students ride without paying, and then they quit lessons with multiple missed payments, and I am not letting people ride for free.
            <br /><br />
            Note: Execptions to the full upfront payment may be arrainged through prior agreement between the client and Songbird Stables
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

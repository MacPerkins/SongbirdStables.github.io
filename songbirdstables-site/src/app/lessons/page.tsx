import Footer from "../components/footer";

export default function Page() {
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        {/* Header */}
        <h2 className="text-5xl font-semibold text-center mb-8">Lessons</h2>
        
        {/* Available Times Section */}
        <section className="bg-white text-center p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-3xl font-semibold mb-4">Available Times</h3>
          <ul className="space-y-2 text-lg">
            <li><span className="font-bold">Monday - Friday: </span>9:00 AM - 12:00 PM, 1:00 PM - 5:00 PM</li>
            <li><span className="font-bold">Saturday: </span>10:00 AM - 2:00 PM</li>
          </ul>
        </section>
        
        {/* Dates for Lessons Section */}
        <section className="bg-white text-center p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-3xl font-semibold mb-4">Lesson Dates</h3>
          <p className="text-lg">Lessons run from March through October each year.</p>
        </section>
        
        {/* Pricing Section */}
        <section className="bg-white text-center p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-3xl font-semibold mb-4">Pricing</h3>
          <ul className="space-y-2 text-lg">
            <li>Group Lesson (per student): $35/hour</li>
            <li>Private Lesson: $45/hour</li>
          </ul>
        </section>
        <Footer/>
      </div>
    );
  }
  
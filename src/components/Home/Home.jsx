import { useState } from "react";
import BookingModal from "../BookingModal";
import DrSavera from "../../assets/DrSavera.jpg";
import Amukta from "../../assets/Amukta.jpg";
import Bhoomi from "../../assets/Bhoomi.jpg";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      {/* Hero Section */}
      {/* <div className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://manhattanmentalhealthcounseling.com/wp-content/uploads/2019/07/4-Meditation-Techniques-that-Can-Improve-Awareness-and-Mental-Health-881x564.jpeg.webp"
            alt="Serene lake with mountains and forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[#342e86] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Pause, Breathe, and Thrive.
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8 max-w-3xl">
            We're here to help you feel better every moment.
          </p>
          <button
            onClick={() => {
              setIsModalOpen(true);
              setSelectedService({
                name: "Meditation Session",
                sessionType: "both",
                locations: ["Pune"],
              });
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {/* Benefits Section */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Discover Inner Peace Through Meditation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reduce Stress</h3>
              <p className="text-gray-600">
                Learn techniques to manage daily stress and anxiety effectively.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Improve Focus</h3>
              <p className="text-gray-600">
                Enhance your concentration and mental clarity through
                mindfulness.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Balance</h3>
              <p className="text-gray-600">
                Achieve harmony between your mind, body, and spirit.
              </p>
            </div>
          </div>
        </div>
      </section> */} */}

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Our Team
          </h2>

          {/* Dr. Rajesh Savera */}
          <div className="bg-[#f0f7ff] px-4 py-12 mb-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
              <div className="w-full md:w-1/3">
                <img
                  src={DrSavera}
                  alt="Dr. Rajesh Savera"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-2">Dr. Rajesh Savera</h3>
                <p className="text-lg text-gray-700 mb-2">BAMS, MS [Psych]</p>
                <p className="text-gray-700 mb-4">
                  Licensed Physician, Psychotherapist & Counselor
                </p>
                <p className="text-gray-700 mb-2">MCIM Reg. No.: I-40012-A1</p>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mt-4 mb-6">
                  "As an Ayurveda Physician, I believe the body needs to be
                  cared for—that's Prevention. As a Psychotherapist & Counselor,
                  I believe the mind needs to be watched—that's Meditation. As a
                  Seeker, I believe life needs to be realized—that's
                  Liberation."
                </blockquote>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedService({
                      name: "Dr. Rajesh Savera",
                      sessionType: "both",
                      locations: ["Pune"],
                      languages: ["English", "Marathi", "Hindi", "Gujarati"],
                      consultationFee: 5000,
                      followUpFee: 5000,
                      duration: "60 mins"
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* S. Amukta Malyada */}
          <div className="bg-[#f8fafc] px-4 py-12 mb-8 rounded-xl">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 max-w-7xl mx-auto">
              <div className="w-full md:w-1/3">
                <img
                  src={Amukta}
                  alt="S. Amukta Malyada"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pr-8">
                <h3 className="text-2xl font-bold mb-2">S. Amukta Malyada</h3>
                <p className="text-lg text-gray-700 mb-4">
                  MSc Psychology (clinical specialization)
                </p>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mt-4 mb-6">
                  "Your journey is a tapestry of every challenge and triumph –
                  each thread contributes to the masterpiece that is you."
                </blockquote>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedService({
                      name: "S. Amukta Malyada",
                      sessionType: "both",
                      locations: ["Pune"],
                      languages: ["English", "Hindi", "Telugu", "Kannada"],
                      consultationFee: 0,
                      followUpFee: 500,
                      duration: "60 mins"
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Bhoomi Batham */}
          <div className="bg-[#f0f7ff] px-4 py-12 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
              <div className="w-full md:w-1/3">
                <img
                  src={Bhoomi}
                  alt="Bhoomi Batham"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold mb-2">Bhoomi Batham</h3>
                <p className="text-lg text-gray-700 mb-4">
                  (Pursuing) BA Psychology
                </p>
                <p className="text-gray-700 mb-2">
                  लोका: समस्ता: सुखिनो भवन्तु
                </p>
                <p className="text-gray-700 mb-2">
                  Lokah Samastah Sukhino Bhavantu
                </p>
                <blockquote className="italic text-gray-700 border-l-4 border-blue-500 pl-4 mt-4 mb-6">
                  "May all beings everywhere be happy and free, and may my
                  thoughts, words, and actions contribute to that happiness and
                  freedom for all."
                </blockquote>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setSelectedService({
                      name: "Bhoomi Batham",
                      sessionType: "both",
                      locations: ["Pune"],
                    });
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />
    </>
  );
};

export default Home;
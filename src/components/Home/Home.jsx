import React from "react";

const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://manhattanmentalhealthcounseling.com/wp-content/uploads/2019/07/4-Meditation-Techniques-that-Can-Improve-Awareness-and-Mental-Health-881x564.jpeg.webp"
            alt="Serene lake with mountains and forest"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-[#0066CC] text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Pause, Breathe, and Thrive.
          </h1>
          <p className="text-gray-800 text-xl md:text-2xl mb-8 max-w-3xl">
            We're here to help you feel better every moment.
          </p>
        </div>
      </div>

      <section className="py-20 px-4 bg-white">
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
      </section>
    </>
  );
};

export default Home;

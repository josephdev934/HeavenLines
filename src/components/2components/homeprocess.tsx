import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import StepImg from "../../assets/process-step.png";

const Process = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="bg-white py-16 px-4">
      <section className="py-20 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-12 px-2 sm:px-4" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-4">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-gray-700 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
              Our step-by-step approach ensures every project is executed with precision, creativity, and style.
            </p>
          </div>

          {/* Flex layout: steps + image */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">

            {/* Steps list */}
            <ul className="flex-1 space-y-6 md:space-y-8 w-full">
              <li className="flex items-start gap-3 sm:gap-4" data-aos="fade-right">
                <span className="text-3xl sm:text-4xl">📝</span>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1">Consultation</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Understanding your vision, preferences, and lifestyle to craft a personalized design plan.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 sm:gap-4" data-aos="fade-right" data-aos-delay="100">
                <span className="text-3xl sm:text-4xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1">Design</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Translating your vision into functional and aesthetic design solutions.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 sm:gap-4" data-aos="fade-right" data-aos-delay="200">
                <span className="text-3xl sm:text-4xl">🏗️</span>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1">Execution</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Bringing the designs to life with precision, ensuring every detail reflects quality.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 sm:gap-4" data-aos="fade-right" data-aos-delay="300">
                <span className="text-3xl sm:text-4xl">✨</span>
                <div>
                  <h3 className="font-semibold text-lg sm:text-xl mb-1">Final Touches</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Styling and finishing touches to create spaces that truly feel like home.
                  </p>
                </div>
              </li>
            </ul>

            {/* Single big image */}
            <div className="flex-1 w-full md:w-auto mb-8 md:mb-0" data-aos="fade-left" data-aos-delay="400">
              <img
                src={StepImg}
                alt="Process Illustration"
                className="w-full h-64 sm:h-80 md:h-[500px] rounded-xl object-cover"
                loading="lazy"
              />
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Process;

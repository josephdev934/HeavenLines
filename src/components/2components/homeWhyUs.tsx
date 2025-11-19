import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";

const SectionSix = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Tailored Luxury",
      desc: "Every design is custom-made to reflect your lifestyle, taste, and personality.",
    },
    {
      title: "Professional Expertise",
      desc: "With deep design understanding, we blend functionality with modern sophistication.",
    },
    {
      title: "End-to-End Service",
      desc: "From concept development to installation, we handle every detail with precision.",
    },
  ];

  const projects = [Project1, Project2, Project3];

  return (
    <section className="bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* ---------------- WHY CHOOSE US ---------------- */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">Why Choose Havenline Interiors</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We bring clarity, luxury, and intention to every project — ensuring a seamless, refined experience 
            from concept to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* ---------------- FEATURED PROJECTS ---------------- */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A glimpse into some of our most refined and luxurious interior transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {projects.map((img, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={i * 200}
            >
              <img
                src={img}
                alt={`Featured project ${i + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* ---------------- FINAL CTA BANNER ---------------- */}
        <div
          className="relative bg-[#884513] text-white py-16 rounded-2xl overflow-hidden"
          data-aos="fade-up"
        >
          <div className="text-center relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Let’s design a home that feels intentional, elegant, and uniquely yours.
            </p>

            <button
              aria-label="View Our Portfolio"
              className="border border-white text-white hover:bg-white hover:text-black font-bold py-3 px-6 rounded-lg transition"
            >
              Book Your Consultation
            </button>
          </div>

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/40"></div>
        </div>

      </div>
    </section>
  );
};

export default SectionSix;

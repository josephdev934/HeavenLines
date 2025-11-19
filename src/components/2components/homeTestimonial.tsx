import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Person1 from "../../assets/person1.jpg";
import Person2 from "../../assets/person2.jpg";
import Person3 from "../../assets/person3.jpg";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const testimonials = [
    {
      img: Person1,
      quote:
        "Havenline Interiors transformed my home into a space I never want to leave. Every detail was perfect.",
      name: "Jane Doe",
      role: "Homeowner",
    },
    {
      img: Person2,
      quote:
        "Professional, creative, and attentive — the team delivered above and beyond our expectations.",
      name: "John Smith",
      role: "Business Owner",
    },
    {
      img: Person3,
      quote:
        "Every room feels intentional and luxurious. I couldn’t recommend Havenline more!",
      name: "Emily Rogers",
      role: "Homeowner",
    },
  ];

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div
          className="text-center mb-12 px-2 sm:px-4"
          data-aos="fade-up"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-sm xs:text-base sm:text-lg text-gray-700 max-w-xs xs:max-w-sm sm:max-w-2xl mx-auto">
            See why homeowners and businesses trust us to create spaces that are both functional and luxurious.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-4 xs:gap-6 sm:gap-8 grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-black p-4 xs:p-5 sm:p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={i * 200}
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 xs:w-20 xs:h-20 rounded-full object-cover mb-3 xs:mb-4"
                loading="lazy"
              />
              <p className="text-white mb-3 xs:mb-4 text-xs xs:text-sm sm:text-base">"{t.quote}"</p>
              <h4 className="font-semibold text-white text-sm xs:text-base sm:text-lg">{t.name}</h4>
              <p className="text-xs xs:text-sm text-gray-300">{t.role}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12 px-2 sm:px-0"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <button className="bg-[#884513] hover:bg-[#6b3410] text-white font-bold py-3 px-6 rounded-lg transition w-full sm:w-auto">
            Schedule Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

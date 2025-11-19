import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./2components/navBar";
import Footer from "./2components/footer";
import Servicesbg from "../assets/servicesbg.jpg";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Full Interior Design",
      desc: "From concept to completion, we create luxurious and functional spaces tailored to your lifestyle."
    },
    {
      title: "Space Planning",
      desc: "We optimize the flow, layout, and usability of your rooms for comfort and efficiency."
    },
    {
      title: "3D Visualization",
      desc: "Experience your design before execution through premium 3D renders and visual concepts."
    },
    {
      title: "Color & Material Selection",
      desc: "Expert guidance in choosing palettes, textures, and finishes that elevate your environment."
    },
    {
      title: "Furniture & Decor Sourcing",
      desc: "We curate high-quality furnishings and decor that match your desired style and feel."
    },
    {
      title: "Renovation & Remodeling",
      desc: "Transform your home with modern remodeling solutions executed with precision."
    }
  ];

  const steps = [
    { step: "01", title: "Consultation", desc: "Understanding your vision, goals, and preferred aesthetic." },
    { step: "02", title: "Concept Development", desc: "We create mood boards, inspirations, and design directions." },
    { step: "03", title: "Design & Planning", desc: "Floor plans, material selection, and 3D visualization." },
    { step: "04", title: "Execution", desc: "We manage the full installation, renovation, and styling process." }
  ];

  return (
    <>
    <NavBar />
    <section className="bg-white text-black">

      {/* ---------------- HERO SECTION ---------------- */}
     <div
        className="relative py-28 bg-gray-100 text-center"
        style={{
            backgroundImage: `url(${Servicesbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
    >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Content */}
        <div className="relative z-10">
            <h1 className="text-5xl text-white font-bold mb-4 text-shadow">
            Our Services
            </h1>

            <p
            className="max-w-2xl mx-auto text-lg text-white text-shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
            >
            Premium interior design services crafted to bring elegance, luxury, and intentional beauty to your spaces.
            </p>
        </div>
    </div>


      {/* ---------------- SERVICES GRID ---------------- */}
      <div className="max-w-6xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((s, i) => (
          <div
            key={i}
            className="p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
            <p className="text-gray-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}

      </div>

      {/* ---------------- OUR PROCESS ---------------- */}
      <div className="bg-black text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 
            className="text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Our Design Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((s, i) => (
              <div 
                key={i} 
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={i * 200}
              >
                <h3 className="text-5xl font-bold text-[#884513] mb-4">{s.step}</h3>
                <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
                <p className="text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------------- FINAL CTA ---------------- */}
      <div className="max-w-6xl mx-auto px-6 my-20">
        <div 
          className="bg-[#884513] text-white py-16 rounded-2xl text-center relative overflow-hidden"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold mb-4">Let’s Bring Your Dream Space to Life</h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-8">
            Whether it's a full home redesign or a single room upgrade, we create spaces that speak luxury and intention.
          </p>

          <button
            aria-label="Book Consultation"
            className="bg-white text-black font-semibold py-3 px-10 rounded-lg hover:bg-gray-200 transition"
          >
            Contact Us Today
          </button>
        </div>
      </div>

    </section>
    <Footer />
    </>
  );
};

export default ServicesPage;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutbg from "../assets/aboutbg.jpg";
import AboutImg from "../assets/Aboutimg.jpg";
import NavBar from "./2components/navBar";
import Footer from "./2components/footer";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <NavBar />
      <section className="bg-white text-black">

        {/* HERO SECTION */}
        <div
          className="relative w-full bg-gray-100 py-32 text-center"
          style={{
            backgroundImage: `url(${Aboutbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white text-shadow" data-aos="fade-up">
            About Havenline Interiors
          </h1>
          <p className="text-white text-shadow max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay={200}>
            Creating spaces that are intentional, luxurious, and uniquely tailored to each client.
          </p>
        </div>

        {/* OUR STORY */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Havenline Interiors was founded with a singular vision: to bring clarity, purpose, and luxury to every space we touch. Our team of experienced designers and strategists combines aesthetics with functionality, ensuring each project reflects the client's personality, lifestyle, and aspirations.
            </p>
            <p className="text-gray-700">
              Over the years, we have collaborated with homeowners, developers, and businesses to create spaces that are not only visually stunning but also enhance the way people live and interact.
            </p>
          </div>
          <div data-aos="fade-left">
            <img
              src={AboutImg}
              alt="Our team at work"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* OUR VALUES */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Everything we do is guided by our core principles, ensuring consistent excellence in design, service, and client satisfaction.
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
            <div data-aos="fade-up" data-aos-delay={100} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Intentional Design</h3>
              <p className="text-gray-600">Every detail is purposeful, reflecting your lifestyle, taste, and personality.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Functional Luxury</h3>
              <p className="text-gray-600">We blend elegance with practical, livable solutions for every space.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={300} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Client-Centered Approach</h3>
              <p className="text-gray-600">Your vision guides every project; we tailor every space to your unique needs.</p>
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">Meet the Team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            <div data-aos="fade-up" className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6">
              <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80" alt="Team member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-1">Jane Doe</h3>
              <p className="text-gray-600">Lead Designer</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={200} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6">
              <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=400&q=80" alt="Team member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-1">Emily Lee</h3>
              <p className="text-gray-600">Creative Director</p>
            </div>
            <div data-aos="fade-up" data-aos-delay={400} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition p-6">
              <img src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=400&q=80" alt="Team member" className="rounded-full w-32 h-32 mx-auto mb-4"/>
              <h3 className="text-xl font-semibold mb-1">Sophia Williams</h3>
              <p className="text-gray-600">Senior Designer</p>
            </div>

            

          </div>
        </div>

        {/* CTA BANNER */}
        <div className="relative bg-[#884513] text-white py-20 text-center rounded-2xl mx-6 mb-20">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">Ready to Elevate Your Space?</h2>
          <p className="text-gray-200 max-w-xl mx-auto mb-8" data-aos="fade-up" data-aos-delay={200}>
            Let’s create interiors that are both functional and luxurious — tailored just for you.
          </p>
          <button className="bg-white text-[#884513] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition" data-aos="fade-up" data-aos-delay={400}>
            Book Your Consultation
          </button>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default AboutPage;

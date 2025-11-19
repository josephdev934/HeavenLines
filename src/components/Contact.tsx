import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import AOS from "aos";
import "aos/dist/aos.css";
import "leaflet/dist/leaflet.css";
import Contactbg from "../assets/contactbg.jpg";
import NavBar from "./2components/navBar";
import Footer from "./2components/footer";

// Fix default marker icons in React + Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mvglkrll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <>
      <NavBar />
      <section className="bg-white text-black">
        {/* HERO */}
        <div
          className="relative w-full bg-gray-100 py-28 text-center"
          style={{
            backgroundImage: `url(${Contactbg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1
            className="text-5xl text-white text-shadow font-bold mb-4"
            data-aos="fade-up"
          >
            Get in Touch
          </h1>
          <p
            className="text-white text-shadow max-w-2xl mx-auto text-lg"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Have a project or question? We'd love to hear from you.
          </p>
        </div>

        {/* CONTACT INFO + FORM */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
          {/* CONTACT INFO */}
          <div data-aos="fade-right">
            <h2 className="text-4xl font-bold mb-6">Contact Details</h2>
            <p className="text-gray-700 mb-4">
              Reach out to us via email, phone, or visit our office in Lagos, Nigeria.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@havenline.com</p>
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+234 810 000 0000</p>
              </div>
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">Lagos, Nigeria</p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <p className="text-4xl font-bold mb-6">Our Socials</p>
            <div className="flex space-x-4 mt-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#884513] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6 w-6">
                  <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.3 0-74.7-33.4-74.7-74.7s33.4-74.7 74.7-74.7 74.7 33.4 74.7 74.7-33.4 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.7-9.9-67.3-36.3-93.7S378.9 6.3 343.2 4.6c-35.7-1.7-142.8-1.7-178.5 0C128.9 6.3 97.3 14.5 70.9 40.9S6.3 133.2 4.6 168.9c-1.7 35.7-1.7 142.8 0 178.5 1.7 35.7 9.9 67.3 36.3 93.7s58 34.6 93.7 36.3c35.7 1.7 142.8 1.7 178.5 0 35.7-1.7 67.3-9.9 93.7-36.3s34.6-58 36.3-93.7c1.7-35.7 1.7-142.8 0-178.5zM398.8 388c-7.8 19.5-22.9 34.6-42.4 42.4-29.3 11.7-98.9 9-132.4 9s-103.1 2.6-132.4-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.3-9-98.9-9-132.4s-2.6-103.1 9-132.4c7.8-19.5 22.9-34.6 42.4-42.4 29.3-11.7 98.9-9 132.4-9s103.1-2.6 132.4 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.3 9 98.9 9 132.4s2.7 103.1-9 132.4z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#884513] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.407.595 24 1.326 24h11.495v-9.294H9.69v-3.622h3.13V8.414c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.326-.593 1.326-1.326V1.326C24 .593 23.405 0 22.675 0z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#884513] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482A13.949 13.949 0 011.671 3.149a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 01-2.229-.616c-.054 2.386 1.671 4.623 4.148 5.123a4.936 4.936 0 01-2.224.084c.626 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 19.54 13.933 13.933 0 007.548 21c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#884513] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.452 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.852-3.036-1.853 0-2.136 1.445-2.136 2.938v5.667H9.355V9h3.414v1.561h.049c.476-.899 1.637-1.852 3.368-1.852 3.6 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.066 0-1.142.924-2.068 2.068-2.068s2.068.926 2.068 2.068c0 1.14-.924 2.066-2.068 2.066zm1.777 13.019H3.56V9h3.554v11.452z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#884513]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#884513]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#884513]"
              />
              <button
                type="submit"
                className="bg-[#884513] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#6b3410] transition"
              >
                Send Message
              </button>
              <p className="mt-2 text-sm text-black">{status}</p>
            </form>
          </div>
        </div>

        {/* LEAFLET MAP */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">
            Our Location
          </h2>
          <MapContainer
            center={[6.5244, 3.3792]}
            zoom={13}
            scrollWheelZoom={false}
            className="w-full h-96 rounded-xl shadow-lg"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[6.5244, 3.3792]}>
              <Popup>Havenline Interiors - Lagos, Nigeria</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;

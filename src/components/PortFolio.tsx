import { useState } from "react";
import NavBar from "./2components/navBar";
import Footer from "./2components/footer";
import Portfoliobg from "../assets/portfoliobg.jpg";
import Portfolio1 from "../assets/portfolio1.jpg";
import Portfolio1i from "../assets/portfolio1i.jpg";
import Portfolio1ii from "../assets/portfolio1ii.jpg";
import Portfolio1iii from "../assets/portfolio1iii.jpg";
import Portfolio2 from "../assets/portfolio2.jpg";
import Portfolio2i from "../assets/portfolio2i.jpg";
import Portfolio2ii from "../assets/portfolio2ii.jpg";
import Portfolio2iii from "../assets/portfolio2iii.jpg";
import Portfolio3 from "../assets/portfolio3.jpg";
import Portfolio3i from "../assets/portfolio3i.jpg";
import Portfolio3ii from "../assets/portfolio3ii.jpg";
import Portfolio3iii from "../assets/portfolio3iii.jpg";
import Portfolio4 from "../assets/portfolio4.jpg";
import Portfolio4i from "../assets/portfolio4i.jpg";
import Portfolio4ii from "../assets/portfolio4ii.jpg";
import Portfolio4iii from "../assets/portfolio4iii.jpg";
import Portfolio5 from "../assets/portfolio5.jpg";
import Portfolio5i from "../assets/portfolio5i.jpg";
import Portfolio5ii from "../assets/portfolio5ii.jpg";
import Portfolio5iii from "../assets/portfolio5iii.jpg";

const portfolioItems = [
  { id: 1, title: "Luxury Living Room", category: "Living Room", img: [Portfolio1, Portfolio1i, Portfolio1ii,Portfolio1iii] },
  { id: 2, title: "Modern Kitchen", category: "Kitchen", img: [Portfolio2,Portfolio2i,Portfolio2ii,Portfolio2iii] },
  { id: 3, title: "Cozy Bedroom", category: "Bedroom", img: [Portfolio3,Portfolio3i,Portfolio3ii,Portfolio3iii] },
  { id: 4, title: "Home Office", category: "Office", img: [Portfolio4,Portfolio4i,Portfolio4ii,Portfolio4iii] },
  { id: 5, title: "Elegant Dining Room", category: "Dining", img: [Portfolio5,Portfolio5i,Portfolio5ii,Portfolio5iii] },
];

const categories = ["All", "Living Room", "Kitchen", "Bedroom", "Office", "Dining"];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Expand all images of items into individual entries
  const expandedItems = portfolioItems.flatMap(item =>
    item.img.map((singleImg, index) => ({
      id: `${item.id}-${index}`,   // make UNIQUE id
      title: item.title,
      category: item.category,
      img: singleImg
    }))
  );

  const filteredItems =
    activeCategory === "All"
      ? expandedItems
      : expandedItems.filter(item => item.category === activeCategory);

  return (
    <>
    <NavBar />
    <div className="w-full">

      {/* HERO */}
      <section className="bg-gray-100 py-24 text-center"
       style={{ backgroundImage: `url(${Portfoliobg})`}} >
        <h1 className="text-5xl text-white font-bold mb-4">Our Portfolio</h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg">
          A showcase of our most refined, intentional interior designs.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="py-12 text-center">
        <div className="flex justify-center flex-wrap gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                activeCategory === cat
                  ? "bg-[#884513] text-white border-[#884513]"
                  : "bg-white text-black border-gray-300 hover:bg-[#884513] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map(item => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
              <h3 className="text-white text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </section>

      {/* CTA BANNER */}
      <section className="bg-black text-white py-20 text-center rounded-xl mx-6 my-12">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Let’s design a home that feels intentional, elegant, and uniquely yours.
        </p>
        <button className="bg-[#884513] hover:bg-[#6b3410] text-white px-8 py-4 rounded-xl font-semibold transition">
          Book Your Consultation
        </button>
      </section>

    </div>
    <Footer />
    </>
  );
};

export default PortfolioPage;

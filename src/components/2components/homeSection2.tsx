import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // React Router Link

import Gallery1 from "../../assets/gallery1.jpg";
import Gallery2 from "../../assets/gallery2.jpg";
import Gallery3 from "../../assets/gallery3.jpg";
import Gallery4 from "../../assets/gallery4.jpg";
import Gallery5 from "../../assets/gallery5.jpg";
import Gallery6 from "../../assets/gallery6.jpg";

const SectionTwo = () => {
  const galleryImages = [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5, Gallery6];
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const [centerIndex, setCenterIndex] = useState(1); // default center image

  // Detect middle image on scroll
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const scrollLeft = scrollRef.current.scrollLeft;
    let itemWidth = scrollRef.current.clientWidth;

    // Determine items per screen width
    if (window.innerWidth >= 1024) itemWidth = itemWidth / 3; // lg
    else if (window.innerWidth >= 768) itemWidth = itemWidth / 2; // md
    else itemWidth = itemWidth; // sm

    const currentCenter = Math.round(scrollLeft / itemWidth);
    setCenterIndex(currentCenter);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    if (scrollRef.current) {
      let step = scrollRef.current.clientWidth;
      if (window.innerWidth >= 1024) step /= 3;
      else if (window.innerWidth >= 768) step /= 2;

      scrollRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      let step = scrollRef.current.clientWidth;
      if (window.innerWidth >= 1024) step /= 3;
      else if (window.innerWidth >= 768) step /= 2;

      scrollRef.current.scrollBy({ left: -step, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            A home for sophistication and purpose
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            At Havenline Interiors, we design with intention. Every detail is crafted to create luxurious, harmonious, and deeply personal environments.
          </p>
        </div>

        <p className="text-center text-3xl sm:text-4xl font-bold playwrite-cz-font mb-8">View Gallery</p>

        {/* Gallery */}
        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 z-20"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 z-20"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar touch-pan-x py-4"
          >
            {galleryImages.map((img, i) => {
              const isCenter = i === centerIndex;

              return (
                <div
                  key={i}
                  className={`transition-transform duration-300 flex-shrink-0 rounded-xl
                    ${
                      window.innerWidth >= 1024
                        ? "min-w-[33%]"
                        : window.innerWidth >= 768
                        ? "min-w-[50%]"
                        : "min-w-[80%]"
                    } 
                    ${isCenter ? "scale-110" : "scale-95 opacity-80"}
                  `}
                >
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[400px] object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services" className="border rounded-[15px] bg-[#884513] py-3 px-6 sm:py-4 sm:px-6 text-white hover:bg-[#6b3410] transition-colors duration-300 cursor-pointer">
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

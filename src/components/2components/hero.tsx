import { Link } from "react-router-dom";
import HeroBG from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{ backgroundImage: `url(${HeroBG})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">

        {/* Typing Heading */}
        <h1
          className="
            text-[27px] xs:text-4xl sm:text-5xl md:text-3xl lg:text-5xl xl:text-7xl
            font-bold mb-4 leading-tight
            border-r-4 border-white
            animate-typing animate-blink
            whitespace-nowrap
            overflow-hidden
          "
        >
          Elevated spaces, intentional design
        </h1>

        {/* Fade-in Paragraph */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto opacity-0 animate-fadeIn animation-delay-1000">
          Crafting refined, functional interiors that blend elegance and comfort, tailored to your unique style.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fadeIn animation-delay-1500">

          {/* Primary Brown Button */}
          <button
            aria-label="Book a Consultation"
            className="bg-[#884513] hover:bg-[#6b3410] text-white font-bold py-2 sm:py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer text-sm sm:text-base w-max"
          >
            BOOK A CONSULTATION
          </button>

          {/* Secondary Transparent Button */}
          <Link
            to="/portfolio"
            aria-label="View Our Portfolio"
            className="border border-white text-white hover:bg-white hover:text-black font-bold py-2 sm:py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer text-sm sm:text-base w-max"
          >
            VIEW OUR PORTFOLIO
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Hero;

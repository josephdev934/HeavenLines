import { Link } from "react-router-dom"; // React Router Link

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* ---- BRAND ---- */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Havenline Interiors
          </h2>
          <p className="text-gray-400">
            Creating timeless, elegant spaces that reflect luxury, comfort, 
            and intentional design.
          </p>

          {/* ---- SOCIALS ---- */}
          <div className="flex items-center gap-4 mt-6">
            {/* Instagram */}
            <a className="hover:text-[#884513] transition" href="">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.51 4.51 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.81 2.81 0 0 1 12 14.8zm4.75-9.55a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a className="hover:text-[#884513] transition" href="">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 9.87v-7h-2.3v-2.87h2.3V9.41c0-2.27 1.35-3.53 3.42-3.53.99 0 2.03.18 2.03.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.42v1.7h2.5l-.4 2.87h-2.1v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
            {/* Twitter */}
            <a className="hover:text-[#884513] transition" href="">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 0 0 1.88-2.37 8.49 8.49 0 0 1-2.71 1.03A4.24 4.24 0 0 0 16.11 4c-2.35 0-4.25 1.9-4.25 4.25 0 .33.04.66.11.97A12.06 12.06 0 0 1 3.15 5.1a4.25 4.25 0 0 0-.57 2.14c0 1.48.75 2.78 1.9 3.55a4.21 4.21 0 0 1-1.92-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.74.15-.89.15-.28 0-.54-.03-.8-.08.54 1.69 2.1 2.92 3.95 2.96A8.51 8.51 0 0 1 2 19.54 12.04 12.04 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68l-.01-.53A8.18 8.18 0 0 0 22.46 6z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a className="hover:text-[#884513] transition" href="">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zm.03 4h-.03A2 2 0 0 1 5 3.5 2 2 0 0 1 5.01 7.5zM3 9h4v12H3zM14.5 9c-2.33 0-3.5 1.61-3.5 1.61V9H7v12h4v-6c0-1.48.96-2.5 2.25-2.5S15 13.52 15 15v6h4v-6.7C19 11.47 16.97 9 14.5 9z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ---- QUICK LINKS ---- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#884513] transition cursor-pointer">Home</Link></li>
            <li><Link to="/services" className="hover:text-[#884513] transition cursor-pointer">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#884513] transition cursor-pointer">Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-[#884513] transition cursor-pointer">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#884513] transition cursor-pointer">Contact</Link></li>
          </ul>
        </div>

        {/* ---- CONTACT ---- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2">
            {/* EMAIL */}
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#884513]" fill="currentColor" viewBox="0 0 640 640">
                <path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/>
              </svg>
              <a className="hover:text-[#884513] transition" href="mailto:info@havenline.com">
                info@havenline.com
              </a>
            </li>
            {/* PHONE */}
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#884513]" fill="currentColor" viewBox="0 0 640 640">
                <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/>
              </svg>
              <a className="hover:text-[#884513] transition" href="tel:+2348100000000">
                +234 810 000 0000
              </a>
            </li>
            {/* LOCATION */}
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#884513]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
              </svg>
              <span>Lagos, Nigeria</span>
            </li>
          </ul>
        </div>

        {/* ---- NEWSLETTER (Functional) ---- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Receive curated interior design tips and project updates.
          </p>

          <form
            action="https://formspree.io/f/mvglkrll" // replace YOUR_FORM_ID
            method="POST"
            className="flex w-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full p-3 rounded-l-lg bg-gray-800 text-white outline-none"
            />
            <button
              type="submit"
              className="bg-[#884513] hover:bg-[#6b3410] text-white px-5 py-3 rounded-r-lg transition"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* ---- COPYRIGHT ---- */}
      <div className="border-t border-gray-700 mt-14 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Havenline Interiors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

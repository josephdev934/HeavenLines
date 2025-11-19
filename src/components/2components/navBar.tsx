"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // React Router Link

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  // Measure menu height for smooth slide
  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(menuRef.current.scrollHeight);
    }
  }, [menuRef, open]);

  return (
    <>
      <nav className="w-full px-7 py-7 flex items-center justify-between font-semibold relative">

        {/* LEFT LINKS (desktop only) */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className="hover:text-[#884513] cursor-pointer">HOME</Link>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-[#884513] cursor-pointer">PORTFOLIO</Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#884513] cursor-pointer">SERVICES</Link>
          </li>
        </ul>

        {/* LOGO */}
        <div className="text-center text-xl font-bold playwrite-cz-font md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <span className="ml-[20px] font-sans text-4xl">HL</span>
          <br />
          HeavenLines
        </div>

        {/* RIGHT LINKS (desktop only) */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link to="/about" className="hover:text-[#884513] cursor-pointer">ABOUT</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-[#884513] cursor-pointer">BLOG</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#884513] cursor-pointer">CONTACT US</Link>
          </li>
          <li>
            <a href="tel:+234 810 000 0000 "className="border rounded-[15px] bg-[#884513] py-4 px-4 text-white hover:bg-[#6b3410] cursor-pointer">
              BOOK A CALL
            </a>
          </li>
        </ul>

        {/* Hamburger Menu (mobile only) */}
        <button
          className="md:hidden ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden w-full overflow-hidden transition-all duration-500 bg-black text-white`}
        style={{ maxHeight: open ? `${menuHeight}px` : "0px" }}
      >
        <div ref={menuRef} className="px-4 py-4 space-y-4 text-center">
          <ul className="space-y-4 text-lg">
            <li>
              <Link to="/" className="hover:text-[#884513] cursor-pointer">HOME</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-[#884513] cursor-pointer">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#884513] cursor-pointer">SERVICES</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#884513] cursor-pointer">ABOUT</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#884513] cursor-pointer">BLOG</Link>
            </li>
            <li>
              <Link to="/book" className="bg-[#884513] py-3 px-4 rounded-[15px] text-center text-white cursor-pointer">
                BOOK A CALL
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;

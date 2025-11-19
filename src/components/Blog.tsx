import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogbg from "../assets/blogbg.jpg";
import NavBar from "./2components/navBar";
import Footer from "./2components/footer";

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // 18 blog posts
  const allPosts = [
    { id: 1, title: "10 Interior Design Trends for Modern Homes", desc: "Discover the latest design inspirations that elevate your living space with timeless elegance.", date: "Jan 20, 2025" },
    { id: 2, title: "How to Choose the Perfect Color Palette", desc: "A simple guide to selecting colors that bring harmony, personality, and warmth to your home.", date: "Jan 12, 2025" },
    { id: 3, title: "Luxury Living Room Design Essentials", desc: "From textures to lighting, here are the key elements that make a living room feel luxurious.", date: "Dec 30, 2024" },
    { id: 4, title: "The Art of Minimalist Interior Design", desc: "Learn how to create clean, intentional spaces that breathe clarity and sophistication.", date: "Dec 15, 2024" },
    { id: 5, title: "Maximizing Small Spaces with Smart Layouts", desc: "Make your small room feel larger with clever interior design strategies.", date: "Nov 28, 2024" },
    { id: 6, title: "A Guide to Choosing the Right Furniture", desc: "Find pieces that balance comfort, beauty, and functionality effortlessly.", date: "Nov 10, 2024" },
    { id: 7, title: "Creating a Cozy Bedroom Retreat", desc: "Tips for making your bedroom feel relaxing, functional, and stylish.", date: "Oct 25, 2024" },
    { id: 8, title: "Lighting Tricks for a Luxury Home", desc: "How to use lighting to transform your spaces into sophisticated, warm environments.", date: "Oct 10, 2024" },
    { id: 9, title: "Open Plan Living: Pros and Cons", desc: "A detailed look at open-concept living spaces and how to make them work for your home.", date: "Sep 30, 2024" },
    { id: 10, title: "Selecting the Perfect Rugs for Every Room", desc: "Rug placement, style, and color tips for every interior.", date: "Sep 15, 2024" },
    { id: 11, title: "Kitchen Design: Function Meets Style", desc: "Creating beautiful and functional kitchens that inspire cooking and entertaining.", date: "Aug 28, 2024" },
    { id: 12, title: "Bathroom Makeovers That Wow", desc: "From tiles to lighting, ideas to turn your bathroom into a spa-like retreat.", date: "Aug 12, 2024" },
    { id: 13, title: "Sustainable Design Practices", desc: "Eco-friendly tips for designing homes that are beautiful and responsible.", date: "Jul 25, 2024" },
    { id: 14, title: "The Power of Accent Walls", desc: "How to create striking focal points in any room.", date: "Jul 10, 2024" },
    { id: 15, title: "Mixing Textures for a Luxurious Feel", desc: "Learn to combine fabrics, metals, and materials elegantly.", date: "Jun 30, 2024" },
    { id: 16, title: "Home Office Design for Productivity", desc: "Tips for designing workspaces that are stylish and effective.", date: "Jun 15, 2024" },
    { id: 17, title: "Choosing Window Treatments Like a Pro", desc: "Blinds, curtains, and drapes: how to pick the right ones for your space.", date: "May 28, 2024" },
    { id: 18, title: "Decorating Tips for Entertaining Spaces", desc: "Create rooms that impress and function perfectly for guests.", date: "May 12, 2024" },
  ];

  const postsPerPage = 6;
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
    <NavBar />
    <section className="bg-white text-black">
      {/* HERO */}
      <div className="py-28 bg-gray-100 text-center"
        style={{ backgroundImage: `url(${Blogbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-5xl font-bold mb-4 text-white" data-aos="fade-up">
          Havenline Interiors Blog
        </h1>
        <p className="text-white max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay={200}>
          Explore expert insights, trends, and design inspiration for your home.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentPosts.map((post, i) => (
          <div key={post.id} className="p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition" data-aos="fade-up" data-aos-delay={i * 100}>
            <p className="text-sm text-[#884513] font-semibold mb-2">{post.date}</p>
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p className="text-gray-600 mb-5">{post.desc}</p>
            <button className="text-[#884513] font-semibold hover:underline">Learn More →</button>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-center gap-4 pb-20">
        <button
          onClick={prevPage}
          className={`px-5 py-2 rounded-lg border ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "bg-white hover:bg-gray-100"}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={nextPage}
          className={`px-5 py-2 rounded-lg text-white bg-[#884513] hover:bg-[#6b3410] ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default BlogPage;

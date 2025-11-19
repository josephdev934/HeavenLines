import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PortfolioPage from "./components/PortFolio";
import ServicesPage from "./components/Services";
import BlogPage from "./components/Blog";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

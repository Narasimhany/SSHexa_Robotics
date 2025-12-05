import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies"
import ContactUs from "./pages/ContactUs";
import HomeHero from "./components/HomeHero";
import HomeCTA from "./components/HomeCTA";
import Footer from "./components/Footer";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2";
import './responsive.css';



function App() {
  return (
    <div className="app-container">

     
    <Router>
      <NavBar />
       <div className="page-content">
      <Routes>
        
        <Route path="/"
          element={
            <>
              <HomeHero />
              
              <HomeCTA />
            </>
          } />
        
        
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        {<Route path="/blog" element={<Blog />} />}
        {<Route path="/casestudies" element={<CaseStudies />} />}
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/blogs/blog1" element={<Blog1 />} />
        <Route path="/blogs/blog2" element={<Blog2 />} />
      </Routes>
      </div>
      <Footer />
      
    </Router>
    </div>
  );
}

export default App;

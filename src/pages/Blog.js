import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

import product1 from "./EPSON.png";
import product2 from "./background.png";

const blogs = [
  {
    category: "BLOGS",
    title: "Introducing VitriFlex: A Modular, Affordable Cryo-EM Grid Freezing Platform",
    description:
      "Robotic automation is emerging as a transformative force that can revolutionize processes, optimize resources, and drive growth. However…",
    readTime: "32 minute read",
    image: product1,
    link: "/blogs/blog1",
  },
  {
    category: "BLOGS",
    title: "Vitriflex Quick Start",
    description:
      "Robot joints are the movable connections between different parts of a robot’s body, much like the joints in humans. These…",
    readTime: "39 minute read",
    image: product2,
    link: "/blogs/blog2",
  },
  {
    category: "BLOGS",
    title: "Inside VitriFlex",
    description:
      " System Overview and Design of an Cryo-EM Preparation Platform",
    readTime: "15 minute read",
    image: product2,
    link: "/blogs/blog3",
  },
];

const Blog = () => {
  return (
    <div className="blog-page">
      
      {/* Heading */}
      <h1 className="blog-title">Blog</h1>
      <p className="blog-subtitle">
        You will find SSHexa news, product launch announcements, and general discussions
        on robotics on this page.
      </p>

      {/* Filters + Sorting */}
      <div className="blog-toolbar">
        <div className="blog-filters">
          <button className="filter-btn active">ALL</button>
          <button className="filter-btn">BLOGS</button>
          <button className="filter-btn">NEWS</button>
          <button className="filter-btn">PRODUCTS</button>
        </div>

        <div className="blog-sort">
          <select>
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="blog-grid">
        {blogs.map((blog, idx) => (
          <Link to={blog.link} key={idx} className="blog-card">
            
            <img src={blog.image} alt={blog.title} className="blog-image" />

            <div className="blog-content">
              <p className="blog-category">{blog.category}</p>
              <h3 className="blog-heading">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <p className="blog-readtime">{blog.readTime}</p>

              <button className="blog-readmore">Read More</button>
            </div>

          </Link>
        ))}
      </div>

    </div>
  );
};

export default Blog;

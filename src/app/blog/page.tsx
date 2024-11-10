"use client";
import React from "react";
import BlogCards from "../components/BlogCards";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="blog-wrapper">
        <div className="blog-section">
          <p data-aos="fade-right" data-aos-delay="100" className="blog-badge">
            My Blog Spot
          </p>
          <div className="blog-content">
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="blog-main-heading"
            >
              Discover My <span>Blog</span> and Insights{" "}
              <i className="bx bx-news"></i>
            </h1>
            <p data-aos="fade-right" data-aos-delay="100" className="blog-des">
              Discover a fresh perspective every day. Explore my latest
              thoughts, ideas, and projects. Stay tuned for regular updates and
              new content. Join me on a personal journey as I share my
              experiences, thoughts, and reflections on life. Discover what
              inspires me, challenges me, and keeps me going.⋆｡°✩
            </p>
            <div className="blog-qoute-section">
              <p
                data-aos="fade-left"
                data-aos-delay="100"
                className="blog-qoute"
              >
                A blog is a voice that captures the present and inspires the
                future. 🚀
              </p>
            </div>
          </div>
        </div>
        <div className="blogCards-boxes">
          <div className="">
            <BlogCards
              title="FullStack developer roadmap"
              comment="4"
              date="4 october 2024"
              image="/blog1.jpg"
            />
          </div>
          <div className="">
            <BlogCards
              title="Starting Next.js"
              comment="8"
              date="01 september 2024"
              image="/blog2.jpg"
            />
          </div>
          <div className="">
            <BlogCards
              title="Time Managment"
              comment="4"
              date="7 May 2024"
              image="/blog3.jpg"
            />
          </div>
        </div>
        <div className="blog-button-wrapper">
          <button
            data-aos="fade-right"
            data-aos-delay="200"
            className="blog-button"
          >
            Join the Conversation <i className="bx bx-conversation"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;

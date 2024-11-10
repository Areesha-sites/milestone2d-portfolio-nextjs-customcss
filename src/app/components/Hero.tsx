"use client";
import React from "react";
import TypeWriterEffect from "./helper/TypeWritter";
import Image from "next/image";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";
const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-left-side">
          <div className="hero-grid">
            <div className="hero-order">
              <div
                data-aos="fade-right"
                data-aos-delay="100"
                className="hero-content-section"
              >
                <p className="hero-badge">Welcome To My Digital Space</p>
              </div>
              <div className="">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="200"
                  className="hero-main-heading"
                >
                  Hey I am <span>Areesha</span>
                </h1>
                <TypeWriterEffect data-aos="fade-right" data-aos-delay="100" />
              </div>
              <p
                data-aos="fade-right"
                data-aos-delay="200"
                className="hero-des"
              >
                I am <span>Areesha</span>, a web developer with a passion for
                creating exceptional digital experiences. Skilled in
                <span> Next.js </span>,<span>Tailwind CSS</span>, and modern web
                technologies, I build responsive, dynamic websites that are both
                visually captivating and highly functional. Combining creativity
                with technical expertise, I am committed to delivering intuitive
                user experiences and innovative solutions tailored to every
                project.✦
              </p>
              <div className="hero-qoute">
                <i>
                  <b data-aos="fade-right" data-aos-delay="200">
                    Building Ideas one line of code at a time. 💻
                  </b>
                </i>
              </div>
              <div className="hero-button-wrapper">
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  className="hero-button"
                >
                  <Link href="/contact">
                    <span>Hire Me</span>
                  </Link>
                </button>
                <button
                  data-aos="zoom-in-right"
                  data-aos-delay="100"
                  className="hero-button"
                >
                  <Link href="/blog">
                    Download CV
                    <i className="bx bxs-download"></i>
                  </Link>
                </button>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="hero-right-side"
            >
              <Image
                src="/main-image.png"
                alt="hero"
                width={400}
                height={400}
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

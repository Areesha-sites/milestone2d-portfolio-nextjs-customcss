"use client";
import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";
import "boxicons/css/boxicons.min.css";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="about-wrapper">
        <div className="about-section">
          <div className="">
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className="about-badge"
            >
              About Me
            </p>
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="about-main-heading"
            >
              Meet <span>Areesha</span> Your Web Development Specialist.
              <i className="bx bxl-sketch about-sketch-icon"></i>
            </h1>
            <p data-aos="fade-right" data-aos-delay="200" className="about-des">
              Hi! I am <b>Areesha,</b> a passionate web developer dedicated to
              creating impactful digital experience. With expertise in React,
              Javascript and Next.Js, I transform ideas into user-friendly
              website that drive results.✮
            </p>
            <div className="about-quote">
              <b data-aos="fade-right" data-aos-delay="200">
                <i>Connecting Creativity and technology in Everything I Do.</i>
                💡
              </b>
            </div>

            <div className="about-bottom-content">
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="about-bottom"
              >
                <CheckIcon className="about-check-icon" />
                <p className="about-bottom-text">Frontend Developer</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="about-bottom"
              >
                <CheckIcon className="about-check-icon" />
                <p className="about-bottom-text">Javascript Developer</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="about-bottom"
              >
                <CheckIcon className="about-check-icon" />
                <p className="about-bottom-text">Typescript Developer</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="about-bottom"
              >
                <CheckIcon className="about-check-icon" />
                <p className="about-bottom-text">Next.Js Developer</p>
              </div>
              <div
                data-aos="fade-right"
                data-aos-delay="200"
                className="about-bottom"
              >
                <CheckIcon className="about-check-icon" />
                <p className="about-bottom-text">UX/UI Designer</p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="about-bottom"
              >
                <CheckIcon className="about-check-icon" />
                <p className="about-bottom-text">Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="about-left-side">
              <Tilt>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="about-left-boxes"
                >
                  <p className="about-boxes-heading">HTML & CSS</p>
                  <p className="about-boxes-para">
                    Proficient in crafting responsive and accessible web
                    layouts, ensuring seamless user experience across devices.
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="about-left-boxes"
                >
                  <p className="about-boxes-heading">JavaScript</p>
                  <p className="about-boxes-para">
                    Well-versed in core Javascript principles, enabling me to
                    dynamic and interactive web applications.
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="about-left-boxes"
                >
                  <p className="about-boxes-heading">React & Next.js</p>
                  <p className="about-boxes-para">
                    Specializing in React and Next.js to create
                    high-performance, scalable applications.
                  </p>
                </div>
              </Tilt>
              <Tilt>
                <div
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="about-left-boxes"
                >
                  <p className="about-boxes-heading">Team Player</p>
                  <p className="about-boxes-para">
                    A collaborative team player with strong problem-solving
                    abilities, commited to driving projects.
                  </p>
                </div>
              </Tilt>
              <div className="about-button-section">
                <button
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  className="about-button"
                >
                  <Link href="/projects"> View My Work</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

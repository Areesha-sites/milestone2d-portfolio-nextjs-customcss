"use client"
import React from "react";
import Link from "next/link";
import SkillCards from "../components/SkillCards";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="skills-wrapper">
        <div className="skills-section">
          <p
            data-aos="fade-right"
            data-aos-delay="100"
            className="skills-badge"
          >
            My Expertise Showcase
          </p>
          <div className="skills-content">
            <h1
              data-aos="fade-left"
              data-aos-delay="100"
              className="skills-main-heading"
            >
              Unveiling My Top <span>Skills</span> & Experience{" "}
              <i className="bx bxs-folder-open"></i>
            </h1>
            <p data-aos="fade-right" data-aos-delay="100" className="skills-des">
              I specialize in creating dynamic, responsive websites using
              <b> React, Next.js,</b> and <b>Tailwind CSS,</b> combining design
              and functionality for seamless user experiences. With expertise in
              both frontend and backend development, I build scalable,
              efficient, and innovative solutions that bring ideas to life.
            </p>
          </div>
          <div className="skills-button-section">
            <button
              data-aos="fade-left"
              data-aos-delay="100"
              className="skills-button"
            >
              <Link href="/contact">
                <span>Hire Me</span>
              </Link>
            </button>
          </div>
        </div>
        <div className="skills-cards-section">
          <div className="">
            <SkillCards image="/react.svg" percent="65%" title="React.JS" />
          </div>
          <div className="">
            <SkillCards image="/next.svg" percent="60%" title="Next.JS" />
          </div>
          <div className="">
            <SkillCards image="/html.svg" percent="80%" title="HTML" />
          </div>
          <div className="">
            <SkillCards image="/css.svg" percent="75%" title="CSS" />
          </div>
          <div className="">
            <SkillCards
              image="/javascript.svg"
              percent="80%"
              title="Javascript"
            />
          </div>
          <div className="">
            <SkillCards
              image="/typescript.svg"
              percent="75%"
              title="Typescript"
            />
          </div>
          <div className="">
            <SkillCards image="/node.svg" percent="60%" title="Node.JS" />
          </div>
          <div className="">
            <SkillCards image="/tailwind.svg" percent="80%" title="Tailwind " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

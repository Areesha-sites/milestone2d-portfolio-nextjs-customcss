import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-left-side">
          <div className="">
            <div className="footer-logo-wrapper">
              <span className="footer-logo">
                Vision
                <span>Areesha</span>
              </span>
            </div>
            <h1 className="footer-des">
              Thank you for visiting my portfolio! I specialize in creating
              modern, responsive websites that help bussiness establish a strong
              online presence. Feel free to explore my work and reach out for
              any inquiries or collaboration opportunities. Let is build
              something amazing together!🌐
            </h1>
            <p className="footer-email">areesha21314@gmail.com</p>
          </div>
          <div className="footer-links-wrapper">
            <h1 className="footer-heading">
              <i> Quick Links</i>
            </h1>
            <Link className="footer-link" href="/">
              Home
            </Link>
            <Link className="footer-link" href="/about">
              About
            </Link>
            <Link className="footer-link" href="/services">
              Services
            </Link>
            <Link className="footer-link" href="/skills">
              Skills
            </Link>
            <Link className="footer-link" href="/projects">
              Projects
            </Link>
            <Link className="footer-link" href="/blog">
              Blogs
            </Link>
            <Link className="footer-link" href="/contact">
              Contact
            </Link>
          </div>
          <div className="footer-right-side">
            <h1 className="footer-right-heading">
              <i>Address</i>
            </h1>
            <div className="footer-right-content">
              <MapIcon className="footer-map-icon" />
              <p className="footer-address">North, karachi pakistan</p>
            </div>
            <div className="footer-envelop-section">
              <EnvelopeIcon className="footer-envelop-icon" />
              <p className="footer-envelop-email">areesha21314@gmail.com</p>
            </div>
            <div className="footer-phoneIcon-section">
              <PhoneIcon className="footer-phone-icon" />
              <p className="footer-number">0331-2969746</p>
            </div>
            <div className="footer-social-links">
              <a
                href="https://github.com/Areesha-sites"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
              >
                <FaGithub className="footer-social-icon" />
              </a>

              <a
                href="https://www.instagram.com/zoxo_emmaaa/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram className="footer-social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/areesha-sattar-14b48832b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                title="Linkedin"
              >
                <FaLinkedin className="footer-social-icon " />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">&copy; Copyright Areesha 2024</div>
      </div>
    </>
  );
};

export default Footer;

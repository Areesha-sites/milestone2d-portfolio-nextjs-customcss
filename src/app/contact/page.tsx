"use client";
import React from "react";
import "boxicons/css/boxicons.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="contact-wrapper">
        <div className="contact-section">
          <div className="contact-grid">
            <div className="">
              <p
                data-aos="fade-right"
                data-aos-delay="100"
                className="contact-badge"
              >
                Get in Touch
              </p>
              <h1
                data-aos="fade-left"
                data-aos-delay="100"
                className="contact-main-heading"
              >
                Elevate Your <span>Brand </span>
                to New Heights <i className="bx bxs-crown"></i>
              </h1>

              <p
                data-aos="fade-right"
                data-aos-delay="100"
                className="contact-des"
              >
                Ready to take your <b> Brand</b> to the next level? Lets
                collaborate and bring your vision to life with professional
                designs that truly reflect your business. Whether it is creating
                a stunning website or crafting a unique brand identity. I am
                here to help you shine in the digital world. Lets connect and
                start your brands transformation today.💙
              </p>
              <div className="contact-qoute-section">
                <p
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="contact-qoute"
                >
                  Your brand is the story the world will remember. Let is make
                  it brilliant together!🤝
                </p>
              </div>
            </div>
            <div className="">
              <div className="contact-input">
                <input
                  data-aos="fade-left"
                  data-aos-delay="100"
                  type="text"
                  placeholder="Name"
                  className="contact-name-input"
                  required
                />
                <input
                  data-aos="fade-right"
                  data-aos-delay="100"
                  type="email"
                  placeholder="Email"
                  className="contact-email-input"
                  required
                />
              </div>
              <input
                data-aos="zoom-in"
                data-aos-delay="100"
                type="text"
                placeholder="Subject"
                className="contact-subject-input"
              />
              <textarea
                data-aos="zoom-up"
                data-aos-delay="100"
                placeholder="Message"
                rows={4}
                className="contact-textarea"
              ></textarea>
              <button
                data-aos="zoom-in-right"
                data-aos-delay="100"
                className="contact-button"
              >
                Send Message <i className="bx bx-send"></i>
              </button>
              <div className="">
                <h1
                  data-aos="fade-left"
                  data-aos-delay="100"
                  className="contact-map-heading"
                >
                  A Glimpse into My Space
                  <i className="bx bxs-map contact-map-icon "></i>
                </h1>
              </div>
              <div className="google-map-container ">
                <iframe
                  data-aos="zoom-in"
                  data-aos-delay="100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.7287421642064!2d67.00993831499772!3d24.860734884060987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f97e63f6a07%3A0x146dc1aab64e2d2!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2s!4v1616688847380!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

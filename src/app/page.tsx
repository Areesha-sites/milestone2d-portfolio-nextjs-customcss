"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import Hero from "./components/Hero";
import { useEffect } from "react";
import Head from "next/head";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <>
      <div>
      <Head>
        <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
      </Head>
        <Hero />
      </div>
    </>
  );
};

export default Home;

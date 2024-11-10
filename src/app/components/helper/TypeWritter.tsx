"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriterEffect = () => {
  return (
    <>
      <TypeAnimation
        sequence={[
          "A Frontend Developer",
          1000,
          "A Javacsript Developer",
          1000,
          "A React.Js Developer",
          1000,
          "A Next.Js Developer",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className="typeWritter-section"
        repeat={Infinity}
      />
    </>
  );
};

export default TypeWriterEffect;

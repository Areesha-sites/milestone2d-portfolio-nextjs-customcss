"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { SkillCardsType } from "../../../types/Types";
const SkillCards = ({ image, percent, title }: SkillCardsType) => {
  return (
    <>
      <Tilt>
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="skillCards-wrapper"
        >
          <Image
            src={image}
            width={80}
            height={80}
            alt="React"
            className="skillCards-images"
          />
          <h1 className="skillCards-title">{title}</h1>
          <div className="skillCards-percent">{percent}</div>
          <button className="skillCards-button">Explore More</button>
        </div>
      </Tilt>
    </>
  );
};

export default SkillCards;

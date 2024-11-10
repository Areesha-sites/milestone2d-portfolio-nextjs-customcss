import {
  BugAntIcon,
  CodeBracketIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  RocketLaunchIcon,
  ServerIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import Tilt from "react-parallax-tilt";
import { ServicesCardsType } from "../../../types/Types";
const iconMapping: Record<string, React.ElementType> = {
  "01": CommandLineIcon,
  "02": ServerIcon,
  "03": CodeBracketIcon,
  "04": CursorArrowRaysIcon,
  "05": RocketLaunchIcon,
  "06": BugAntIcon,
};

const ServicesCards = ({ num, title, description }: ServicesCardsType) => {
  const IconComponent = iconMapping[num] || iconMapping["01"];

  return (
    <>
      <Tilt>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="300"
          className="servicesCards-wrapper"
        >
          <IconComponent className="servicesCards-icon-comp" />
          <h1 className="servicesCards-title">{title}</h1>
          <p className="servicesCards-des">{description}</p>
          <p className="servicesCards-number">{num}</p>
        </div>
      </Tilt>
    </>
  );
};

export default ServicesCards;

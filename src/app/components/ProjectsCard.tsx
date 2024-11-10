import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectCardsType } from "../../../types/Types";
const ProjectsCard = ({
  image,
  title,
  tech1,
  tech2,
  tech3,
  tech4,
  description,
  sourceCode,
  livePreview,
}: ProjectCardsType) => {
  return (
    <>
      <div className="projectCard-wrapper">
        <div className="projectCard-boxes">
          <Image
            src={`${image}`}
            alt={title}
            width={450}
            height={300}
            className="projectCard-image"
          />
        </div>
        <div className="projectCard-content">
          <h1 className="projectCard-title">{title}</h1>

          <p className="projectCard-des">{description}</p>
          <div className="projectCard-bottom">
            <span className="projectCard-tech">{tech1}</span>

            <span className="projectCard-tech">{tech2}</span>

            <span className="projectCard-tech">{tech3}</span>

            <span className="projectCard-tech">{tech4}</span>
          </div>
          <div className="projectCard-links-wrapper">
            <button className="projectCard-link1">
              <Link href={sourceCode} target="_blank">
                Source Code
              </Link>
            </button>
            <button className="projectCard-link2">
              <Link href={livePreview} target="_blank">
                Live Preview
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;

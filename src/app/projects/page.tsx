import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import "boxicons/css/boxicons.min.css";
const Projects = () => {
  return (
    <>
      <div className="project-wrapper">
        <div className="project-section">
          <p className="project-badge">Latest Creation</p>
          <div className="project-content">
            <h1 className="project-main-heading">
              Showcasing my Creative
              <span>
                <br />
                Projects
              </span>
              <i className="bx bxs-briefcase  project-briefcase-icon"></i>
            </h1>
            <p className="project-des">
              Each project reflects my passion for creativity and commitment to
              delivering impactful solutions. From design to development, my
              work showcases a diverse range of skills and experiences,
              carefully crafted to meet the needs of clients. Explore the
              projects that highlight my expertise and dedication to
              excellence.💙
            </p>
            <div className="project-quote-wrapper">
              <p className="project-quote">
                Great projects are not just built; they are crafted with
                creativity, dedication, and purpose.📝
              </p>
            </div>
          </div>
        </div>
        <ProjectsCard
          title="Portfolio Website"
          description="In this Project I created a dynamic and responsive website using the core web technologies: HTML, CSS, and JavaScript. The structure is built with clean HTML, styled with modern CSS techniques, including flexbox and grid layouts, and enhanced with interactive JavaScript features. This project showcases my ability to develop user-friendly interfaces, focus on responsive design, and ensure smooth, interactive experiences across all devices"
          tech1="HTML"
          tech2="CSS"
          tech3="Javascript"
          tech4="Typescript"
          image="/project1.jpg"
          sourceCode="https://github.com/Areesha-sites/Portfolio-HTML_CSS_JS.git"
          livePreview="https://portfolio-html-css-js-zeta.vercel.app/"
        />
        <ProjectsCard
          title="Education Website"
          description="This project is a comprehensive education website developed with Next.js and React for fast, efficient, and scalable performance. Leveraging the power of Tailwind CSS, the design is sleek, responsive, and optimized for user experience. The platform provides an intuitive interface for users to explore courses, engage with content, and navigate effortlessly across pages. This project highlights my expertise in building modern web applications with a focus on performance, usability, and clean design."
          tech1="React"
          tech2="Next"
          tech3="Tailwind"
          tech4="Typescript"
          image="/project2.jpg"
          sourceCode="https://github.com/Areesha-sites/Education-Website-tailwindCss.git"
          livePreview="https://educational-web-neon.vercel.app/"
        />
        <ProjectsCard
          title="Calculator Project"
          description="This project is a fully functional calculator built with a combination of HTML, CSS, JavaScript, and TypeScript. The user interface is designed with a clean and modern layout, ensuring a smooth and intuitive user experience. TypeScript enhances the project by adding type safety, improving code reliability and maintainability. This calculator demonstrates my ability to create interactive, responsive tools while adhering to best coding practices for a seamless user experience"
          tech1="HTML"
          tech2="CSS"
          tech3="Javascript"
          tech4="Typescript"
          image="/project3.jpg"
          sourceCode="https://github.com/Areesha-sites/Calculator-with-HTML-CSS-JS.git"
          livePreview="https://calculator-with-html-css-js.vercel.app/"
        />
        <ProjectsCard
          title="Hackathon Resume"
          description="This project features an interactive resume developed using HTML, CSS, JavaScript, and TypeScript. The design is clean and modern, showcasing my skills, experiences, and accomplishments in a visually appealing manner. By utilizing JavaScript and TypeScript, I added dynamic elements such as collapsible sections for detailed information and responsive design to ensure optimal viewing on all devices. This project not only highlights my technical skills but also reflects my ability to present information effectively and engagingly."
          tech1="HTML"
          tech2="CSS"
          tech3="Javacsript"
          tech4="Typescript"
          image="/project4.jpg"
          sourceCode="https://github.com/Areesha-sites/Hackathon-Milstones.git"
          livePreview="https://milstone1-2.vercel.app/"
        />
        <ProjectsCard
          title="Hackathon Form"
          description="This project features a user-friendly registration form designed specifically for hackathon participants. Built with HTML, CSS, and JavaScript, the form streamlines the registration process, allowing users to easily input their information and submit it for consideration. The layout is responsive and visually appealing, ensuring a seamless experience on both desktop and mobile devices. JavaScript is utilized to enhance functionality, including real-time validation and feedback for user inputs. This project showcases my ability to create effective web forms that enhance user experience and facilitate event organization."
          tech1="HTML"
          tech2="CSS"
          tech3="Javacsript"
          tech4="Typescript"
          image="/project5.jpg"
          sourceCode="https://github.com/Areesha-sites/Hackathon-Milstones.git"
          livePreview="https://milstone5-one.vercel.app/"
        />
      </div>
    </>
  );
};

export default Projects;

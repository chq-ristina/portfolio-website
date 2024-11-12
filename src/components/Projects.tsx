import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { IProjectDescription, ProjectDescription } from "./ProjectDescription";

import mario from "../assets/SuperMarioOdysseyTitleScreen.jpg";

export function Projects() {
  const [collapse, setCollapsed] = useState(true);

  /*TODO: 
    - Add images and descriptions for the E-scribe project 
    - Add another project, maybe choose the Chat app and the Nobles and Barnes app
  */

  const eScribe: IProjectDescription = {
    projectName: "E-scribe",
    projectDescription: "A collaborative notes app designed to allow users to create and share their notes with others. React and JavaScript were used to create the front end, Java and Spring Boot for the REST API, and deployed using AWS",
    url: "http://e-scribe.s3-website.us-east-2.amazonaws.com/",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "AWS",
    ],
    images: [
      {
        src: mario,
        description: "Test Description",
      },
      {
        src: mario,
        description: "Test Description",
      },
      {
        src: mario,
        description: "Test Description",
      },
      {
        src: mario,
        description: "Test Description",
      }
    ],
  };

  return (
    <div className="component my-6">
      <h3
        data-bs-toggle="collapse"
        role="button"
        data-bs-target="#2023Collapse"
        aria-expanded="false"
        aria-controls="2023Collapse"
        onClick={() => setCollapsed(!collapse)}
        className="m-3"
      >
        2023 {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </h3>
      <div className="collapse show" id="2023Collapse">
        <ProjectDescription
          projectName={eScribe.projectName}
          projectDescription={eScribe.projectDescription}
          url={eScribe.url}
          technologies={eScribe.technologies}
          images={eScribe.images}
        />
      </div>
    </div>
  );
}

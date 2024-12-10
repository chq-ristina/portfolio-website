import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ProjectDescription } from "./ProjectDescription";

import { eScribeDesc } from "../data/ProjectDescriptions";

export function Projects() {
  const [itemCollapse, setItemCollapsed] = useState(true);
  const [collapse, setCollapsed] = useState(true);

  return (
    <div className="component-bottom my-6">
      <h3
        data-bs-toggle="collapse"
        role="button"
        data-bs-target="#ProjectCollapse"
        aria-expanded="false"
        aria-controls="ProjectCollapse"
        onClick={() => setCollapsed(!collapse)}
        className="m-3"
      >
        Projects {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </h3>
      <div className="collapse show" id="ProjectCollapse">
        <h4
          data-bs-toggle="collapse"
          role="button"
          data-bs-target="#2023Collapse"
          aria-expanded="false"
          aria-controls="2023Collapse"
          onClick={() => setItemCollapsed(!itemCollapse)}
          className="m-3"
        >
          2023 {itemCollapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </h4>
        <div className="collapse show" id="2023Collapse">
          <ProjectDescription
            projectName={eScribeDesc.projectName}
            projectDescription={eScribeDesc.projectDescription}
            url={eScribeDesc.url}
            technologies={eScribeDesc.technologies}
            images={eScribeDesc.images}
          />
        </div>
      </div>
    </div>
  );
}

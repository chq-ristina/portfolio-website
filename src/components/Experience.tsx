import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ExperienceItem } from "./ExperienceItem";
import { ExperienceDescription } from "../data/ExperienceDescription";

export function Experience() {
  const [collapse, setCollapsed] = useState(true);

  return (
    <div className="component-bottom my-6">
      <h3
        data-bs-toggle="collapse"
        role="button"
        data-bs-target="#collapseExperience"
        aria-expanded="false"
        aria-controls="collapseExperience"
        onClick={() => setCollapsed(!collapse)}
        className="m-3"
      >
        Experience {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </h3>
      <div className="collapse show" id="collapseExperience">
        <ExperienceItem
          timePeriod={"Sept 2023 - Present"}
          jobTitle={"Software Engineer"}
          company={"The Metropolitan Transportation Authority"}
          technologies={[
            "C#",
            "React",
            "TypeScript",
            "React Native",
            "JavaScript",
            "Expo",
            "SQL",
            "PostgreSQL",
            "Oracle",
          ]}
          experienceDescription={ExperienceDescription.MTA}
          className={"border-bottom border-dark"}
        />

        <ExperienceItem
          timePeriod={"May - Aug 2022"}
          jobTitle={"Software Engineer Intern"}
          company={"The Trade Desk"}
          technologies={["C#", "SQL", "Oracle"]}
          experienceDescription={ExperienceDescription.TTD}
        />
      </div>
    </div>
  );
}

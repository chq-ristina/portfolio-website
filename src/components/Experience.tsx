import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  const [collapse, setCollapsed] = useState(true);

  return (
    <div className="component my-6">
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
          technologies={["C#, React, TypeScript, React Native, JavaScript, Expo, SQL, PostgreSQL, Oracle"]}
          experienceDescription={"Build, style and maintain mobile and web applications to modernize the certification test process for train engineers, thus expiditing the certification process, reducing administrative overhead, and improving accessibility for managers in the field. Additionally, maintain and style legacy applications, adhering to the needs of application users. "}
          className={"border-bottom"}
        />

        <ExperienceItem
          timePeriod={"May - Aug 2022"}
          jobTitle={"Software Engineer Intern"}
          company={"The Trade Desk"}
          technologies={["C#, SQL, Oracle"]}
          experienceDescription={
            "Optimized the identification of misconfigured advertisement deals by expanding the qualifications for when a deal is defined as misconfigured and optimizing the SQL queries responsible for identifying deals that have become misconfigured. These enhancements allowed for advertisement deals to be identified quicker, thus allowing clients to be notified and given the chance to ammend misconfigured advertisement deals much sooner."
          }
        />
      </div>
    </div>
  );
}

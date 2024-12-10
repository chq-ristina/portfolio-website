import { GoDotFill } from "react-icons/go";
import { TechnologyList } from "./TechnologyList";

export interface IExperienceItem {
  timePeriod: string;
  jobTitle: string;
  company: string;
  technologies: string[]
  experienceDescription: string;
  className?: string;
}

export function ExperienceItem(props: IExperienceItem) {
  return (
    <div className={`ms-5 exp ${props.className ? props.className : ""}`}>
        <p className="fw-bold exp-title">{props.timePeriod} <GoDotFill/> {props.jobTitle} <GoDotFill/> {props.company}</p>
        <TechnologyList technologies={props.technologies}/>
      <div className="ms-5 exp-desc">
        <p>{props.experienceDescription}</p>
      </div>
    </div>
  );
}

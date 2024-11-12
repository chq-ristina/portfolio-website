import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export interface ImgCard {
  src: string;
  description: string;
}

export interface IProjectDescription {
  projectName: string;
  projectDescription: string;
  url: string | null;
  technologies: string[];
  images: ImgCard[];
}

/*TODO: Work on Styling for the url, project description, technologies, and images */

export function ProjectDescription(props: IProjectDescription) {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="m-3">
      <h4
        data-bs-toggle="collapse"
        role="button"
        data-bs-target={`#projectDescription-${props.projectName}`}
        aria-expanded="false"
        aria-controls={`projectDescription-${props.projectName}`}
        onClick={() => setCollapse(!collapse)}
        className="ms-3"
      >
        {props.projectName}{" "}
        {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </h4>
      <div
        className="ms-5 collapse"
        id={`projectDescription-${props.projectName}`}
      >
        <div className="d-flex flex-column">
          {props.url && (
            <a href={props.url}>
              <span className="fs-4">{props.url}</span>
            </a>
          )}
          <span>{props.projectDescription}</span>
          <div>
            {props.technologies.map((technology, idx) => (
              <span className="fst-italic">
                {technology}
                {idx !== props.technologies.length - 1 && ", "}{" "}
              </span>
            ))}
          </div>
        </div>

        <div>
          {props.images.map(({ src, description }) => (
            <div className="card w-25 my-3">
              <img src={src} className="card-img-top" />
              <div className="card-body">
                {/* <h5 className="card-title">Card title</h5> */}
                <p className="card-text">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

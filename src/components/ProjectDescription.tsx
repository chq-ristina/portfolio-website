import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import test from "../assets/SuperMarioOdysseyTitleScreen.jpg";

export interface ImgCard {
  src: string;
  description: string;
}

export interface IProjectDescription {
  projectName: string;
  projectDescription: string;
  url?: string;
  technologies: string[];
  images: ImgCard[];
}

/*TODO: Work on Styling for the url, project description, technologies, and images */

export function ProjectDescription(props: IProjectDescription) {
  const [collapse, setCollapse] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
          <span className="proj-desc-desc">{props.projectDescription}</span>
          <div>
            {props.technologies.map((technology, idx) => (
              <span className="fst-italic proj-desc-tech">
                {technology}
                {idx !== props.technologies.length - 1 && ", "}{" "}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center my-4">
          <div
            id="imgCarousel"
            className="carousel carousel-dark slide w-75"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              {props.images.map((val, index) => (
                <button
                  type="button"
                  data-bs-target="#imgCarousel"
                  data-bs-slide-to={index}
                  className={activeSlide(index)}
                  aria-current={index === 0}
                  aria-label={`Slide ${index}`}
                />
              ))}
            </div>
            <div className="carousel-inner">
              {props.images.map(({ src, description }, index) => (
                <div className={`carousel-item ${activeSlide(index)} `}>
                  <img src={src} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#imgCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#imgCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  function activeSlide(index: number): string {
    return index === activeIndex ? "active" : "";
  }
}

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { TechnologyList } from "./TechnologyList";

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

export function ProjectDescription(props: IProjectDescription) {
  const [collapse, setCollapse] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="m-3">
      <h5
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
      </h5>
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
          <p>{props.projectDescription}</p>
          <div className="mt-2">
            <TechnologyList technologies={props.technologies}/>
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

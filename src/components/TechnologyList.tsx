import { Technology } from "./Technology";

export interface ITechnologyList {
  technologies: string[];
}

export function TechnologyList(props: ITechnologyList) {
  return (
    <div className="d-flex ">
    
      {props.technologies.map((technology, index) => (
        <Technology name={technology} />
      ))}
    </div>
  );
}

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export function Skills() {
  const [collapse, setCollapsed] = useState(true);

  return (
    <div className="component-both my-6">
      <h3
        data-bs-toggle="collapse"
        role="button"
        data-bs-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample"
        onClick={() => setCollapsed(!collapse)}
        className="m-3"
      >
        Skills {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </h3>
      <div className="collapse show" id="collapseExample">
        <ul className="container text-start" style={{ listStyle: "none" }}>
          <div className="row">
            <div className="col">
              <li>C#</li>
              <li>.NET Core</li>
            </div>
            <div className="col">
              <li>SQL</li>
              <li>PostgreSQL</li>
              <li>Oracle</li>
            </div>
            <div className="col">
              <li>React</li>
              <li>JavaScript</li>
              <li>Typescript</li>
            </div>
            <div className="col">
              <li>React Native</li>
              <li>Expo</li>
              <li>Redux</li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

import { useState } from "react";
import headshot from "../assets/headshot.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export function Home() {
  const [collapse, setCollapsed] = useState(true);
  return (
    <div className="m-6">
      <div className="d-flex justify-content-center align-items-center">
        <img src={headshot} className="headshot" alt="Headshot" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mb-4">
        <h2>Christina Phillips</h2>
        <span className="text-center text-wrap mx-6">
          I'm a fullstack developer based out of NYC with 1 YOE. I have
          experience using C# and .NET Core for backend development and React,
          JavaScript, and TypeScript for the frontend. Additionally, I am
          familiar with SQL and have used PostgreSQL and Oracle for database
          development.
        </span>
      </div>
      <div className="component my-6">
        <h3
          data-bs-toggle="collapse"
          role="button"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          onClick={() => setCollapsed(!collapse)}
        >
          Skills {collapse ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
        </h3>
        <div className="collapse show" id="collapseExample">
          <ul className="container text-center" style={{ listStyle: "none" }}>
            <div className="row">
              <div className="col">
                <li>C#</li>
                <li>.NET Core</li>
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
    </div>
  );
}

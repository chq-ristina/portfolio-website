import headshot from "../assets/headshot.jpg";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export function Home() {
  return (
    <div className="m-6">
      <div className="d-flex justify-content-center align-items-center">
        <img src={headshot} className="headshot" alt="Headshot" />
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mb-4">
        <h2>Christina Phillips</h2>
        <div>
          <h3>
            <a
              href="https://www.linkedin.com/in/christina-p-455763141/"
              className="me-4"
            >
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/chq-ristina">
              <AiOutlineGithub />
            </a>
          </h3>
        </div>
        <span className="text-center text-wrap mx-6 w-75">
          I'm a fullstack developer based out of NYC with 1 YOE. I have
          experience using C# and .NET Core for backend development and React,
          JavaScript, and TypeScript for the frontend. Additionally, I am
          familiar with SQL and have used PostgreSQL and Oracle for database
          development.
        </span>
      </div>
      <Skills />
      <Projects/>
    </div>
  );
}

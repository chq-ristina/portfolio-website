import headshot from "../assets/headshot.jpg";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";
import { Skills } from "../components/Skills";

import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export function Home() {
  const startDate: Date = new Date('2023-09-14');
  const currentDate : Date = new Date();

  const diffInMs: number = Math.abs(startDate.getTime() - currentDate.getTime());
  const millisecondsInDay: number = 1000 * 60 * 60 * 24;
  const diffInDays: number = Math.floor(diffInMs / millisecondsInDay);

  const yoe: number = Math.floor(diffInDays / 365);


  return (
    <div className="m-6">
      {/* <div className="d-flex justify-content-center align-items-center">
        <img src={headshot} className="headshot" alt="Headshot" />
      </div> */}
      <div className="d-flex flex-column justify-content-center align-items-center mb-4">
        <h1>Christina Phillips</h1>
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
          I'm a fullstack developer based out of NYC with about {yoe} YOE. I have
          experience using C# and .NET Core for backend development and React,
          JavaScript, and TypeScript for the frontend. I also have experience
          developing mobile applications using Expo and React Native.
          Additionally, I am familiar with SQL and used PostgreSQL and
          Oracle for database development.
        </span>
      </div>
      <Skills />
      <Experience/>
      <Projects />
    </div>
  );
}

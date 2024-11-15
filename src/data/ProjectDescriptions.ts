import { IProjectDescription } from "../components/ProjectDescription";

import escribe1 from "../assets/escribe/EscribeLandingPage.png";
import escribe2 from "../assets/escribe/UserNotesPage.png";
import escribe3 from "../assets/escribe/ShareRequest.png";
import escribe4 from "../assets/escribe/ShareRequestNotif.png";
import escribe5 from "../assets/escribe/PendingShareRequestPage.png";
import escribe6 from "../assets/escribe/TestUserSharedWithMe.png"
import escribe7 from "../assets/escribe/ModifiedByTestUser.png";

export const eScribeDesc: IProjectDescription = {
    projectName: "E-scribe",
    projectDescription: "A collaborative notes app designed to allow users to create and share their notes with others. React and JavaScript were used to create the front end, Java and Spring Boot for the REST API, and deployed using AWS",
    url: "http://e-scribe.s3-website.us-east-2.amazonaws.com/",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "AWS",
    ],
    images: [
      {
        src: escribe1,
        description: "Landing Page",
      },
      {
        src: escribe2,
        description: "Once logged in, a user can see all of their saved notes.",
      },
      {
        src: escribe3,
        description: "Requesting to share with a fellow user",
      },
      {
        src: escribe4,
        description: "The user is alerted that there is a pending share request",
      },
      {
        src: escribe5,
        description: "Pending share request page where users can accept or reject a share request",
      },
      {
        src: escribe6,
        description: "Shared with me tab reflects all accepted user notes",
      },
      {
        src: escribe7,
        description: "Modifications to the shared note is represented",
      }
    ],
}
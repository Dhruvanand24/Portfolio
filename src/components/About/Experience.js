import React from "react";
import ExperienceCard from "./ExperienceCard";
import Techstack from "./Techstack";
import { Link } from "react-router-dom";

const Experience = () => {
  let allExperinces = [
    {
      Company: "NerveSparks",
      Role: "Full-stack Developer",
      Duration: "March 2024-Present",
      Location: "Guruguram, Haryana",
      Techstack: [
        "Sveltekit",
        "ExpressJs",
        "Litegraphjs",
        "Nodejs",
        "Mongodb",
        "Kotlin",
        "Tailwind",
        "Git",
        "FlowBite",
        "DaisyUi",
        "RAG",
        "Android Development",
        "Docker",
        "ShadCn",
      ],
      Description: [
        {
          Main: "Developed the Android application using Kotlin and Compose, ensuring a modern and user-friendly experience.",
          Mylink: "https://github.com/nerve-sparks/iris_android",
        },
        {
          Main: "Integrated Llama.cpp within the app to enable efficient on-device execution of large language models, a core feature for offline functionality.",
          Mylink: "",
        },
        {
          Main: "Developed front-end components and functionalities using Svelte Kit, with MongoDB database integration for efficient data management.",
          Mylink: "https://nervesparks.com",
        },
        {
          Main: "Added all the pytorch nodes for torch.nn and implemented shape calculators and toast functionality along with proper connections and dissconnections check. This enables user to drag and drop and connect nodes and get the code in a single click.",
          Mylink: "",
        },
        {
          Main: "Added Model Management, user management, project management, error management using Mongodb, expressjs, nodejs and sveleteToast",
          Mylink: "",
        },
      ],
    },
    {
      Company: "Made2Automate",
      Role: "Full-stack Developer",
      Duration: "January 2024-March 2024",
      Location: "New Delhi, New Delhi",
      Techstack: [
        "ReactJs",
        "ExpressJs",
        "MaterialUi",
        "AntDesign",
        "Nodejs",
        "Mongodb",
        "Tailwind",
        "Git",
        "Firebase",
        "DaisyUi",
      ],
      Description: [
        {
          Main: "POS System for JUNG Switches Company : Developed the POS system using ReactJS and Firebase realtime database.",
          Mylink: "",
        },
        {
          Main: "Factory Management Software for Equinex(Bird Machines): Developed the management software using MERN stack with user manageent, authentication using JWT, and authorization features.",
          Mylink: "",
        },
      ],
    },
  ];

  return (
    <div>
      {allExperinces.map((each, key) => {
        return <ExperienceCard props={each} />;
      })}
    </div>
  );
};

export default Experience;

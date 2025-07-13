// App.jsx
import React from "react";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Experience from "./Components/Experience/Experience";
import ProjectExperience from "./Components/ProjectExperiences/ProjectExperience";
import Projects from "./Components/Project/Projects";
import Skills from "./Components/Skill/Skills";
import ContactForm from "./Components/ContactForm/ContactForm";

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <AboutMe />
      <Experience />
      <ProjectExperience />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}
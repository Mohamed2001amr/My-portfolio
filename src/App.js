import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import AboutMe from "./Components/AboutMePage/AboutMe";
import Experience from "./Components/ExperiencePage/Experience";
import Projects from "./Components/Project/Projects";
import Skills from "./Components/Skill/Skills";
import ContactForm from "./Components/ContactForm/ContactForm";

export default function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <Home />
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
}
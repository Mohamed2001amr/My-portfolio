import Avatar from "../../Images/svgs/Avatar";
import List from "../../UI/List";
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export default function Header() {
  return (
    <div className="bg-gray-900 text-white font-sans sticky top-0 z-50">
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/70 rounded-full flex items-center justify-center">
            <Avatar />  
          </div>
          <div className="text-xl font-bold">Mohamed Amr</div>
        </div>

        <ul className="flex space-x-6 text-sm">
          <List name="Home" targetId="home"> <FaHome className="text-base" /> </List>
          <List name="About Me" targetId="about"> <FaUser className="text-base" /> </List>
          <List name="Experience" targetId="experience"> <FaBriefcase className="text-base" /> </List>
          <List name="Project Experience" targetId="projects"> <FaProjectDiagram className="text-base" /> </List>
          <List name="Skills" targetId="skills"> <FaTools className="text-base" /> </List>
          <List name="Contact me" targetId="contact"> <FaEnvelope className="text-base" /> </List>
          <List name="Settings"> <IoSettingsSharp className="text-base"/> </List>
        </ul>
      </nav>
    </div>
  );
}

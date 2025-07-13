import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow">
        <div className="text-xl font-bold">Name</div>
        <ul className="flex space-x-6 text-sm">
          <li>Home</li>
          <li>About Me</li>
          <li>Experience</li>
          <li>Project Experience</li>
          <li>Skills</li>
          <li>Contact me</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex justify-between px-10 py-10">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">HELLO I’M NAME</h1>
          <p className="text-xl">SOFTWARE ENGINEER</p>
          <p className="text-sm">Front end developer</p>
          <div className="flex space-x-3">
            <button className="bg-blue-600 px-4 py-1 rounded">Download CV</button>
            <button className="border border-white px-4 py-1 rounded">Contact Me</button>
          </div>
        </div>
        <div className="w-1/3 h-60 bg-gray-700 rounded">My Image</div>
      </section>

      {/* Experience Section */}
      <section className="flex justify-between px-10 py-10">
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-lg font-bold">EXPERIENCE NAME</h2>
          <p className="text-sm">Company Name</p>
          <p className="text-xs">Duration</p>
        </div>
        <div className="w-1/3 h-60 bg-gray-700 rounded">My Image</div>
      </section>

      {/* Project Experience */}
      <section className="px-10 py-10">
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Software Engineering</h3>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-semibold">Business Analyst</h3>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-10 py-10 grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h4 className="font-bold">Project Name</h4>
            <p className="text-sm">Software Engineering</p>
            <button className="mt-2 bg-blue-600 px-3 py-1 rounded text-sm">Details</button>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="px-10 py-10 grid grid-cols-2 gap-8">
        {['Personal Skills', 'Technical Skills', 'Business Skills', 'Other Skills'].map((title, i) => (
          <div key={i} className="bg-gray-800 p-4 rounded">
            <h4 className="font-bold mb-2">{title}</h4>
            <ul className="space-y-1 text-sm">
              <li>Skill 1</li>
              <li>Skill 2</li>
              <li>Skill 3</li>
            </ul>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section className="px-10 py-10">
        <h3 className="text-xl font-bold mb-4">Contact Me</h3>
        <form className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="p-2 rounded bg-gray-700 text-white" />
          <input type="text" placeholder="Phone" className="p-2 rounded bg-gray-700 text-white" />
          <input type="text" placeholder="Subject" className="p-2 rounded bg-gray-700 text-white" />
          <textarea placeholder="Message" className="col-span-2 p-2 rounded bg-gray-700 text-white"></textarea>
          <button className="col-span-2 bg-blue-600 px-4 py-2 rounded">Send</button>
        </form>
        <div className="flex space-x-4 mt-6 text-xl">
          <FaGithub />
          <FaLinkedin />
          <FaTwitter />
          <FaEnvelope />
        </div>
      </section>
    </div>
  );
}

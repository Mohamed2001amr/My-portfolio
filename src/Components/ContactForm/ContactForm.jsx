import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section id="contact" className="px-10 py-10">
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
  );
}

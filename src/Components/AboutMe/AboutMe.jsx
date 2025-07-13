    import React from "react";

export default function AboutMe() {
  return (
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
  );
}

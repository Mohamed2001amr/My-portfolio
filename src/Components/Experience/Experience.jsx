import React from "react";

export default function Experience() {
  return (
    <section className="flex justify-between px-10 py-10">
      <div className="bg-gray-800 p-6 rounded">
        <h2 className="text-lg font-bold">EXPERIENCE NAME</h2>
        <p className="text-sm">Company Name</p>
        <p className="text-xs">Duration</p>
      </div>
      <div className="w-1/3 h-60 bg-gray-700 rounded">My Image</div>
    </section>
  );
}

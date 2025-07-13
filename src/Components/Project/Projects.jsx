import React from "react";

export default function Projects() {
  return (
    <section className="px-10 py-10 grid grid-cols-2 gap-6">
      {[1, 2, 3, 4].map((_, i) => (
        <div key={i} className="bg-gray-800 p-4 rounded">
          <h4 className="font-bold">Project Name</h4>
          <p className="text-sm">Software Engineering</p>
          <button className="mt-2 bg-blue-600 px-3 py-1 rounded text-sm">Details</button>
        </div>
      ))}
    </section>
  );
}

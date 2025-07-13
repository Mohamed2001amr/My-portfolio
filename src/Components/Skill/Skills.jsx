import React from "react";

export default function Skills() {
  const skillGroups = ['Personal Skills', 'Technical Skills', 'Business Skills', 'Other Skills'];

  return (
    <section className="px-10 py-10 grid grid-cols-2 gap-8">
      {skillGroups.map((title, i) => (
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
  );
}

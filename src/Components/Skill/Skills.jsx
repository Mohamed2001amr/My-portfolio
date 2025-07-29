import React, { useEffect, useState } from "react";
import CustomSection from "../../UI/CustomSection";
import skillsBackground from "../../Images/Background/skill.jpg";
import { MdDelete, MdEdit  } from "react-icons/md";

export default function Skills() {
  const [showContent, setShowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingSkillId, setEditingSkillId] = useState(null);


  const [skillGroups, setSkillGroups] = useState([
    { title: "Personal Skills", skills: [] },
    {
      title: "Technical Skills",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 75 },
      ],
    },
    {
      title: "Business Analyst Skills",
      skills: [
        { name: "Project Planning", level: 80 },
        { name: "Budgeting", level: 65 },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Creativity", level: 95 },
        { name: "Adaptability", level: 88 },
      ],
    },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSaveSkill = () => {
    if (!newSkillName || newSkillLevel < 1 || !currentCategory) return;

    const payload = {
      name: newSkillName,
      percentage: newSkillLevel,
      category: currentCategory.toLowerCase(),
    };

    if (isEditMode && editingSkillId) {
      // تعديل المهارة
      fetch(`/api/skills/${editingSkillId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((updatedSkill) => {
          const updatedGroups = skillGroups.map((group) => {
            if (group.title === currentCategory) {
              const updatedSkills = group.skills.map((skill) =>
                skill.id === editingSkillId
                  ? { ...skill, name: updatedSkill.name, level: updatedSkill.percentage }
                  : skill
              );
              return { ...group, skills: updatedSkills };
            }
            return group;
          });

          setSkillGroups(updatedGroups);
          resetModalState();
        })
        .catch((err) => console.error("Error updating skill:", err));
    } else {
      // إضافة جديدة
      fetch("http://localhost:8000/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          if (!res.ok) throw new Error("Failed to save skill");
          return res.json();
        })
        .then((savedSkill) => {
          const updatedGroups = skillGroups.map((group) => {
            if (group.title === currentCategory) {
              return {
                ...group,
                skills: [
                  ...group.skills,
                  {
                    id: savedSkill.id,
                    name: savedSkill.name,
                    level: savedSkill.percentage,
                  },
                ],
              };
            }
            return group;
          });

          setSkillGroups(updatedGroups);
          resetModalState();
        })
        .catch((err) => {
          console.error("Error saving skill:", err);
        });
    }
  };

  const resetModalState = () => {
    setIsModalOpen(false);
    setNewSkillName("");
    setNewSkillLevel(0);
    setCurrentCategory("");
    setIsEditMode(false);
    setEditingSkillId(null);
  };

  const handleDeleteSkill = (groupTitle, skillIndex, skillId) => {
    fetch(`/api/skills/${skillId}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("فشل في حذف المهارة من قاعدة البيانات");
        }

        // بعد نجاح الحذف، نحدث الـ state المحلي
        const updatedGroups = skillGroups.map((group) => {
          if (group.title === groupTitle) {
            const updatedSkills = [...group.skills];
            updatedSkills.splice(skillIndex, 1);
            return { ...group, skills: updatedSkills };
          }
          return group;
        });

        setSkillGroups(updatedGroups);
      })
      .catch((error) => {
        console.error("حدث خطأ أثناء حذف المهارة:", error);
      });
  };

  const handleEditSkill = async (groupTitle, skillIndex, updatedSkill) => {
    try {
      const response = await fetch(`http://localhost:8000/api/skills/${updatedSkill.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedSkill),
      });

      if (!response.ok) {
        throw new Error('Failed to update skill');
      }

      const updatedGroups = skillGroups.map((group) => {
        if (group.title === groupTitle) {
          const updatedSkills = [...group.skills];
          updatedSkills[skillIndex] = updatedSkill;
          return { ...group, skills: updatedSkills };
        }
        return group;
      });

      setSkillGroups(updatedGroups);
    } catch (error) {
      console.error('Error updating skill:', error);
    }
  };

  return (
    <CustomSection
      id="skills"
      backgroundImage={skillsBackground}
      title="Skills"
      showTitle={showContent}
    >
      <div className="w-full md:grid-cols-2 grid mt-16 gap-6 z-10">
        {skillGroups.map(({ title, skills }, index) => (
          <div
            key={index}
            className="bg-gray-200 text-black rounded-xl p-2 shadow-lg flex flex-col justify-between"
          >
            <h2 className="text-lg font-bold mb-4">{title}</h2>
            <div className="space-y-4">
              {skills.length === 0 ? (
                <div className="flex items-center justify-center h-32">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => {
                      setCurrentCategory(title);
                      setIsModalOpen(true);
                    }}
                  >
                    Add now a new skill
                  </button>
                </div>
              ) : (
                <>
                  {skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 w-full rounded-full overflow-hidden bg-gray-300 px-2 py-1"
                    >
                      <div className="flex-1">
                        <div className="relative h-6">
                          <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                            style={{ width: `${skill.level}%`, borderRadius: "9999px" }}
                          >
                            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white font-bold">
                              {skill.name} ({skill.level}%)
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        className="text-sm text-blue-600 hover:underline"
                        onClick={() => {
                          setIsEditMode(true);
                          setEditingSkillId(skill.id);
                          setNewSkillName(skill.name);
                          setNewSkillLevel(skill.level);
                          setCurrentCategory(title);
                          setIsModalOpen(true);
                        }}
                      >
                        <MdEdit  className="text-xl text-blue-500 hover:text-blue-700 cursor-pointer"
                          onClick={() =>
                            handleEditSkill(title, i, {
                              ...skill,
                              name: prompt("Edit skill name:", skill.name) || skill.name,
                              percentage: parseInt(prompt("Edit percentage (1-100):", skill.level) || skill.level),
                              id: skill.id,
                            })
                          }
                        />
                      </button>
                      <button onClick={() => handleDeleteSkill(title, i, skill.id)}>
                        <MdDelete className="text-xl text-red-500 hover:text-red-700"/>
                      </button> 
                    </div>
                  ))}
                  <button
                    className="bg-blue-500 text-white mt-4 mx-auto px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => {
                      setCurrentCategory(title);
                      setIsModalOpen(true);
                    }}
                  >
                    Add Skill
                  </button>
                </>
              )}
            </div>
            {skills.length >= 2 && (
              <button className="text-sm text-right mt-4 underline">More</button>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-center">Add New Skill</h2>

            <input
              type="text"
              value={newSkillName}
              onChange={(e) => setNewSkillName(e.target.value)}
              placeholder="Skill Name"
              className="w-full mb-3 p-2 border rounded text-black"
            />

            <label className="block mb-1 font-medium">Skill Level</label>
            <input
              type="number"
              value={newSkillLevel}
              onChange={(e) => setNewSkillLevel(Number(e.target.value))}
              placeholder="Enter percentage (1-100)"
              min={1}
              max={100}
              className="w-full mb-3 p-2 border rounded text-black"
            />

            <div className="w-full rounded-full h-4 mb-4">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${newSkillLevel}%` }}
              ></div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveSkill}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </CustomSection>
  );
}

import { useEffect, useState, useRef } from "react";

export default function SettingsMenu({ onClose }) {
    const ref = useRef();

  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    // استرجاع اللغة المحفوظة عند التحميل
    const lang = localStorage.getItem("lang") || "en";
    setSelectedLang(lang);
  }, []);

  const handleChangeLang = (lang) => {
    setSelectedLang(lang);
    localStorage.setItem("lang", lang);
    // هنا ممكن تضيف كود لتغيير لغة الموقع فعليًا باستخدام i18n مثلًا
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose(); // استدعاء دالة الإغلاق المرسلة من الأب
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="bg-white text-black p-4 rounded shadow-md absolute top-full right-0 w-48 z-50">
      <div className="font-semibold mb-2">Language</div>
      <button
        className={`block w-full text-left px-2 py-1 rounded ${
          selectedLang === "en" ? "bg-gray-200" : ""
        }`}
        onClick={() => handleChangeLang("en")}
      >
        English
      </button>
      <button
        className={`block w-full text-left px-2 py-1 rounded ${
          selectedLang === "ar" ? "bg-gray-200" : ""
        }`}
        onClick={() => handleChangeLang("ar")}
      >
        العربية
      </button>
    </div>
  );
}

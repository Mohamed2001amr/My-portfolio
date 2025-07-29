export default function List({ name, children, targetId }) {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li
      onClick={handleClick}
      className="relative flex flex-col items-center group cursor-pointer"
    >
        <div className="text-white group-hover:text-cyan-400 transition duration-300">
            {children}
        </div>
        <span className="absolute top-6 opacity-0 group-hover:opacity-100 group-hover:top-8 text-xs text-white group-hover:text-cyan-400 
                       transition-all duration-300 whitespace-nowrap px-2 py-1 bg-gray-700 rounded shadow-lg z-10"
        >
        {name}
      </span>
    </li>
  );
}

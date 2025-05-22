// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const TechStack = () => {
//   const { theme } = useContext(ThemeContext);

//   const categories = [
//     {
//       title: "Languages",
//       items: ["Java", "C++", "JavaScript", "HTML", "CSS", "Python(Basics)", "OOPs"],
//     },
//     {
//       title: "Frontend",
//       items: ["React", "Vite", "Tailwind CSS"],
//     },
//     {
//       title: "Backend",
//       items: ["Node.js", "Express", "MongoDB", "Atlas"],
//     },
//     {
//       title: "Tools & Others",
//       items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "MongoDB"],
//     },
//   ];

//   return (
//     <section id="skills"
//       className="w-full py-12 px-6 md:px-12 lg:px-20 transition-colors duration-500"
//     >
//       <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
//         Skills & Tech Stack
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {categories.map((category, idx) => (
//           <div
//             key={idx}
//             className={`rounded-2xl p-6 transition-all duration-300 transform hover:scale-105 
//               ${theme === "light" ? "bg-gray-200 text-gray-800 purple-shadow " : "bg-gray-800 text-white shadow-[3px_3px_8px_rgba(190,144,255,0.4)] "}`}

//           >
//             <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-400 dark:border-gray-600">
//               {category.title}
//             </h3>
//             <ul className="space-y-2">
//               {category.items.map((item, index) => (
//                 <li
//                   key={index}
//                   className="text-sm font-medium px-3 py-1 rounded hover:bg-purple-600 transition-colors duration-200"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechStack;


import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const TechStack = () => {
  const { theme } = useContext(ThemeContext);

  const categories = [
    {
      title: "Languages",
      items: ["Java(Basics)", "C++", "JavaScript", "HTML", "Python (Basics)", "OOPs"],
    },
    {
      title: "Frontend",
      items: ["React", "Vite", "Tailwind CSS", "CSS"],
    },
    {
      title: "Backend",
      items: ["Node.js", "Express", "MongoDB", "Atlas"],
    },
    {
      title: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "Postman", "MongoDB"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-16 px-4 md:px-12 lg:px-20 scroll-mt-20 transition-colors duration-500"
    >
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white animate-fade-in-down">
        Skills & Tech Stack
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className={`rounded-xl p-4 sm:p-6 py-6 min-h-[240px] transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in-up
              ${
                theme === "light"
                  ? "bg-gray-200 text-gray-800 purple-shadow"
                  : "bg-gray-800 text-white shadow-[3px_3px_8px_rgba(190,144,255,0.4)]"
              }`}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b pb-2 border-gray-400 dark:border-gray-600">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item, index) => (
                <li
                  key={index}
                  className={`
                    text-xs sm:text-sm font-medium px-3 py-1 rounded-full border 
                    transition duration-300 ease-in-out transform hover:scale-105
                    ${
                      theme === "light"
                        ? "bg-white text-purple-800 border-purple-200 hover:bg-gradient-to-r from-purple-100 to-purple-300"
                        : "bg-gray-700 text-gray-100 border-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-800"
                    }
                  `}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;


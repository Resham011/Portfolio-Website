import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaPython, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';


const projects = [
  {
    title: "Parallax Effect",
    image: project1,
    description: "A visually immersive webpage with smooth parallax scrolling to enhance user engagement.",
    tech: ["HTML", "CSS"],
    liveLink: "https://resham011.github.io/PARALLAX_EFFECT/",
    githubLink: "https://github.com/Resham011/PARALLAX_EFFECT",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description: "A personal portfolio showcasing skills, projects, and contact information with a clean, responsive design.",
    tech: ["Vite", "Express", "React", "HTML", "Tailwind Css"],
    liveLink: "https://portfolio-frontend-bse0.onrender.com/",
    githubLink: "https://github.com/Resham011/Portfolio-Website",
  },
  {
    title: "Tic-Tac-Toe Game",
    image: project3,
    description: "An interactive Tic Tac Toe game with a modern UI and smooth user interactions.",
    tech: ["CSS", "HTML", "JavaScript"],
    liveLink: "https://resham011.github.io/TIC-TAC-TOE-GAME/",
    githubLink: "https://github.com/Resham011/TIC-TAC-TOE-GAME",
  },
  {
    title: "Magical Chair",
    image: project4,
    description: "A product showcase where the chair color dynamically changes based on user-selected color options.",
    tech: ["CSS", "HTML"],
    liveLink: "https://resham011.github.io/Modern-Chair/",
    githubLink: "https://github.com/Resham011/Modern-Chair",
  },
];


export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">My Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-200 transition-all duration-300 transform hover:scale-105 purple-shadow dark:bg-gray-800 rounded-lg overflow-hidden  dark:shadow-[3px_3px_8px_rgba(190,144,255,0.4)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 ">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">{project.description}</p>

                {/* Tech stack */}
               <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techName, i) => (
                    <span
                         key={i}
                         className="px-3 py-1 rounded-full text-sm font-medium bg-gray-300 border-b border-purple-600 dark:border-white dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200"
                    >
                         {techName}
                    </span>
                    ))}
               </div>


                {/* Action Buttons */}
                <div className="flex justify-between text-sm">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded transition "
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

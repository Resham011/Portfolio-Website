import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaCode,  FaEnvelope } from "react-icons/fa";

export default function Hero() {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/resham-3b438a281/",
    github: "https://github.com/Resham011",
    code: "https://codolio.com/profile/Resham298",
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-purple-100 dark:from-gray-900 dark:to-purple-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
          Hi, I'm <span className="text-purple-600">Resham</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-gray-300">
          Web Developer with strong problem-solving skills and a passion for building responsive, efficient, and scalable web applications.        </p>

        {/* Buttons container */}
        <div className="flex flex-col items-center space-y-4">
          {/* Contact and Resume buttons side by side */}
          <div className="flex space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1XVMWtuTGgiTCVqXYMu5BS4QqEQkHJyQE/view?usp=sharing" // Replace with your actual resume file path or external link
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-medium transition"
            >
              Resume
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 mt-2 justify-center text-purple-600 dark:text-purple-400 text-2xl">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-purple-800 dark:hover:text-purple-200 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-purple-800 dark:hover:text-purple-200 transition"
            >
              <FaGithub />
            </a>
            <a
              href={socialLinks.code}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Code"
              className="hover:text-purple-800 dark:hover:text-purple-200 transition"
            >
              <FaCode />
            </a>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}

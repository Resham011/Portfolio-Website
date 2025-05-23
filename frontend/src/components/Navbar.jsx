import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

     useEffect(() => {
          const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
          if (mobileMenuOpen) {
               setMobileMenuOpen(false);
          }
          };
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
          }, [mobileMenuOpen]
     );

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get dynamic background classes
  const getBackgroundClasses = () => {
    if (!isScrolled) {
      return theme === "light" ? "bg-transparent" : "bg-transparent";
    } else {
      return theme === "light" ? "bg-white" : "bg-gray-900";
    }
  };

  return (
    <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{
          opacity: 1,
          y: 0,
          backgroundColor: isScrolled ? theme === "light" ? 
          "rgba(255, 255, 255, 0.95)"
          : "rgba(17, 24, 39, 0.95)"
          : theme === "light"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(17, 24, 39, 0.1)",

          }}
          transition={{ duration: 0.3 }}
          className={`fixed w-full z-50 py-3 backdrop-blur-sm shadow-sm ${
          isScrolled ? "border-b border-gray-200 dark:border-gray-700" : ""
          }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-m dark:text-white">
            Resham
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-3 ">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-m rounded-full transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-white"
                    : "text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-purple-600 dark:bg-purple-700 rounded-full z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="hidden md:flex items-center space-x-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-500 ${
                theme === "light" ? "hover:bg-gray-200" : "hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <FaMoon className="text-gray-800 transition-colors duration-500" />
              ) : (
                <FaSun className="text-gray-200 transition-colors duration-500" />
              )}
            </motion.button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`text-2xl transition-all duration-300 ${
                theme === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-4 space-y-3 transition-all duration-300 ${getBackgroundClasses()}`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-2 rounded transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-purple-700 text-white "
                  : theme === "light"
                  ? "hover:bg-gray-200 text-black"
                  : "hover:bg-gray-800 text-white"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Theme toggle for mobile */}
          <button
            onClick={toggleTheme}
            className={`w-full flex justify-center items-center px-4 py-2 rounded transition-colors duration-300 ${
              theme === "light" ? "bg-gray-200 hover:bg-gray-300 text-black" : "bg-gray-700 hover:bg-gray-600 text-white"
            }`}
          >
            {theme === "light" ? (
              <>
                <FaMoon className="mr-2 text-gray-900" />
                Switch to Dark Mode
              </>
            ) : (
              <>
                <FaSun className="mr-2 text-gray-200" />
                Switch to Light Mode
              </>
            )}
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;


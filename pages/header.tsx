import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import {
  Briefcase,
  ChevronRight,
  Code,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Sun,
  User,
  Workflow,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const navItems = [
    { id: "home", label: "Home", icon: <Code size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    {
      id: "education",
      label: "Education",
      icon: <GraduationCap size={18} />,
    },
    { id: "work", label: "Work", icon: <Workflow size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];
  // Cambiar tema claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeSection === item.id
                  ? "bg-white-100 dark:bg-white-800 text-purple-500 dark:text-orange-400"
                  : "hover:bg-white-100 dark:hover:bg-white-800/50"
              }`}
            >
              {" "}
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
            >
              <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {" "}
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                        {item.icon}
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={20} className="text-gray-400" />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;

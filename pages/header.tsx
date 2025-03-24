import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, Code, GraduationCap, Mail, Sun, Moon, User, Workflow } from "lucide-react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-20 right-20 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border transition-all duration-300 ease-in-out ${darkMode ? "border-blue-500" : "border-teal-500"} max-w-xl mx-auto mt-3 rounded-full md:block hidden`}
    >
      <div className="container mx-auto px-2 flex justify-between items-center h-16">
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-2 rounded-md transition-colors ${activeSection === item.id ? "bg-white-100 dark:bg-white-800 text-blue-500 dark:text-teal-400" : "hover:bg-white-100 dark:hover:bg-white-800/50"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="rounded-full">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </header>
  );
};

export default Header;

import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Code,
  Github,
} from "lucide-react";

const Footer = () => {
  // Footer
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Bhavin Pathak. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Code size={18} />
            </a>
            <a
              href="#"
              className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

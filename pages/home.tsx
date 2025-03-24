import { motion } from "framer-motion";
import { Code, Facebook, Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [text, setText] = useState("");
  const fullName = "Bhavin Pathak";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 200); // Adjust speed of typing here

      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hey there I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
                {text}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-h-2xl">
              Full-Stack Developer who blends technology with great user
              experience. From eye-catching UI to rock-solid backend, I make
              sure every app is not just functional but enjoyable to use!
            </p>
            <div className="mt-12 flex gap-5 justify-center">
              <a
                href="#"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-purple-600 transition-colors"
              >
                <Facebook size={30} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-purple-600 transition-colors"
              >
                <Instagram size={30} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-purple-600 transition-colors"
              >
                <Twitter size={30} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-purple-600 transition-colors"
              >
                <Linkedin size={30} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-purple-600 transition-colors"
              >
                <Code size={30} />
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-purple-600 transition-colors"
              >
                <Github size={30} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
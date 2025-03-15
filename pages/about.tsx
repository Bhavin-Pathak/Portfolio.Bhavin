import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/lib/constants";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Who I Am & What I Do</h2>
          <p className="text-gray-600 dark:text-gray-300">
            From Passion to Profession – My Developer Journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Behind the Code My Story 🤌
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I am Bhavin Pathak, a <b>Full-Stack Software Developer</b> with a
              passion for learning new technologies and building innovative
              digital solutions. My goal is to combine design, performance, and
              functionality to create seamless user experiences. Currently, I
              specialize in frontend development with React and Flutter, while
              also having strong experience in Node.js, Native iOS development,
              and databases.
            </p>
            <p>
              I enjoy solving complex problems, optimizing performance, and
              collaborating with multidisciplinary teams to turn ideas into
              reality.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <div className="text-3xl font-bold text-purple-500 dark:text-orange-400 mb-1">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Years of experience
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                <div className="text-3xl font-bold text-purple-500 dark:text-orange-400 mb-1">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Completed projects
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-1xl font-semibold mb-6">
              Crafting with These Skills 🧑‍💻
            </h3>
            <Tabs defaultValue={skills[0]?.category} className="w-full">
              <TabsList className="grid grid-cols-3 mb-6">
                {skills.map((skill) => (
                  <TabsTrigger key={skill.category} value={skill.category}>
                    {skill.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {skills.map((skill) => (
                <TabsContent
                  key={skill.category}
                  value={skill.category}
                  className="mt-0"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skill.items.map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

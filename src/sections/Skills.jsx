import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiDocker,
  SiLinux,
  SiGit,
  SiTrello,
  SiGithub,
  SiRedis,
  SiSwagger,
  SiJavascript,
  SiFigma,
  SiPostman,
  SiRedux
} from "react-icons/si";

const ALL_SKILLS = [
  { name: "React", icon: SiReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Go", icon: SiGo },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: SiDocker },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
  { name: "Trello", icon: SiTrello },
  { name: "GitHub", icon: SiGithub },
  { name: "Redis", icon: SiRedis },
  { name: "Swagger", icon: SiSwagger },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Redux", icon: SiRedux }
];

export default function Skills() {
  const ROW_COUNT = 3;

  return (
    <section id="skills" className="py-24 px-4 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            My Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">What I Work With</h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto mt-4" />
        </motion.div>

        <div className="flex flex-col gap-4">
          {Array.from({ length: ROW_COUNT }).map((_, rowIndex) => {
            const direction = rowIndex % 2 === 0 ? "left" : "right";
            const items = [...ALL_SKILLS, ...ALL_SKILLS];

            return (
              <motion.div
                key={rowIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: rowIndex * 0.2 }}
                className="overflow-hidden"
              >
                <div
                  className="flex gap-4 w-max"
                  style={{
                    animation: `${direction === "left" ? "scroll-left" : "scroll-right"} 40s linear infinite`,
                    animationDelay: `-${rowIndex * 7}s`
                  }}
                >
                  {items.map((skill, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 min-w-[150px]"
                    >
                      <skill.icon className="w-8 h-8 text-purple-500" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
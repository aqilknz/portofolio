import { motion } from "framer-motion";
import { PROJECTS } from "../data/projectsData";
import Button from "../components/ui/Button";
import { FiGithub, FiExternalLink, FiZap } from "react-icons/fi";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto mt-4" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl hover:border-purple-500 transition-all duration-300 flex flex-col"
            >
              {/* Card Header */}
              <div className={`relative overflow-hidden h-48 bg-gradient-to-br ${project.color}`}>
                {/* Decorative circles */}
                <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/10" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5" />

                {/* Emoji */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl drop-shadow-lg">{project.emoji}</span>
                </div>

                {/* Status Badge */}
                <div className={`absolute top-4 left-4 ${project.statusColor} text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg`}>
                  {project.status}
                </div>

                {/* Hover Overlay — GitHub & Demo buttons */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    {project.github && (
                      <Button
                        variant="primary"
                        size="sm"
                        as="a"
                        href={project.github}
                        target="_blank"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        variant="outline"
                        size="sm"
                        as="a"
                        href={project.demo}
                        target="_blank"
                        className="text-white hover:text-black"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 leading-relaxed text-sm flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-5">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 flex items-center gap-1">
                    <FiZap size={11} />
                    Highlights
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="text-xs font-medium text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2.5 py-1 rounded-full group-hover:border-purple-500/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
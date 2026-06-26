import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXPERIENCES } from "../data/experiencesData.js";
import { FaBriefcase, FaCode } from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Experience() {
  const [expandedProject, setExpandedProject] = useState(null); // "expId-projectIndex"

  const toggleProject = (key) => {
    setExpandedProject((prev) => (prev === key ? null : key));
  };

  return (
    <section id="experiences" className="py-24 px-4 md:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto md:mx-0" />
        </motion.div>

        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[49px] md:-left-[65px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-purple-500 group-hover:text-blue-500 group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                <FaBriefcase size={18} />
              </span>

              {/* Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-purple-500 transition-all duration-300 hover:shadow-xl">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-purple-500 mt-2 md:mt-0 bg-purple-500/10 px-3 py-1 rounded-full w-max">
                    {exp.duration}
                  </span>
                </div>

                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                  {exp.company}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Projects (hanya untuk Koda) */}
                {exp.projects.length > 0 && (
                  <div className="mb-6 space-y-3">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <FaCode size={14} />
                      Projects
                    </p>
                    {exp.projects.map((project, pIndex) => {
                      const key = `${exp.id}-${pIndex}`;
                      const isOpen = expandedProject === key;

                      return (
                        <div
                          key={pIndex}
                          className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                        >
                          {/* Project Toggle Button */}
                          <button
                            onClick={() => toggleProject(key)}
                            className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 hover:bg-purple-500/5 transition-colors duration-200 text-left"
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-purple-500 flex-shrink-0" />
                              <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                                {project.name}
                              </span>
                              <span className="text-xs text-gray-400 font-mono hidden md:block">
                                {project.date}
                              </span>
                            </div>
                            <span className="text-purple-500">
                              {isOpen ? (
                                <FiChevronUp size={16} />
                              ) : (
                                <FiChevronDown size={16} />
                              )}
                            </span>
                          </button>

                          {/* Expandable Points */}
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key="content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <ul className="px-5 py-4 bg-gray-50 dark:bg-gray-800/50 space-y-2 border-t border-gray-200 dark:border-gray-700">
                                  {project.points.map((point, i) => (
                                    <li
                                      key={i}
                                      className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                    >
                                      <span className="text-purple-400 mt-1 flex-shrink-0">
                                        ›
                                      </span>
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="text-sm font-mono text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-1.5 rounded-full group-hover:border-purple-500 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
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
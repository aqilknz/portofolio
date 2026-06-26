import { motion } from "framer-motion";
import { EDUCATION } from "../data/educationsData";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="educations" className="py-24 px-4 md:px-20 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            My Education
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Academic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Background
            </span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto md:mx-0" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="mb-12 ml-8 md:ml-12 relative group"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[49px] md:-left-[65px] top-1 flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-purple-500 group-hover:text-blue-500 group-hover:border-blue-500 transition-all duration-300 shadow-lg">
                <FaGraduationCap size={18} />
              </span>

              {/* Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 group-hover:border-purple-500 transition-all duration-300 hover:shadow-xl">

                {/* Header Row */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{edu.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Status Badge */}
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${edu.statusColor}`}>
                      {edu.status}
                    </span>
                    {/* Duration Badge */}
                    <span className="text-sm font-mono text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                </div>

                {/* Institution */}
                <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4 ml-9">
                  {edu.company}
                </h4>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Tech / Subject Tags */}
                <div className="flex flex-wrap gap-2">
                  {edu.tech.map((tech, i) => (
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
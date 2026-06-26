import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "10+", label: "Technologies" },
  { value: "4mo", label: "Intensive Bootcamp" },
  { value: "1+", label: "Years in Tech" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Get to Know Me</h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-2xl" />
              <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
                <img
                  src="/images/about-illustrations.svg"
                  alt="Developer Illustration"
                  className="w-full h-full object-contain p-8 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Fullstack Developer with a Network Engineering Background
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              I'm a Fullstack Web Developer specializing in building scalable
              web applications using <strong>React.js</strong> on the frontend
              and <strong>Golang (Gin)</strong> on the backend. I have hands-on
              experience deploying real-world apps with Docker, PostgreSQL, and
              Redis.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Before transitioning into software development, I worked as a
              Network Infrastructure Engineer — giving me a solid foundation in
              how systems communicate at every layer. Currently based in
              Jakarta, actively learning and building.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
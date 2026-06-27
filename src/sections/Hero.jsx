import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/ui/Button";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 pt-20 pb-12">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-purple-500 font-medium mb-4 uppercase tracking-widest text-sm"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Ahmad Aqil Khairun Nadzar
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 text-gray-600 dark:text-gray-400 min-h-[80px]"
            >
              <TypeAnimation
                sequence={[
                  "Fullstack Web Developer",
                  1500,
                  "IT Enthusiast",
                  1500,
                  "Problem Solver",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Button variant="primary" size="lg" as="a" href="/cv/CV-Ahmad-Aqil-Khairun-Nadzar.pdf" download="CV-Ahmad-Aqil-Khairun-Nadzar.pdf">
                <FiDownload className="w-5 h-5" />
                Download CV
              </Button>
              <Button variant="outline" size="lg" as="a" href="https://github.com/aqilknz" target="_blank">
                <FiGithub className="w-5 h-5" />
                GitHub
              </Button>
              <Button variant="outline" size="lg" as="a" href="https://www.linkedin.com/in/ahmadaqilkhairunnadzar" target="_blank">
                <FiLinkedin className="w-5 h-5" />
                LinkedIn
              </Button>
              <Button variant="outline" size="lg" as="a" href="mailto:khairunnz123@gmail.com">
                <FiMail className="w-5 h-5" />
                Email
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-20 blur-3xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 flex items-center justify-center">
                <img
                  src="/images/profile.png"
                  alt="Ahmad Aqil"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 animate-bounce">
            <span className="text-sm">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Ahmad Aqil Khairun Nadzar. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/aqilknz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmadaqilkhairunnadzar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/khairunnz_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300"
              aria-label="Instagram"
            >
              <FiInstagram className="w-6 h-6" />
            </a>
            <a
              href="mailto:khairunnz123@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
            <a
              href="https://discord.com/users/758170743619715099"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-500 transition-colors duration-300"
              aria-label="Discord"
            >
              <SiDiscord className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          onClick={scrollToTop}
          className="mt-10 mx-auto block p-4 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}

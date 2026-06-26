import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import Button from "../components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/aqilknz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <FiGithub className="w-8 h-8 text-purple-500" />
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-gray-600 dark:text-gray-400">@aqilknz</div>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <FiLinkedin className="w-8 h-8 text-purple-500" />
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-gray-600 dark:text-gray-400">Ahmad Aqil Khairun Nadzar</div>
                </div>
              </a>

              <a
                href="mailto:emailkamu@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <FiMail className="w-8 h-8 text-purple-500" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-600 dark:text-gray-400">khairunnz123@gmail.com</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");
                const body = "Name: " + name + "\nEmail: " + email + "\n\n" + message;
                const mailtoUrl = "mailto:emailkamu@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
                window.location.href = mailtoUrl;
              }}
            >
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button variant="primary" className="w-full" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

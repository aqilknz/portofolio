import { motion } from "framer-motion";
import { CERTIFICATES } from "../data/certificatesData";
import Button from "../components/ui/Button";
import { FiExternalLink } from "react-icons/fi";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-purple-500 font-medium mb-2 uppercase tracking-widest text-sm">
            My Certifications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Credentials & Achievements</h2>
          <div className="w-20 h-1 bg-purple-500 rounded mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Bagian Image / Preview */}
              <div className="relative overflow-hidden h-48 bg-gray-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <img
                  src={cert.link}
                  alt={`${cert.name} Certificate`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                  {cert.year}
                </div>
              </div>

              {/* Bagian Deskripsi */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {cert.issuer}
                </p>
                <Button
                  variant="primary"
                  as="a"
                  href={cert.link}
                  target="_blank"
                  className="w-full"
                >
                  <FiExternalLink className="w-4 h-4" />
                  View Certificate
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { memo } from "react";

const TimelineItem = memo(function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex items-start gap-6 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Content */}
      <div className="flex-1">
        <div className="bg-surface dark:bg-surface bg-surface-light border border-gray-700 dark:border-gray-700 border-gray-200 rounded-xl p-6 shadow-lg">
          <span className="text-purple font-medium text-sm uppercase tracking-widest">
            {item.period}
          </span>
          <h3 className="text-xl font-bold mt-2">{item.title || item.degree}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            {item.company || item.school}
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            {item.description}
          </p>
        </div>
      </div>

      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 rounded-full bg-purple border-4 border-surface dark:border-surface border-surface-light shadow-lg z-10" />
        {index < 2 && (
          <div className="w-0.5 h-24 bg-gray-700 dark:bg-gray-700 bg-gray-300" />
        )}
      </div>

      {/* Spacer for alternating layout */}
      <div className="flex-1" />
    </motion.div>
  );
});

export const JourneyTimeline = memo(function JourneyTimeline({ items, title, subtitle }) {
  return (
    <section id={title.toLowerCase()} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-purple font-medium mb-2 uppercase tracking-widest text-sm">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8">
            {items.map((item, index) => (
              <TimelineItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

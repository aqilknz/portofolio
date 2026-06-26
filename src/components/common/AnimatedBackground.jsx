export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Dark Mode Background */}
      <div className="hidden dark:block absolute inset-0 bg-[#0f1117]" />

      {/* Light Mode Background */}
      <div className="dark:hidden absolute inset-0 bg-white" />

      {/* Line Numbers */}
      <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-16 flex-col items-end pr-3 pt-20 text-xs font-mono select-none pointer-events-none opacity-20">
        {Array.from({ length: 100 }, (_, i) => (
          <span key={i} className="py-1 text-gray-500 dark:text-gray-400">
            {i + 1}
          </span>
        ))}
      </div>

      {/* Code Grid Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(100, 100, 100, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(100, 100, 100, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 30px",
        }}
      />

      {/* Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
    </div>
  );
}

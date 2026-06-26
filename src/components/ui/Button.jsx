import { motion } from "framer-motion";

export default function Button({
  variant = "primary",
  size = "md",
  as: Component = "button",
  children,
  className = "",
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 outline-none";

  const variants = {
    primary: "bg-purple-500 hover:bg-purple-600 text-white shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30",
    outline: "border-2 border-gray-300 dark:border-gray-700 bg-transparent hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-500/10 text-gray-700 dark:text-gray-300",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-base",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion[Component] || motion.button;

  return (
    <MotionComponent
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClass}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

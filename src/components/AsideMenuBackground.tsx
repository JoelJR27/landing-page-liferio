import { motion } from "motion/react";
export default function AsideMenuBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full h-screen fixed z-1 bg-black"
    ></motion.div>
  );
}

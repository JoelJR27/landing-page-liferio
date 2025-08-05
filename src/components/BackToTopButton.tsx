import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { useScroll } from "../hooks/useScroll";
import { AnimatePresence, motion } from "motion/react";

export default function BackToTopButton() {
  const { scrolledHeight, backToTop } = useScroll();
  return (
    <AnimatePresence>
      {scrolledHeight >= 300 && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          whileHover={{
            opacity: 0.5,
          }}
          className="bg-primary-color fixed bottom-[3%] right-[3%] p-4 text-white text-desktop-title rounded-full cursor-pointer z-10"
          onClick={backToTop}
        >
          <TbSquareRoundedArrowUpFilled />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

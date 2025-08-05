import { motion } from "motion/react";
import { useAsideMenu } from "../../hooks/useAsideMenu";
type AccordionProps = {
  summary: string;
  children: React.ReactNode;
};
export default function Accordion({ summary, children }: AccordionProps) {
  const { isOpen, handleOpenMenu } = useAsideMenu();
  return (
    <details className="text-center w-3/4 inline-block md:w-full md:text-start">
      <summary
        className="text-secondary-color font-bold cursor-pointer text-mobile-text xsm:text-[14px] lg:text-[18px]"
        onClick={handleOpenMenu}
      >
        {summary}
      </summary>
      <motion.p
        variants={{
          open: { height: "auto", opacity: 1, border: 4 },
          closed: { height: 0, opacity: 0 },
        }}
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="mx-3 py-2 text-text-colors text-mobile-text border-b border-b-gray-400 xsm:text-[14px] md:text-desktop-text"
      >
        {children}
      </motion.p>
    </details>
  );
}

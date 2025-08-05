import { motion } from "motion/react";
type LinkProps = {
  children: React.ReactNode;
  href: string;
  linkType: "link" | "iconButton";
  targetBlank: boolean;
};
export default function Link({
  children,
  href,
  linkType,
  targetBlank,
}: LinkProps) {
  const linkTypes = {
    link: "bg-secondary-color w-fit p-2 font-bold text-white rounded",
    iconButton: "text-desktop-title text-white",
  };
  return (
    <>
      {targetBlank ? (
        <motion.a
          href={href}
          whileHover={{ opacity: 0.7, scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          target="_blank"
          rel="noopener noreferrer"
          className={linkTypes[linkType]}
        >
          {children}
        </motion.a>
      ) : (
        <motion.a
          href={href}
          whileHover={{ opacity: 0.7, scale: 1.2 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={linkTypes[linkType]}
        >
          {children}
        </motion.a>
      )}
    </>
  );
}

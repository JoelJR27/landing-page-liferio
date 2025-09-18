import { motion } from "framer-motion";
type KidsCardProps = {
  title: string;
  text: string;
  color: "blue" | "lightBlue";
};

export default function KidsCard({ title, text, color }: KidsCardProps) {
  const colorClasses: { blue: string; lightBlue: string } = {
    blue: "primary-color",
    lightBlue: "secondary-color",
  };
  return (
    <article
      className={`bg-${colorClasses[color]} flex flex-col p-6 rounded-tl-2xl min-h-120 rounded-br-2xl shadow-md text-white text-center justify-between xsm:w-3/4 md:w-2/4 lg:max-w-1/4`}
    >
      <h3 className="text-white font-bold text-xl p-2">{title}</h3>
      <p className="py-4">{text}</p>
      <motion.a
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        target="_blank"
        href="http://wa.me/5521969672912"
        rel="noopener noreferrer"
        className={`bg-white text-${colorClasses[color]} font-bold p-2 rounded-lg`}
      >
        Solicite um orçamento!
      </motion.a>
    </article>
  );
}

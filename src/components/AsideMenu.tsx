import Link from "./Link";
import { motion } from "motion/react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
export default function AsideMenu() {
  return (
    <motion.aside
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-primary-color h-screen w-[70%] fixed z-100 flex justify-center p-10"
    >
      <nav className="text-center text-white text-mobile-subtitle flex flex-col justify-between xsm:text-mobile">
        <ul className="flex flex-col gap-4">
          <li>
            <Link targetBlank={false} linkType="iconButton" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link targetBlank={false} linkType="iconButton" href={"/contatos"}>
              Contatos
            </Link>
          </li>
          <li>
            <Link targetBlank={false} linkType="iconButton" href={"/servicos"}>
              Serviços
            </Link>
          </li>
          <li>
            <Link targetBlank={false} linkType="iconButton" href={"/sobre"}>
              Sobre nós
            </Link>{" "}
          </li>
          <li>
            <Link
              targetBlank={false}
              linkType="iconButton"
              href={"/trabalhe-conosco"}
            >
              Trabalhe conosco
            </Link>{" "}
          </li>
          <li>
            <Link targetBlank={false} linkType="iconButton" href={"/life-kids"}>
              Life Kids
            </Link>{" "}
          </li>
          <li className="mt-5 flex justify-center">
            <div className="flex text-mobile gap-4 xsm:text-4xl">
              <Link
                targetBlank
                linkType="iconButton"
                href="http://wa.me/5521969672912"
              >
                <IoLogoWhatsapp />
              </Link>
              <Link
                targetBlank
                linkType="iconButton"
                href="https://www.instagram.com/grupoliferio/"
              >
                <FiInstagram />
              </Link>
              <Link
                targetBlank
                linkType="iconButton"
                href="https://web.facebook.com/profile.php?id=61551433251031"
              >
                <FaFacebook />
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </motion.aside>
  );
}

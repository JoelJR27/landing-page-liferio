import logoLiferio from "/logo-liferio.webp";
import Link from "../components/Link";
import { useDeviceWidth } from "../hooks/useDeviceWidth";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp, IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AnimatePresence, motion } from "motion/react";
type HeaderProps = {
  isOpen: boolean;
  handleMenu(): void;
};
export default function Header({ isOpen, handleMenu }: HeaderProps) {
  const deviceWidth = useDeviceWidth();
  return (
    <motion.header
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="bg-primary-color sticky top-0 flex z-10 justify-between items-center px-4 shadow-2xl lg:justify-around"
    >
      <button
        className="text-white text-5xl cursor-pointer lg:hidden"
        onClick={handleMenu}
      >
        <AnimatePresence>
          {isOpen ? <IoMdCloseCircleOutline /> : <IoMdMenu />}
        </AnimatePresence>
      </button>
      {deviceWidth >= 1024 && (
        <nav className="font-open-sans text-center text-white font-semibold flex">
          <ul className="flex gap-6 xl:gap-8">
            <li>
              <Link targetBlank={false} linkType="iconButton" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                targetBlank={false}
                linkType="iconButton"
                href={"/contatos"}
              >
                Fale conosco
              </Link>
            </li>
            <li>
              <Link
                targetBlank={false}
                linkType="iconButton"
                href={"/servicos"}
              >
               Serviços
              </Link>
            </li>
            <li>
              <Link targetBlank={false} linkType="iconButton" href={"/quem-somos"}>
                Quem Somos
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
              <Link
                targetBlank={false}
                linkType="iconButton"
                href={"/life-kids"}
              >
                Life Kids
              </Link>{" "}
            </li>
          </ul>
        </nav>
      )}
      <div className="flex text-4xl gap-1">
        {deviceWidth >= 1024 && (
          <div className="flex gap-2 items-center text-white">
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
        )}
        <img
          className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]"
          src={logoLiferio}
          alt="Logo da Life Rio"
          loading="lazy"
        />
      </div>
    </motion.header>
  )
}

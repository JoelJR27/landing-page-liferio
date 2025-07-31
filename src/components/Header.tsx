import logoLiferio from "/logo-liferio.jpeg";
import { Link } from "react-router-dom";
import { useDeviceWidth } from "../hooks/useDeviceWidth";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp, IoMdMenu } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
type HeaderProps = {
  isOpen: boolean;
  handleMenu(): void;
};
export default function Header({ isOpen, handleMenu }: HeaderProps) {
  const deviceWidth = useDeviceWidth();
  return (
    <header className="bg-primary-color sticky top-0 flex z-10 justify-between items-center px-4 shadow-2xl lg:justify-around">
      <button
        className="text-white text-4xl cursor-pointer lg:hidden"
        onClick={handleMenu}
      >
        {isOpen ? <IoMdCloseCircleOutline /> : <IoMdMenu />}
      </button>
      {deviceWidth >= 1024 && (
        <nav className="font-open-sans text-center text-white font-semibold text-desktop-subtitle flex">
          <ul className="flex gap-4 xl:gap-10">
            <li>
              <Link className="" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/contatos"}>Contatos</Link>
            </li>
            <li>
              <Link to={"/servicos"}>Serviços</Link>
            </li>
            <li>
              <Link to={"/sobre"}>Sobre nós</Link>{" "}
            </li>
            <li>
              <Link to={"/trabalhe-conosco"}>Trabalhe conosco</Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="flex text-4xl gap-4">
        {deviceWidth >= 1024 && (
          <div className="flex gap-2 items-center text-desktop-subtitle text-white">
            <a
              href="http://wa.me/5521969672912"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/grupoliferio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61551433251031"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        )}
        <img
          className="w-[100px] h-[100px]"
          src={logoLiferio}
          alt="Logo da Life Rio"
        />
      </div>
    </header>
  );
}

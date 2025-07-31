import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
export default function AsideMenu() {
  return (
    <aside className="bg-primary-color h-screen w-[70%] fixed z-100 flex justify-center p-10">
      <nav className="text-center text-white text-mobile-subtitle flex flex-col justify-between xsm:text-mobile">
        <ul className="flex flex-col gap-4">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"contatos"}>Contatos</Link>
          </li>
          <li>
            <Link to={"servicos"}>Serviços</Link>
          </li>
          <li>
            <Link to={"sobre"}>Sobre nós</Link>{" "}
          </li>
          <li>
            <Link to={"trabalhe-conosco"}>Trabalhe conosco</Link>
          </li>
          <li className="mt-5 flex justify-center">
            <div className="flex text-mobile gap-4 xsm:text-4xl">
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
          </li>
        </ul>
      </nav>
    </aside>
  );
}

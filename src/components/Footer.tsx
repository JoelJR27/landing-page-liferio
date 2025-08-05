import logoLiferio from "/logo-liferio.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp} from "react-icons/io";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="bg-primary-color p-15 font-open-sans">
      <nav className="text-center text-white text-mobile-subtitle mb-8 flex flex-col justify-between xsm:text-mobile">
        <ul className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-10">
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
        </ul>
      </nav>
      <section className="flex flex-col gap-10 md:flex-row md:items-center md:justify-around">
        <div className="text-secondary-color xl:text-[20px] text-center md:text-start">
          <h4>
            CNPJ <strong>33.141.166/0001-87</strong>
          </h4>
          <h4>
            Life Rio <strong>Assistência em Saúde</strong>
          </h4>
          <h4>
            Telefone: <strong>(21) 96967-2912</strong>
          </h4>
          <h4>
            E-mail para contato: <strong> contatohomecarerio@gmail.com</strong>
          </h4>
        </div>
        <div className="flex items-center justify-center gap-10 ">
          <img
            className="w-[100px] h-[100px]"
            src={logoLiferio}
            alt="Logo da Life Rio"
            loading="lazy"
          />
          <div className="flex text-white text-mobile gap-4 xsm:text-4xl">
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
        </div>
      </section>
    </footer>
  );
}

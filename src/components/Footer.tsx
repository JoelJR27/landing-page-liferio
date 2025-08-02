import logoLiferio from "/logo-liferio.jpeg";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary-color p-15 font-open-sans">
      <nav className="text-center text-white text-mobile-subtitle mb-8 flex flex-col justify-between xsm:text-mobile">
        <ul className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-10">
          <li>
            <Link to={"/"}>Home</Link>
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
        </div>
      </section>
    </footer>
  );
}

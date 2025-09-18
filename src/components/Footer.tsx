import logoLiferio from "/logo-liferio.webp";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "./Link";

export default function Footer() {
  return (
    <footer className="bg-primary-color p-8 lg:py-15 lg:px-8 font-open-sans">
      <section className="flex flex-col gap-10 xl:flex-row md:items-center md:justify-around">
        <div className="text-white xl:text-[20px] text-center xl:text-start">
          <h4>
            CNPJ{" "}
            <strong className="text-secondary-color">33.141.166/0001-87</strong>
          </h4>
          <h4>
            Telefone:{" "}
            <strong className="text-secondary-color">(21) 96967-2912</strong>
          </h4>
          <h4>
            E-mail para contato:{" "}
            <strong className="text-secondary-color">
              {" "}
              contatoliferio@gmail.com
            </strong>
          </h4>
          <h4 className="font-bold">Life Rio Assistência em Saúde</h4>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-secondary-color">Unidades</h3>
          <ul className="flex flex-col gap-2 py-2 text-white text-lg">
            <li>Rio de Janeiro</li>
            <li>Minas Gerais</li>
            <li>São Paulo</li>
            <li>Brasília</li>
            <li>Espírito Santo</li>
          </ul>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-secondary-color mb-4">
            HORÁRIO DE FUNCIONAMENTO
          </h3>
          <h4 className="text-secondary-color text-lg font-medium">
            24H - Todos os dias!
          </h4>
          <p className="text-white">
            <i>
              Estamos aqui por você, 24h por dia, oferecendo cuidado e conforto
              no seu lar.
            </i>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px]"
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
      <section className="text-white text-center  lg:mt-20 flex flex-col gap-4">
        <div>
          <p>
            Copyright <strong>LIFE RIO ASSISTÊNCIA EM SAÚDE LTDA</strong> 2025 –
            Todos os direitos reservados.
          </p>
          <p className="underline">Desenvolvido por Lighthouse Dev</p>
        </div>

        <div>
          <p>
            <strong>RAZÃO SOCIAL</strong>: LIFE RIO ASSISTÊNCIA EM SAÚDE LTDA.
          </p>
          <p>CNPJ: 33.141.166/0001-87</p>
        </div>
      </section>
    </footer>
  );
}

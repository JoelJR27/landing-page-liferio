import AsideMenu from "../components/AsideMenu";
import EmailForm from "../components/EmailForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useAsideMenu } from "../hooks/useAsideMenu";
import { useDeviceWidth } from "../hooks/useDeviceWidth";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

export default function Contact() {
  const { isOpen, handleOpenMenu } = useAsideMenu();
  const deviceWidth = useDeviceWidth();
  return (
    <>
      <Header isOpen={isOpen} handleMenu={handleOpenMenu} />
      {isOpen && deviceWidth < 1024 && (
        <>
          <div className="w-full h-screen fixed z-1 bg-black opacity-60"></div>
          <AsideMenu />
        </>
      )}
      <section className="lg:p-8 lg:grid lg:grid-cols-2 xl:py-16 xl:px-32">
        <img
          className="w-full blur-[.5px] lg:rounded"
          src="/fundo-contatos.jpg"
          alt="Imagem de fundo onde uma mulher está usando seu notebook e telefonando."
        />
        <article className="">
          <h1 className="text-primary-color text-mobile font-bold p-4 xl:text-desktop-title">
            Contatos:
          </h1>
          <ul className="flex flex-col p-4 gap-2 ">
            <li className="flex items-center gap-1">
              <FaLocationDot className="text-secondary-color text-[18px] mr-1" />
              <h3 className="text-text-colors pl-2 border-l border-l-secondary-color xs:text-[18px]">
                Atendemos em todo o <strong>Rio de Janeiro</strong> e{" "}
                <strong>Niterói</strong>.
              </h3>
            </li>
            <li className="flex items-center gap-1">
              <FaPhone className="text-secondary-color text-[18px] mr-1" />
              <h3 className="text-text-colors pl-2 border-l border-l-secondary-color xs:text-[18px]">
                Telefone: <strong>(21) 96967-2912</strong>
              </h3>
            </li>
            <li className="flex items-center gap-1">
              <IoMailSharp className="text-secondary-color text-[18px] mr-1" />
              <h3 className="text-text-colors pl-2 border-l border-l-secondary-color xs:text-[18px]">
                E-mail para contato:{" "}
                <strong>contatohomecarerio@gmail.com</strong>
              </h3>
            </li>
            <li className="mt-5 ml-6">
              <a
                href="http://wa.me/5521969672912"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-color w-fit inline-block p-2 font-bold text-white rounded lg:text-[20px]"
              >
                Enviar uma mensagem
              </a>
            </li>
          </ul>
        </article>
      </section>
      <section className="p-6 mt-10 mb-15 lg:p-8 xl:w-3/4 xl:mx-auto">
        <h2 className="text-secondary-color py-4 font-bold text-mobile xl:text-desktop-title">
          Envie um e-mail para a gente!
        </h2>
        <EmailForm />
      </section>
      <Footer />
    </>
  );
}

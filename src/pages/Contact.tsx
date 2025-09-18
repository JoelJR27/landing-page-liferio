import contactsBackground from "/fundo-contatos.webp";
import EmailForm from "../components/EmailForm";
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import Link from "../components/Link";
import { AnimatePresence } from "motion/react";

export default function Contact() {
  return (
    <>
      <section className="lg:p-8 lg:grid lg:grid-cols-2 xl:py-16 xl:px-32">
        <img
          className="w-full blur-[.5px] lg:rounded"
          src={contactsBackground}
          alt="Imagem de fundo onde uma mulher está usando seu notebook e telefonando."
          loading="lazy"
        />
        <article className="">
          <h1 className="text-primary-color text-mobile font-bold p-4 xl:text-desktop-title">
            Fale Conosco!
          </h1>
          <ul className="flex flex-col p-4 gap-2 ">
            <li className="flex items-center gap-1">
              <FaPhone className="text-secondary-color text-[18px] mr-1" />
              <h3 className="text-text-colors pl-2 border-l border-l-secondary-color xs:text-[18px]">
                Telefone RJ: <strong>(21) 96967-2912</strong>
              </h3>
            </li>
            <li className="flex items-center gap-1">
              <FaPhone className="text-secondary-color text-[18px] mr-1" />
              <h3 className="text-text-colors pl-2 border-l border-l-secondary-color xs:text-[18px]">
                Telefone MG: <strong>(32) 99115-1067</strong>
              </h3>
            </li>
            <li className="flex items-center gap-1">
              <IoMailSharp className="text-secondary-color text-[18px] mr-1" />
              <h3 className="text-text-colors pl-2 border-l border-l-secondary-color xs:text-[18px]">
                E-mail para contato:{" "}
                <strong>contatoliferio@gmail.com</strong>{" "}
              </h3>
            </li>
            <li className="mt-5 ml-6">
              <AnimatePresence>
                <Link
                  targetBlank
                  linkType="link"
                  href="http://wa.me/5521969672912"
                >
                  Enviar uma mensagem
                </Link>
              </AnimatePresence>
            </li>
          </ul>
        </article>
      </section>
      <section className="p-6 mt-10 mb-15 lg:p-8 xl:w-3/4 xl:mx-auto">
        <h2 className="text-secondary-color py-4 font-bold text-mobile xl:text-desktop-title">
          Nos envie um e-mail!
        </h2>
        <EmailForm />
      </section>
    </>
  );
}

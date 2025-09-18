import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}
export default function WorkWithUs() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const validEmail = (email: string) => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regEx.test(String(email).toLowerCase());
  };
  return (
    <section className="mb-15">
      <img
        className="w-full h-60 object-cover xl:h-78"
        src="/background-trabalhe-conosco.webp"
        alt="Uma senhora recebendo atendimento médico"
      />
      <section className="px-8 md:px-16 lg:px-32 xl:px-48 2xl:px-64 py-8">
        <h1 className="text-secondary-color text-mobile font-black py-4 text-shadow-2xs lg:text-desktop-subtitle">
          Quer trabalhar na empresa de Home Care que mais cresce no país?
        </h1>
        <p className="text-text-colors pb-4">
          Preencha o formulário abaixo e envie o seu currículo!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary-color font-semibold w-full text-white py-2 px-4 rounded cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: formRef.current ? formRef.current.offsetTop - 200 : 0,
              behavior: "smooth",
            });
          }}
        >
          Clique aqui
        </motion.button>
        <form ref={formRef} className="flex flex-col gap-4 mt-8">
          <input
            className="border border-gray-300 p-2 rounded"
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="border border-gray-300 p-2 rounded"
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <textarea
            className="border border-gray-300 p-2 rounded"
            placeholder="Diga o motivo de pretender à vaga"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          {isSubmited &&
            (!formData.name || !formData.email || !formData.message) && (
              <p className="text-red-500">
                Por favor, preencha todos os campos corretamente.
              </p>
            )}
          {isSubmited && formData.email && !validEmail(formData.email) && (
            <p className="text-red-500">Por favor, insira um email válido.</p>
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-color font-semibold text-white py-2 px-4 rounded cursor-pointer"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
              event.preventDefault();
              setIsSubmited(true);
              if (!formData.name || !formData.email || !formData.message) {
                window.navigator.vibrate(200);
                return;
              }
              if (!validEmail(formData.email)) {
                window.navigator.vibrate(200);
                return;
              }
              window.open(
                `mailto:contatoliferio@gmail.com?subject=Quero trabalhar na Life Rio!&body=Olá, meu nome é: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMensagem: ${formData.message}`
              );
            }}
          >
            Enviar
          </motion.button>
        </form>
      </section>
    </section>
  );
}

import { useRef } from "react";
import Link from "./Link";
import areaDeAtendimento from "/area de atendimento.webp";
import { motion } from "framer-motion";
import handleFullScreen from "../utils/handleFullScreen";
export default function Location() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  return (
    <section className="p-8 lg:p-10">
      <h3 className="text-primary-color text-mobile font-bold mb-4 lg:text-desktop-title">
        Onde nos encontrar?
      </h3>
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="flex flex-col gap-4">
          <p className="text-text-colors text-mobile-text xsm:text-desktop-text md:w-3/4 lg:w-full xl:text-[20px]">
            Explore a variedade de bairros que atendemos e descubra como estamos
            comprometidos em levar nossos cuidados domiciliares excepcionais
            para onde você estiver.
          </p>
          <p className="text-text-colors text-mobile-text xsm:text-desktop-text md:w-3/4 lg:w-full xl:text-[20px]">
            Confira agora se estamos disponíveis na sua área e leve o melhor em
            assistência até o conforto do seu lar.
          </p>

          <Link targetBlank linkType="link" href="http://wa.me/5521969672912">
            Área de atendimento
          </Link>
        </div>

        <div>
          <motion.img
            ref={imageRef}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="shadow-lg"
            src={areaDeAtendimento}
            alt="Mapa da área de atendimento no Rio de Janeiro da Life Rio."
            onTap={() => {
              if (imageRef.current) {
                handleFullScreen(imageRef.current);
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}

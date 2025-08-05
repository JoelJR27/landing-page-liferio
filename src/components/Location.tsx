import Link from "./Link";

export default function Location() {
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

          <Link targetBlank linkType="link" href="http://wa.me/5521969672912">Área de atendimento</Link>
        </div>

        <iframe
          className="border-none w-full rounded-2xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d235182.6994523599!2d-43.6347887!3d-22.9233394!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fc307072ceb%3A0x7a81ba4169e4d8b3!2sGrupo%20Life%20Rio%20Assist%C3%AAncia%20em%20Sa%C3%BAde!5e0!3m2!1spt-BR!2sbr!4v1753879206267!5m2!1spt-BR!2sbr"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

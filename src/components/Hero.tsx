import { useDeviceWidth } from "../hooks/useDeviceWidth";

export default function Hero() {
  const deviceWidth = useDeviceWidth();
  return (
    <section className="w-full mb-10 lg:mb-0">
      <div className="bg-primary-color lg:relative">
        <img
          className="mask-r-from-30% mask-primary-color blur-[.5px] object-cover lg:mask-r-from-20%"
          src="/background.jpg"
          alt="Imagem de fundo de um casal de idosos se abraçando."
          loading="lazy"
        />
        {deviceWidth >= 1024 && (
          <>
            <div className="absolute top-[25%] right-[5%] flex flex-col items-end p-4 gap-4 ">
              <h2 className="text-desktop-title font-black text-white inline-block xl:text-[52px]">
                Serviços de Home-Care
              </h2>
              <p className="text-white xl:text-desktop-subtitle w-[50%] text-right">
                Acreditamos no poder do <strong>cuidado</strong> para
                proporcionar o <strong>bem-estar</strong> e{" "}
                <strong>qualidade de vida</strong> para quem mais amamos.
              </p>
              <a
                href="http://wa.me/5521969672912"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary-color inline-block p-2 font-bold text-white rounded xl:text-desktop-subtitle"
              >
                Conheça nossos serviços
              </a>
            </div>
          </>
        )}
      </div>

      {deviceWidth < 1024 && (
        <>
          <div className="p-4 flex flex-col gap-2 xs:p-8">
            <h2 className="text-mobile text-primary-color font-bold">
              Serviços de Home-Care
            </h2>
            <p className="text-text-colors xs:text-[18px]">
              Acreditamos no poder do cuidado para proporcionar o bem-estar e
              qualidade de vida para quem mais amamos.
            </p>
            <a
              href="http://wa.me/5521969672912"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary-color w-fit p-2 font-bold text-white rounded"
            >
              Conheça nossos serviços
            </a>
          </div>
        </>
      )}
    </section>
  );
}

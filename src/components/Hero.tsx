import { useDeviceWidth } from "../hooks/useDeviceWidth";
import Link from "./Link";

export default function Hero() {
  const deviceWidth = useDeviceWidth();
  return (
    <section className="w-full mb-10 lg:mb-0">
      <div className="bg-primary-color lg:relative">
        <img
          className="mask-r-from-30% mask-primary-color blur-[.5px] object-cover lg:mask-r-from-20%"
          src="/background.webp"
          alt="Imagem de fundo de um casal de idosos se abraçando."
          loading="lazy"
        />
        {deviceWidth >= 1024 && (
          <>
            <div className="absolute top-[25%] right-[5%] flex flex-col items-end p-4 gap-2 ">
              <h2 className="text-desktop-title font-medium text-white inline-block xl:text-[52px]">
                SEJA BEM-VINDO!
              </h2>
              <h1 className="text-desktop-title text-white font-black inline-block xl:text-[52px]">
                LIFE RIO
              </h1>
              <p className="text-white xl:text-desktop-subtitle w-[50%] text-right">
                Acreditamos no poder do <strong>cuidado</strong> para
                proporcionar o <strong>bem-estar</strong> e{" "}
                <strong>qualidade de vida</strong> para quem mais amamos.
              </p>

              <Link
                targetBlank
                linkType="link"
                href="http://wa.me/5521969672912"
              >
                Conheça nossos serviços
              </Link>
            </div>
          </>
        )}
      </div>

      {deviceWidth < 1024 && (
        <>
          <div className="p-4 flex flex-col gap-1 xs:p-8">
            <h2 className="text-mobile text-primary-color font-medium">
              SEJA BEM-VINDO!
            </h2>
            <h1 className="text-mobile text-primary-color font-black">
              LIFE RIO
            </h1>
            <p className="text-text-colors xs:text-[18px]">
              Acreditamos no poder do <strong>cuidado</strong> para proporcionar
              o <strong>bem-estar</strong> e <strong>qualidade de vida</strong>{" "}
              para quem mais amamos.
            </p>
            <Link targetBlank linkType="link" href="http://wa.me/5521969672912">
              Conheça nossos serviços
            </Link>
          </div>
        </>
      )}
    </section>
  );
}

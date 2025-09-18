import nossaMissao from "/nossa-missao.webp";
import nossaVisao from "/nossa-visao.webp";
import nossosValores from "/nossos-valores.webp";
export default function AboutUs() {
  return (
    <>
      <section className="p-5 lg:py-10 lg:px-20 2xl:px-30">
        <div className="flex flex-col items-center p-4 gap-6 xl:flex-row xl:px-0 2xl:px-20">
          <img
            src="/imagem-quem-somos.webp"
            alt="Uma profissional oferecendo cuidados a uma idosa."
          />
          <article className="flex flex-col gap-2">
            <h1 className="text-primary-color font-black text-mobile lg:text-desktop-title">
              Na Life Rio
            </h1>
            <p className="text-mobile-text text-text-colors xs:text-desktop-text xl:text-[16px]">
              nosso objetivo é proporcionar qualidade de vida e tranquilidade
              para sua família, cuidando com amor de quem você ama.
            </p>
            <p className="py-1 text-mobile-text text-text-colors xs:text-desktop-text xl:text-[16px]">
              Com a Life Rio Home Care, você leva um novo padrão de cuidados de
              saúde diretamente para sua casa. Nossa equipe de especialistas —
              médicos, enfermeiros e cuidadores — oferece serviços
              personalizados, desenhados para as necessidades de cada paciente.
            </p>
            <p className="text-mobile-text text-text-colors xs:text-desktop-text xl:text-[16px]">
              Vamos além do tratamento tradicional, pois entendemos que a saúde
              é um reflexo de atenção e carinho. Criamos um ambiente seguro e
              acolhedor para que todos se sintam apoiados em sua jornada, seja
              de recuperação ou de cuidado contínuo.
            </p>
          </article>
        </div>

        <section className="flex flex-col justify-center items-center gap-10 mb-10 mt-10">
          <Card image={nossaMissao} backgroundColor="primary-color">
            <CardTitle color="secondary">Nossa Missão:</CardTitle>
            <p className="text-mobile-text text-white xs:text-desktop-text">
              Prestar serviço de <strong>atenção domiciliar </strong> de{" "}
              <strong>forma segura, qualificada e humanizada</strong>,
              possibilitando a desospitalização e manutenção do cuidado do
              paciente em domicílio.
            </p>
          </Card>
          <Card image={nossaVisao} backgroundColor="white">
            <CardTitle color="primary">Nossa Visão:</CardTitle>
            <p className="text-mobile-text text-text-colors xs:text-desktop-text">
              Ser uma empresa <strong>inovadora</strong> de{" "}
              <strong>referência nacional</strong> pela excelência na prestação
              de serviço em atenção domiciliar por meio da gestão{" "}
              <strong>do cuidado focado no paciente</strong>.
            </p>
          </Card>
          <Card image={nossosValores} backgroundColor="primary-color">
            <CardTitle color="secondary">Nossos Valores:</CardTitle>

            <ul className="text-white text-mobile-text list-disc list-inside xs:text-desktop-text">
              <li>Ética</li>
              <li>Responsabilidade</li>
              <li>Organização</li>
              <li>Seriedade</li>
              <li>Comprometimento</li>
              <li>Reconhecimento profissional</li>
              <li>
                Participação efetiva da equipe multiprofissional na gestão do
                cuidado
              </li>
              <li>Foco na segurança do paciente</li>
              <li>Qualidade na assistência prestada</li>
            </ul>
          </Card>
        </section>
      </section>
    </>
  );
}

type CardProps = {
  children: React.ReactNode;
  image: string;
  backgroundColor: "primary-color" | "white"
};
function Card({ children, image, backgroundColor }: CardProps) {
  return (
    <article className={`shadow-2xl h-fit max-w-[300px] flex flex-col lg:max-w-none lg:w-[50%] rounded p-4 lg:p-2 lg:flex-row gap-4 bg-${backgroundColor}`}>
      <img className="rounded max-w-[300px] lg:max-w-none" src={image} alt="Doutor atendendo um paciente em sua residência." />
      <div className="p-3">{children}</div>
    </article>
  );
}

type CardTitleProps = {
  children: React.ReactNode;
  color: "primary" | "secondary";
};
function CardTitle({ children, color }: CardTitleProps) {
  return (
    <h2 className={`text-${color}-color font-bold text-mobile pb-2`}>
      {children}
    </h2>
  );
}

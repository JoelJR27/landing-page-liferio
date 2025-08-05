export default function AboutUs() {
  return (
    <>
      <section className="p-5 lg:py-10 lg:px-20 2xl:px-30">
        <article>
          <h1 className="text-primary-color font-black text-mobile lg:text-desktop-title">
            A Life Rio
          </h1>
          <p className="text-mobile-text text-text-colors xs:text-desktop-text xl:text-[18px]">
            é uma empresa especializada no cuidado com idosos, adultos e
            crianças. Durante os anos a empresa vem desenvolvendo um trabalho de
            excelência para pessoas que exigem qualidade e confiança. Fornecemos
            serviços adaptáveis, com planos personalizados buscando atender
            todas as necessidades dos pacientes e família
          </p>
        </article>
        <Video />

        <section className="flex flex-col gap-10 mb-10 xl:grid xl:grid-cols-3">
          <Card>
            <CardTitle>Nossa Missão:</CardTitle>
            <p className="text-mobile-text text-text-colors xs:text-desktop-text">
              Prestar serviço de <strong>atenção domiciliar </strong> de{" "}
              <strong>forma segura, qualificada e humanizada</strong>,
              possibilitando a desospitalização e manutenção do cuidado do
              paciente em domicílio.
            </p>
          </Card>
          <Card>
            <CardTitle>Nossa Visão:</CardTitle>
            <p className="text-mobile-text text-text-colors xs:text-desktop-text">
              Ser uma empresa <strong>inovadora</strong> de{" "}
              <strong>referência nacional</strong> pela excelência na prestação
              de serviço em atenção domiciliar por meio da gestão{" "}
              <strong>do cuidado focado no paciente</strong>.
            </p>
          </Card>
          <Card>
            <CardTitle>Nossos Valores:</CardTitle>

            <ul className="text-primary-color text-mobile-text font-semibold list-disc list-inside xs:text-desktop-text">
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

function Video() {
  return (
    <video
      className="mx-auto m-10 w-full shadow-2xl"
      preload="none"
      src="http://liferio.com.br/wp-content/uploads/2024/03/Video-corrigido-Grupo-Life.mp4"
      muted
      controls
      controlsList="nodownload"
    ></video>
  );
}

type ChildrenProp = {
  children: React.ReactNode;
};
function Card({ children }: ChildrenProp) {
  return (
    <article className="shadow-2xl h-fit w-full rounded p-8 ">
      {children}
    </article>
  );
}

function CardTitle({ children }: ChildrenProp) {
  return (
    <h2 className="text-secondary-color font-bold text-mobile pb-2">
      {children}
    </h2>
  );
}

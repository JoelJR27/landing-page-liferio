import KidsCard from "../components/KidsCard";
import lifeKidsImage from "/life-kids.webp";
interface Card {
  title: string;
  text: string;
  color: "blue" | "lightBlue" ;
}
export default function LifeKids() {
  const cards: Card[] = [
    {
      color: "blue",
      title: "Cuidador infantil - 8h",
      text: "A disponibilidade do cuidador infantil por um período de 8 horas é fundamental para cobrir o horário comercial de trabalho dos pais de Segunda a Sexta.",
    },
    {
      color: "lightBlue",
      title: "Cuidador infantil - 12h",
      text: "A Life Rio oferece atendimento personalizado para um período do dia ou da noite. É o plantão ideal para pais que precisam de um suporte além do horário comercial.",
    },
    {
      color: "blue",
      title: "Cuidador infantil - 24h",
      text: "Profissionais capacitados e treinados para um acompanhamento contínuo e com qualidade. A equipe da Life Rio é especialista em lidar com emergências e contornar situações atípicas.",
    },
  ];
  return (
    <section className="p-4 flex flex-col items-center justify-center mb-10 md:p-8 lg:px-16 lg:py-10 ">
      <div>
        <img
          className="mx-auto shadow-lg"
          src={lifeKidsImage}
          alt="Logo Life Kids"
        />
        <h1 className="text-mobile font-black text-center my-4 text-primary-color lg:text-desktop-title">
          O que faz um cuidador infantil?
        </h1>
      </div>
      <div className="text-text-colors flex flex-col items-center justify-center">
        <p className="lg:w-3/4">
          O cuidador infantil desempenha um papel essencial na vida de crianças
          pequenas, oferecendo não apenas supervisão, mas também suporte
          emocional e educativo.
        </p>
        <p className="my-2 lg:my-4 lg:w-3/4">
          Entre as principais funções desse profissional, destacam-se:
        </p>
        <ul className="list-disc list-inside flex flex-col gap-4 mb-8 lg:w-3/4">
          <li>
            <strong>Supervisão de Atividades:</strong> O cuidador é responsável
            por monitorar as brincadeiras e atividades dos pequenos, garantindo
            um ambiente seguro e divertido.
          </li>
          <li>
            <strong>Assistência nas Rotinas Diárias:</strong> Desde a hora das
            refeições até o banho e a hora de dormir, o cuidador auxilia as
            crianças em suas rotinas diárias, respeitando as orientações dos
            pais.
          </li>
          <li>
            <strong>Estimulação Educacional:</strong> Um cuidador infantil
            também deve promover atividades que estimulem o aprendizado, como
            jogos educativos, leitura de livros e artesanato.
          </li>
          <li>
            <strong>Suporte Emocional:</strong> As crianças frequentemente
            precisam de apoio emocional. O cuidador deve estar disponível para
            ouvir, confortar e ajudar os pequenos a expressar suas emoções.
          </li>
          <li>
            <strong>Comunicação com os Pais:</strong> Manter uma comunicação
            aberta com os pais é vital para o desempenho do cuidador, fornecento
            atualizações sobre o dia da criança e quaisquer comportamentos
            relevantes.
          </li>
        </ul>
        <h2 className="text-center text-secondary-color font-bold text-mobile mb-4 mt-10">
          Opções para quem busca cuidador especializado para bebês e crianças.
        </h2>
        <div className="flex flex-col items-center justify-center gap-6 lg:flex-row">
          {cards.map((card) => (
            <KidsCard
              key={card.title}
              color={card.color}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

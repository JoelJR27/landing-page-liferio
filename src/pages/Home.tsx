import { Accordions } from "../components/Accordion";
import Hero from "../components/Hero";
import InfosBanner from "../components/InfosBanner";
import Location from "../components/Location";
import Products from "../components/Products";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <InfosBanner />
      <Services />
      <Products />
      <Accordions.Container>
        <Accordions.Divider>
          <Accordions.Accordion summary="Redução dos Riscos Hospitalares">
            Ao fornecer tratamento em casa, o risco de contrair infecções em
            ambientes hospitalares é drasticamente reduzido.
          </Accordions.Accordion>
          <Accordions.Accordion summary="Proximidade com a Família">
            O paciente pode ser atendido no conforto de sua própria casa,
            permitindo que fique perto de seus entes queridos durante o
            tratamento.
          </Accordions.Accordion>
        </Accordions.Divider>
        <Accordions.Divider>
          <Accordions.Accordion summary="Garantia de Serviços 24h">
            Nossa equipe está disponível 24 horas por dia, garantindo
            atendimento de emergência sempre que necessário.
          </Accordions.Accordion>
          <Accordions.Accordion summary="Atendimento Humanizado e Personalizado">
            Nossos profissionais prestam atenção individualizada a cada
            paciente, garantindo que seus cuidados sejam atendidos de acordo com
            as suas necessidades específicas.
          </Accordions.Accordion>
        </Accordions.Divider>
      </Accordions.Container>
      <Location />
    </>
  );
}

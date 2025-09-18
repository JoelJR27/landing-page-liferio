import servicesBackground from "/fundo-servicos.webp";
import ServicesCard from "../components/ServicesCard";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { TbVaccine } from "react-icons/tb";
import { FaUserDoctor, FaXRay } from "react-icons/fa6";
import { BiClinic } from "react-icons/bi";
import { CiBandage } from "react-icons/ci";

export default function OurServices() {
  return (
    <>
      <section className="flex flex-col items-center">
        <img
          className=" shadow-lg w-full h-60 object-cover xl:h-78"
          src={servicesBackground}
          alt="Médico segurando uma prancheta."
          loading="lazy"
        />
        <h1 className="text-secondary-color font-bold text-mobile mt-5 lg:text-desktop-title">
          Nossos Serviços:
        </h1>
        <section className="p-4 xsm:p-8 flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid-cols-3">
          <ServicesCard
            icon={<MdOutlinePersonalInjury />}
            title="Tratamentos de lesões"
            text="Oferecemos um cuidado personalizado para cada tipo de ferida, com profissionais qualificados prontos para ajudar garantindo o melhor para sua recuperação."
          />
          <ServicesCard
            icon={<TbVaccine />}
            title="Aplicação de medicamentos"
            text="Aplicações de medicamentos, proporcionam um tratamento mais seguro e com menos exposição à infecções hospitalares."
          />
          <ServicesCard
            icon={<FaUserDoctor />}
            title="Cuidados paliativos"
            text="Os cuidados paliativos oferecem conforto e dignidade aos pacientes e suas famílias, focando na qualidade de vida em momentos difíceis. Com uma equipe multidisciplinar formada por médicos, enfermeiros e psicólogos, essa abordagem holística atende às necessidades físicas, emocionais, sociais e espirituais."
          />
          <ServicesCard
            icon={<CiBandage />}
            title="Internação domiciliar"
            text="Tudo o que é necessário para facilitar e promover a recuperação do paciente em um ambiente familiar e acolhedor. A internação domiciliar consiste na implementação de uma estrutura hospitalar completa na residência do paciente. Isso inclui a disponibilização de cama hospitalar, cadeira de rodas, cadeira, além da assistência de enfermeiros, médicos, fisioterapeutas, psicólogos e outros profissionais de saúde."
          />
          <ServicesCard
            icon={<BiClinic />}
            title="Atendimento domiciliar e hospitalar."
            text="O Home Care proporciona uma jornada de tratamento mais calma e confortável para o paciente. O atendimento domiciliar faz com que o paciente tenha um tratamento humanizado e a consequência é a melhora no quadro clínico.
"
          />
          <ServicesCard
            icon={<FaXRay />}
            title="Raio-X domiciliar"
            text="Em cada visita domiciliar, a excelência do atendimento em Home Care se faz presente. Com o raio-x móvel, garantimos diagnósticos precisos e ágeis, fundamentais para um cuidado eficaz e personalizado.
"
          />
        </section>
      </section>
    </>
  );
}

import ServicesCard from "../components/ServicesCard";
import { RiTeamFill } from "react-icons/ri";
import { TbVaccine } from "react-icons/tb";
import { FaUserDoctor, FaXRay } from "react-icons/fa6";
import { BiClinic } from "react-icons/bi";
import { CiBandage } from "react-icons/ci";

export default function OurServices() {
  return (
    <>
      <section className="flex flex-col items-center md:p-10 lg:px-20 xl:px-20">
        <img
          className="md:rounded-2xl"
          src="/fundo-servicos.png"
          alt="Médico segurando uma prancheta."
          loading="lazy"
        />
        <h1 className="text-secondary-color font-bold text-mobile mt-5 lg:text-desktop-title">
          Nossos Serviços:
        </h1>
        <section className="p-4 xsm:p-8 flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid-cols-3">
          <ServicesCard
            icon={<RiTeamFill />}
            title="Equipe multidisciplinar"
            text="Contamos com uma equipe capacitada, com atendimento personalizado para cada paciente."
          />
          <ServicesCard
            icon={<TbVaccine />}
            title="Aplicação de medicamentos em domicílio"
            text="Aplicações de medicamentos em domicílio, proporcionam um tratamento mais seguro e com menos exposição à infecções hospitalares."
          />
          <ServicesCard
            icon={<FaUserDoctor />}
            title="Cuidadores capacitados"
            text="Na Life Rio você pode contar com nossa equipe de cuidadores supervisionados, capacitados e preparados para atender as mais diversas necessidades de cuidados."
          />
          <ServicesCard
            icon={<CiBandage />}
            title="Planos personalizados"
            text="Proporcionamos assistência personalizada conforme a necessidade de cada paciente, seja durante o dia, à noite ou até mesmos aos finas de semana."
          />
          <ServicesCard
            icon={<BiClinic />}
            title="Atendimento residencial e hospitalar "
            text="O Home Care proporciona uma jornada de tratamento mais calma e confortável para o paciente. O atendimento domiciliar faz com que o paciente tenha um tratamento humanizado e a consequência é a melhora no quadro clínico.
"
          />
          <ServicesCard
            icon={<FaXRay />}
            title="Raio-X Domiciliar"
            text="Em cada visita domiciliar, a excelência do atendimento em Home Care se faz presente. Com o raio-x móvel, garantimos diagnósticos precisos e ágeis, fundamentais para um cuidado eficaz e personalizado.
"
          />
        </section>
      </section>
    </>
  );
}

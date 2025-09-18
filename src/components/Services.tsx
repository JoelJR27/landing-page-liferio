import servicesImage from "/servicos-imagem.webp";
import { RiTeamLine } from "react-icons/ri";
import { FaHandHoldingMedical, FaNotesMedical, FaPlus } from "react-icons/fa";
import { FaPersonShelter } from "react-icons/fa6";
import { IoNutrition } from "react-icons/io5";
import { IoIosMedkit } from "react-icons/io";
export default function Services() {
  return (
    <section className="mb-10 p-4 gap-4 flex flex-col items-center xs:p-8 w-full">
      <h3 className="text-primary-color font-bold text-mobile mb-4 lg:text-desktop-title">
        Oferecemos serviços como:
      </h3>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
        <img
          className="rounded-xl"
          src={servicesImage}
          alt="Imagem de um idoso recebendo cuidados em sua casa."
          loading="lazy"
        />
        <ul className="text-text-colors font-semibold flex flex-col gap-2 md:text-mobile lg:text-desktop-text lg:gap-8 xl:text-desktop-subtitle">
          <ListItem icon={<RiTeamLine />}>Equipe Multidisciplinar</ListItem>
          <ListItem icon={<FaPersonShelter />}>Cuidador de Idosos</ListItem>
          <ListItem icon={<FaHandHoldingMedical />}>
            Técnico de Enfermagem
          </ListItem>
          <ListItem icon={<FaNotesMedical />}>Fonoaudiólogos</ListItem>
          <ListItem icon={<IoNutrition />}>Nutricionistas</ListItem>
          <ListItem icon={<IoIosMedkit />}>Fisioterapeutas</ListItem>
          <ListItem icon={<FaPlus />}>Entre outros</ListItem>
        </ul>
      </div>
    </section>
  );
}

type ListItemProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
};
function ListItem({ children, icon }: ListItemProps) {
  return (
    <li className="flex items-center gap-2">
      <span className="text-desktop-subtitle text-secondary-color">{icon}</span>{" "}
      {children}
    </li>
  );
}

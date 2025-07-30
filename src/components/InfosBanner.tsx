import { FaStar } from "react-icons/fa";
import { MdFamilyRestroom, MdCorporateFare } from "react-icons/md";

export default function InfosBanner() {
  return (
    <section className="bg-primary-color w-full p-5">
      <ul className="flex justify-center text-white gap-5 flex-wrap">
        <BannerItem title="+200" text="Famílias Atendidas">
          <MdFamilyRestroom className="text-mobile" />
        </BannerItem>
        <BannerItem title="10" text="Nota de avaliação das famílias atendidas">
          {" "}
          <span className="flex justify-center gap-1 lg:">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
        </BannerItem>
        <BannerItem title="+25" text="Empresas Parceiras">
          <MdCorporateFare className="text-mobile lg:" />
        </BannerItem>
      </ul>
    </section>
  );
}

type BannerItemProps = {
  title: string;
  text: string;
  children?: React.ReactNode;
};
function BannerItem({ title, text, children }: BannerItemProps) {
  return (
    <li className="flex flex-col justify-center items-center gap-1 ">
      <h3 className="font-extrabold text-mobile">{title}</h3>
      <p className="text-mobile-text md:text-desktop-text lg:text-desktop-subtitle">{text}</p>
      {children}
    </li>
  );
}

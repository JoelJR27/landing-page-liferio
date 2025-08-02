type ServicesCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};
export default function ServicesCard({ icon, title, text }: ServicesCardProps) {
  return (
    <article className="shadow-2xl w-full rounded p-8 ">
      <div className="bg-secondary-color text-white text-desktop-title p-2 rounded-lg inline-block">
        {icon}
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="text-primary-color mt-2 font-bold text-[14px] xsm:text-mobile-subtitle xs:text-mobile">{title}</h5>
        <p className="text-text-colors text-mobile-text xsm:text-mobile-subtitle">{text}</p>
      </div>
    </article>
  );
}

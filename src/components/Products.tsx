import Swiper from "./Swiper";
// import Accordion from "./Accordion";
export default function Products() {
  return (
    <section className="p-4 flex flex-col items-center justify-center mb-10 lg:p-8">
      <h3 className="text-primary-color text-mobile font-bold lg:text-desktop-title mb-8">
        Aluguel de materiais hospitalares
      </h3>
      <Swiper />
    </section>
  );
}

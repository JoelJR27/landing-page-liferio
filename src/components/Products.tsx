import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade, Mousewheel, Parallax } from "swiper/modules";

export default function Products() {
  const imagesArray = [
    "/andador.webp",
    "/cadeira-de-rodas.webp",
    "/cadeira-higienica.webp",
    "/concentrador-de-oxigenio.webp",
    "/cama-hospitalar.webp",
    "/muletas.webp",
  ];
  return (
    <section className="p-4 mb-10 lg:p-8 lg:flex flex-col items-center justify-center">
      <h3 className="text-primary-color text-center text-mobile font-bold lg:text-desktop-title mb-8">
        Aluguel de materiais hospitalares
      </h3>

      <Swiper
        speed={800}
        centeredSlides
        slidesPerView="auto"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        mousewheel={{ enabled: true }}
        parallax={true}
        modules={[Navigation, Pagination, EffectFade, Mousewheel, Parallax]}
        navigation
        pagination={{ clickable: true }}
        className="w-auto max-w-[700px]"
      >
        {imagesArray.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="p-10 h-full">
              <SwiperImage imagePath={image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

type SwiperImageProps = { imagePath: string };
function SwiperImage({ imagePath }: SwiperImageProps) {
  return (
    <img
      key={imagePath}
      className="rounded-2xl shadow-lg min-h-[220px] max-w-[250px] max-h-[220px] mx-auto"
      src={imagePath}
      alt="Carrossel com imagens dos produtos ofertados pela Life Rio"
      loading="lazy"
    />
  );
}

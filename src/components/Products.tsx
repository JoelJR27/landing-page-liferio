import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade, Mousewheel, Parallax } from "swiper/modules";

export default function Products() {
  const imagesArray = [
    "/andador.webp",
    "/cadeira-de-rodas.webp",
    "/cadeira-higienica.webp",
    "/concentrador-de-oxigenio.jpg",
    "/cama-hospitalar.webp",
    "/andador.webp",
  ];
  return (
    <section className="p-4 mb-10 lg:p-8">
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
        breakpoints={{
          320: { spaceBetween: 40 },
          650: { spaceBetween: 30 },
          1000: { spaceBetween: 20 },
        }}
      >
        {imagesArray.map((image, index) => (
          <SwiperSlide key={index}>
            <SwiperImage imagePath={image} />
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
      className="rounded-2xl shadow-lg max-w-[250px]"
      src={imagePath}
      alt="Carrossel com imagens dos produtos ofertados pela Life Rio"
      loading="lazy"
    />
  );
}

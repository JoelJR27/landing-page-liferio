import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade, Mousewheel, Parallax } from "swiper/modules";

export default function TesteCarrossel() {
  return (
    <div className="w-1/2">
      <Swiper
        spaceBetween={50}
        slidesPerView={"auto"}
        effect="fade"
        parallax={true}
        modules={[Navigation, Pagination, EffectFade, Mousewheel, Parallax]}
        navigation
        fadeEffect={{ crossFade: true }}
        mousewheel={{ enabled: true }}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/andador.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cadeira-de-rodas.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cadeira-higienica.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/concentrador-de-oxigenio.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/cama-hospitalar.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/andador.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/andador.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/andador.webp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

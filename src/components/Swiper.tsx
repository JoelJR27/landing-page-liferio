import type { CSSProperties } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useDeviceWidth } from "../hooks/useDeviceWidth";
import { useImagesSwiper } from "../hooks/useImagesSwiper";

export default function Swiper() {
  const products = [
    "/cama-hospitalar.webp",
    "/cadeira-de-rodas.webp",
    "/cadeira-higienica.webp",
    "/andador.webp",
    "/concentrador-de-oxigenio.jpg",
  ];
  const { previousImage, currentImage, nextImage, increment, decrement } =
    useImagesSwiper(products);
  const deviceWidth = useDeviceWidth();
  return (
    <div className="relative flex gap-5">
      <SwiperImage imagePath={previousImage} />
      {deviceWidth >= 768 && <SwiperImage imagePath={currentImage} />}

      {deviceWidth >= 1280 && <SwiperImage imagePath={nextImage} />}
      <SwiperButton handleCurrentImage={decrement} positionSide={{ left: -10 }}>
        <FaAngleLeft />
      </SwiperButton>
      <SwiperButton
        handleCurrentImage={increment}
        positionSide={{ right: -10 }}
      >
        <FaAngleRight />
      </SwiperButton>
    </div>
  );
}

type SwiperButtonProps = {
  children: React.ReactNode;
  positionSide: CSSProperties;
  handleCurrentImage(): void;
};

function SwiperButton({
  children,
  positionSide,
  handleCurrentImage,
}: SwiperButtonProps) {
  return (
    <button
      className="bg-secondary-color p-1 absolute top-[50%] text-white rounded-full text-mobile cursor-pointer z-1"
      style={positionSide}
      onClick={handleCurrentImage}
    >
      {children}
    </button>
  );
}
type SwiperImageProps = { imagePath: string };
function SwiperImage({ imagePath }: SwiperImageProps) {
  return (
    <img
      className="rounded-2xl min-w-[250px] max-h-[250px] transition-all shadow-lg xsm:min-w-[320px] xsm:max-h-[320px]"
      src={imagePath}
      alt="Carrossel com imagens dos produtos ofertados pela Life Rio"
      loading="lazy"
    />
  );
}

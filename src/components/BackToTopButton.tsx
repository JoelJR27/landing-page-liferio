import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { useScroll } from "../hooks/useScroll";

export default function BackToTopButton() {
  const { scrolledHeight, backToTop } = useScroll();
  console.log(scrolledHeight);
  return (
    <>
      {scrolledHeight >= 300 && (
        <button
          className="bg-primary-color fixed bottom-[3%] right-[3%] p-4 text-white text-desktop-title rounded-full cursor-pointer"
          onClick={backToTop}
        >
          <TbSquareRoundedArrowUpFilled />
        </button>
      )}
    </>
  );
}

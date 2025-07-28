import logoLiferio from "/logo-liferio.jpeg";
import { IoMdMenu } from "react-icons/io";
export default function Header() {
  return (
    <header className="bg-primary-color sticky top-0 flex z-10 justify-between px-4">
      <button className="text-white text-4xl cursor-pointer">
        <IoMdMenu />
      </button>
      <img className="w-[100px] h-[100px]" src={logoLiferio} alt="" />
    </header>
  );
}

// function AsideMobileMenu() {
//   return <aside></aside>;
// }

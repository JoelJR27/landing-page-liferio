import { Link } from "react-router-dom";
export default function AsideMenu() {
  return (
    <aside className="bg-primary-color h-screen w-[70%] fixed z-1 flex justify-center">
      <nav className="font-open-sans text-center ">
        <ul className="flex flex-col gap-4 text-white text-mobile">
          <li>
            <Link className="" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/contatos"}>Contatos</Link>
          </li>
          <li>
            <Link to={"/servicos"}>Serviços</Link>
          </li>
          <li>
            <Link to={"/sobre"}>Sobre nós</Link>{" "}
          </li>
          <li>
            <Link to={"trabalhe-conosco"}>Trabalhe conosco</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

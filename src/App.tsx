import AsideMenu from "./components/AsideMenu";
import Header from "./components/Header";
import { useAsideMenu } from "./hooks/useAsideMenu";

function App() {
  const { isOpen, handleOpenMenu } = useAsideMenu();
  return (
    <main className="relative">
      <title>Grupo Liferio</title>
      <Header handleMenu={handleOpenMenu} />
      {isOpen && <AsideMenu />}
      <section className="h-screen object-cover w-full mask-primary-color">
        <img
          className="mask-r-from-50% mask-primary-color"
          src="/background.jpg"
          alt="Imagem de fundo de dois idosos juntos."
        />
        teste
      </section>
    </main>
  );
}

export default App;

import AsideMenu from "./components/AsideMenu";
import BackToTopButton from "./components/BackToTopButton";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfosBanner from "./components/InfosBanner";
import { useAsideMenu } from "./hooks/useAsideMenu";
import { useDeviceWidth } from "./hooks/useDeviceWidth";

function App() {
  const { isOpen, handleOpenMenu } = useAsideMenu();
  const deviceWidth = useDeviceWidth();
  console.log(window.scrollY);
  return (
    <main className="relative">
      <meta
        name="description"
        content="A Life Rio é uma empresa de que visa prestar o serviço de atenção domiciliar de forma segura, qualificada e humanizada, possibilitando a desospitalização e manutenção do cuidado do paciente em domicílio."
      />
      <title>Grupo Liferio</title>
      <Header isOpen={isOpen} handleMenu={handleOpenMenu} />
      <BackToTopButton />
      {isOpen && deviceWidth < 1024 && (
        <>
          <div className="w-full h-screen fixed z-1 bg-black opacity-60"></div>
          <AsideMenu />
        </>
      )}
      <Hero />
      <InfosBanner />
      <section className="h-screen">teste</section>
    </main>
  );
}

export default App;

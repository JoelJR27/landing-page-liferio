import { Outlet } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import { AnimatePresence } from "motion/react";
import Header from "./components/Header";
import AsideMenuBackground from "./components/AsideMenuBackground";
import AsideMenu from "./components/AsideMenu";
import { useDeviceWidth } from "./hooks/useDeviceWidth";
import { useAsideMenu } from "./hooks/useAsideMenu";
import Footer from "./components/Footer";

function App() {
  const { isOpen, handleOpenMenu } = useAsideMenu();
  const deviceWidth = useDeviceWidth();
  return (
    <>
      <main className="relative font-open-sans">
        <meta
          name="description"
          content="A Life Rio é uma empresa de que visa prestar o serviço de atenção domiciliar de forma segura, qualificada e humanizada, possibilitando a desospitalização e manutenção do cuidado do paciente em domicílio."
        />
        <title>Grupo Liferio</title>
        <Header isOpen={isOpen} handleMenu={handleOpenMenu} />
        <BackToTopButton />
        <AnimatePresence>
          {isOpen && deviceWidth < 1024 && (
            <>
              <AsideMenu />
              <AsideMenuBackground />
            </>
          )}
        </AnimatePresence>
        <Outlet />

        <BackToTopButton />
      </main>
      <Footer />
    </>
  );
}

export default App;

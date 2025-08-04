import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BackToTopButton from "./components/BackToTopButton";
import Loading from "./components/Loading";
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyContact = React.lazy(() => import("./pages/Contact"));
const LazyOurServices = React.lazy(() => import("./pages/OurServices"));
const LazyAboutUs = React.lazy(() => import("./pages/AboutUs"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<Loading />}>
        <LazyHome />
      </React.Suspense>
    ),
  },
  {
    path: "/contatos",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyContact />
      </Suspense>
    ),
  },
  {
    path: "/servicos",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyOurServices />
      </Suspense>
    ),
  },
  {
    path: "/sobre",
    element: (
      <Suspense fallback={<Loading />}>
        <LazyAboutUs />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <main className="relative font-open-sans">
      {/* TODO: Buscar sobre quais meta tags são essenciais para utilizar */}
      {/* TODO: Alterar a largura e altura das imagens do carrossel na versão mobile */}
      {/* TODO: Fazer um lazy loading para as imagens do carrossel */}
      {/* TODO: Fazer um lazy loading para o iframe do mapa */}
      {/* TODO: Criar animações para abertura dos acordeões */}
      {/* TODO: Criar animações para cabeçalho, abertura do menu lateral */}

      <meta
        name="description"
        content="A Life Rio é uma empresa de que visa prestar o serviço de atenção domiciliar de forma segura, qualificada e humanizada, possibilitando a desospitalização e manutenção do cuidado do paciente em domicílio."
      />
      <title>Grupo Liferio</title>
      <RouterProvider router={router} />
      <BackToTopButton />
    </main>
  );
}

export default App;

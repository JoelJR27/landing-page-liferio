export default function NavigationError() {
  return (
    <section className="h-screen w-full p-4 flex justify-center items-center font-open-sans">
      <div>
        <h1 className="text-center text-red-500 font-black text-desktop-subtitle md:text-desktop-title">
          Ops! Algo deu errado
        </h1>
        <p className="text-text-colors text-desktop-subtitle">
          Para retornar à página inicial{" "}
          <a className="underline text-primary-color" href="/">
            {" "}
            clique aqui
          </a>
        </p>
      </div>
    </section>
  );
}

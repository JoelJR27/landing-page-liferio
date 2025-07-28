import Header from "./components/Header";

function App() {
  return (
    <main className="relative">
      <Header />
      <section className="h-screen object-cover w-full bg-cover bg-no-repeat mask-l-from-80% mask-linear-to-80% mask-linear-to-primary-color">
        <img className=" mask-linear-from-primary-color" src="/background.jpg" alt="" />
      teste</section>
      <section className="h-screen">teste</section>
    </main>
  );
}

export default App;

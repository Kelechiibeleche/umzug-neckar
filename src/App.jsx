import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Process />
      </main>
    </>
  );
}

export default App;

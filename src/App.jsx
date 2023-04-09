import Awards from "./components/Awards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Talk from "./components/Talk";

function App() {
  return (
    <>
      <main className="bg-light-green overflow-hidden w-full p-4 hidden lg:block">
        <Navbar />

        {/* hero */}
        <Hero />

        {/* projects */}
        <Projects />

        {/* awards */}
        <Awards />

        {/* talk */}
        <Talk />

        <Footer />
      </main>
      <section className="lg:hidden min-h-screen w-full grid place-items-center bg-light-green text-dark">
        <div>
          <h1 className="text-4xl font-clash-medium text-center">
            Mobile Version Under Development.
          </h1>
        </div>
      </section>
    </>
  );
}

export default App;

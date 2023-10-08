import About from "./components/About";
import BoxSection from "./components/BoxSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className=" py-8">
        <About />
      </div>
      <div className=" py-8">
        <BoxSection />
      </div>
      <div className=" py-8">
        <Roadmap />
      </div>
      <div className="py-2">
        <Team/>

      </div>

      <div className="flex flex-col sm:flex-row justify-around py-2 container-wrapper">
      <a href="https://www.pinksale.finance/launchpad/0xd7e26a26ae233ef273fcfa67a78373fd0c718d2e?chain=BSC" target="_blank" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-10 text-center my-2 sm:px-20 py-3 rounded-full   hover:text-gray-200">
               Presale
              </a>
              <a href="https://t.me/noodlefi" target="_blank" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-10 text-center my-2 sm:px-20 py-3 rounded-full   hover:text-gray-200">
               Join Community
              </a>
              <a href="https://noodlefi.gitbook.io/docs/" target="_blank" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-10 text-center my-2 sm:px-20 py-3 rounded-full   hover:text-gray-200">
              Whitepaper
              </a>
      </div>

      <Footer />
    </>
  );
}

export default App;

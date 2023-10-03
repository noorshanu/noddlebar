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
      <div className="py-8">
        <Team/>

      </div>

      <div className="flex justify-center py-8">
      <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-btn2 px-12 py-3 rounded-full   hover:text-gray-200">
               Join Community
              </a>
      </div>

      <Footer />
    </>
  );
}

export default App;

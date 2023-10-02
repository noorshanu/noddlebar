import About from './components/About'
import BoxSection from './components/BoxSection'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
      <Hero/>
      <div className=' py-8'>
        <About/>

      </div>
      <div className=' pt-7 pb-7'>
        <BoxSection/>

      </div>
      <Footer/>
    </>
  )
}

export default App

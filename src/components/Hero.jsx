import React from 'react'

function Hero() {

  return (
    <section className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("images/bg-main.png")'}}>
    <div className='container-wrapper pt-6'>
  <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className=" max-w-4xl tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center px-4 font-car text-white text-s">
       Worlds First Dertiatives Trading Platform
      </h1>
      <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center mb-6 px-4 text-white max-w-4xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur velit veniam consectetur rerum. Minus vitae facere delectus commodi odio! Ipsum similique error aliquid quasi magnam laboriosam, harum omnis nam reprehenderit.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-7">
      <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-gray-200">
                Presale
              </a>
              <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-btn2 px-12 py-3 rounded-full   hover:text-gray-200">
               Join Community
              </a>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Hero
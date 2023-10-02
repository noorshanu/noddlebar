import React from 'react'

function Hero() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  ];
  return (
    <section className="h-screen bg-cover bg-center" style={{backgroundImage: 'url("images/bg-main.png")'}}>
    <div className='container-wrapper'>
  <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center px-4">
        Your Tagline Here
      </h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-6 px-4">
        {quotes[Math.floor(Math.random() * quotes.length)]}
      </p>
      <div className="flex flex-col sm:flex-row items-center">
        <button className="bg-[#f16369] text-white py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4">
          Contact Us
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Contact Us
        </button>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Hero
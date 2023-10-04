import React from "react";

function Hero() {
  return (
    <section className="relative h-[70vh] sm:h-[88vh] bg-cover bg-center">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline // Add playsInline for iOS Safari
        className="absolute top-0 left-0 min-w-full h-[70vh] sm:h-[88vh] object-cover"
      >
        {/* Provide multiple video formats */}
        <source src="images/main-bg.mp4" type="video/mp4" />
        <source src="videos/bg-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="container-wrapper relative z-10 pt-6">
        <div className="flex flex-col items-center justify-center h-screen absolute left-[1px] sm:left-[17%] top-[-4rem] sm:top-[9rem] ">
          <h1 className=" max-w-4xl tracking-wide main-t text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center px-4 font-car text-white text-s">
            Worlds Fastest Dertiatives Trading Platform
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-7">
            <a
              href="#"
              className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-20 py-3 rounded-full   hover:text-gray-200"
            >
              Presale
            </a>
            <a
              href="#"
              className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-gray-200"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

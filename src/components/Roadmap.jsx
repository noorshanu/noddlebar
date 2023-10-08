import React from "react";

function Roadmap() {
  return (
    <section id="road">
      <div className="container-wrapper">
        <div className="relative">
          <img
            src="images/head.png"
            alt=""
            className=" h-24 flex justify-center mx-auto  "
          />
          <div className=" absolute top-[25%] left-[25%] sm:left-[44%] ">
            <h1 className=" text-4xl font-car text-white uppercase">Roadmap</h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 my-8" data-aos="fade-up"
     data-aos-offset="300" data-aos-duration="1500" 
     data-aos-easing="ease-in-sine">
          <div className="bg-[#fff8e4] rounded-lg p-[1px] w-[290px] sm:w-[350px] mx-auto sm:mx-0">
            <div className="bg-[#fc7981] px-12 text-center rounded-lg py-1 uppercase font-bold">
              Phase 1
            </div>
            <div className=" py-7 px-5">
              <p> Foundation</p>
              <p>Market research</p>
              <p>Team assembly</p>
              <p>Initial platform development</p>
              <p>Website launch</p>
              <p>$NOFI token Audit & KYC </p>
            </div>
          </div>

          {/* box2 */}

          <div className="bg-[#fff8e4] rounded-lg p-[1px]  w-[290px] sm:w-[350px] mx-auto sm:mx-0">
            <div className="bg-[#fc7981] px-12 text-center rounded-lg py-1 uppercase font-bold">
              Phase 2
            </div>
            <div className=" py-7 px-5">
              <p> Expansion.</p>
              <p>Presale On Pinksale</p>
              <p>Key partnerships</p>
              <p>Community feedback</p>
              <p>10X-100X leveraged trading</p>
              <p>Full on-chain operations </p>
            </div>
          </div>

          {/* box3 */}

          <div className="bg-[#fff8e4] rounded-lg p-[1px]  w-[290px] sm:w-[350px] mx-auto sm:mx-0">
            <div className="bg-[#fc7981] px-12 text-center rounded-lg py-1 uppercase font-bold">
              Phase 3
            </div>
            <div className=" py-7 px-5">
              <p> Growth</p>
              <p>Platform optimization</p>
              <p>Mobile app launch</p>
              <p>Reward programs</p>
              <p>Community events</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col sm:flex-row items-center gap-7">
          <a
            href="#"
            className="text-white shadow-lg  uppercase font-bold stroke-black   bg-pink px-14 py-3 rounded-full   hover:text-gray-200"
          >
            Buy Now
          </a>
          <a
            href="https://nofi-dev.vercel.app/" target="_blank"
            className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-gray-200"
          >
            Launch App
          </a>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;

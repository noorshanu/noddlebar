import React from "react";

function Roadmap() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="relative">
          <img
            src="images/head.png"
            alt=""
            className=" h-24 flex justify-center mx-auto  "
          />
          <div className=" absolute top-[25%] left-[24%] sm:left-[44%] ">
            <h1 className=" text-4xl font-car text-white uppercase">Roadmap</h1>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-8 my-8">
          <div className="bg-[#fff8e4] rounded-lg p-[1px] w-[290px] sm:w-[350px]">
            <div className="bg-[#fc7981] px-12 text-center rounded-lg py-1 uppercase font-bold">
              Phase 1
            </div>
            <div className=" py-7 px-5">
           






              <p> Foundation.</p>
              <p>Market research.</p>
              <p>Team assembly.</p>
              <p>Initial platform development.</p>
              <p>Website launch.</p>
              <p>$NOFI token Audit & KYC </p>
            </div>
          </div>

          {/* box2 */}

          <div className="bg-[#fff8e4] rounded-lg p-[1px]  w-[290px] sm:w-[350px]">
            <div className="bg-[#fc7981] px-12 text-center rounded-lg py-1 uppercase font-bold">
              Phase 1
            </div>
            <div className=" py-7 px-5">
              <p>random</p>
              <p>random</p>
              <p>random</p>
            </div>
          </div>

          {/* box3 */}

          <div className="bg-[#fff8e4] rounded-lg p-[1px]  w-[290px] sm:w-[350px]">
            <div className="bg-[#fc7981] px-12 text-center rounded-lg py-1 uppercase font-bold">
              Phase 1
            </div>
            <div className=" py-7 px-5">
              <p>random</p>
              <p>random</p>
              <p>random</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-col sm:flex-row items-center gap-7">
        <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  btn-green px-12 py-3 rounded-full   hover:text-gray-200">
               Buy Now
              </a>
      <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-gray-200">
               Launch App
              </a>
             
      </div>
      </div>
    </section>
  );
}

export default Roadmap;

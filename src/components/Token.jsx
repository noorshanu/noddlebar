import React from "react";

function Token() {
  return (
    <div className=" my-9">
      <div className="relative">
        <img
          src="images/head.png"
          alt=""
          className=" h-24 flex justify-center mx-auto  "
        />
        <div className=" absolute top-[25%] left-[19.5%]  sm:left-[41.5%] " id="token">
          <h1 className=" text-4xl font-car text-white uppercase">
            Tokenomics
          </h1>
        </div>
      </div>

      <div className=" mt-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
            <div>
                <img src="images/pie.png" alt="" className=" h-[260px]" />
            </div>

            <div>
                <p>-5% Stake Platform.</p>
                <p>-5% Advisor .</p>
           
                <p>-28% Presale .</p>
                <p>-10% Ecosystem .</p>
                <p>-10% CEX Listing .</p>
            </div>

        </div>

      </div>
      <div className="flex justify-center mt-5">
        <a href="#" className="text-white  uppercase font-bold stroke-black  bg-pink px-14 py-3 rounded-full shadow-lg   hover:text-gray-200">
                Buy Now
              </a>
        </div>
    </div>
  );
}

export default Token;

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
        <div className=" absolute top-[25%] left-[41.5%] ">
          <h1 className=" text-4xl font-car text-white uppercase">
            Tokenomics
          </h1>
        </div>
      </div>

      <div className=" mt-8">
        <div className="flex items-center justify-center gap-7">
            <div>
                <img src="images/okp.png" alt="" className=" h-[260px]" />
            </div>

            <div>
                <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit.? .</p>
                <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit.? .</p>
           
                <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit.? .</p>
                <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit.? .</p>
                <p>-Lorem ipsum dolor sit amet consectetur adipisicing elit.? .</p>
            </div>

        </div>

      </div>
      <div className="flex justify-center mt-5">
        <a href="#" className="text-white  uppercase font-bold stroke-black  btn-green px-12 py-3 rounded-full shadow-lg   hover:text-gray-200">
                Buy Now
              </a>
        </div>
    </div>
  );
}

export default Token;

import React from "react";

function About() {
  return (
    <section className="bg-[#ffffff54] rounded-md  backdrop-blur-md">
      <div className="container-wrapper pt-8 pb-8">
        <div className=" text-center">
          <h1 className="font-car text-black text-5xl pb-8 flex gap-4 mx-auto justify-center items-center">what is <img src="images/nood.png" alt="" className=" h-11" /> ?</h1>
          <p className=" max-w-3xl mx-auto">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            saepe excepturi corrupti nulla quasi officiis, laboriosam
            repudiandae accusantium, odit quibusdam eveniet? Ipsa aperiam
            asperiores excepturi soluta culpa impedit nobis nesciunt!
          </p>
          <div className=" my-6">
            <a href="/" className="bg-btn px-12 py-3 rounded-full text-white shadow-lg font-bold"> Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-md p-8 mt-8 text-center h-[300px]">
            <h1> pick deck here</h1>


        </div>
        <div className="flex justify-center mt-5">
        <a href="#" className="text-white  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full shadow-lg   hover:text-gray-200">
                Launch App
              </a>
        </div>
      </div>
    </section>
  );
}

export default About;

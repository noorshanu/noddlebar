import React from "react";

function About() {
  return (
    <section className="bg-[#ffffff99] rounded-md">
      <div className="container-wrapper pt-8 pb-8">
        <div className=" text-center">
          <h1>what is noddles</h1>
          <p className=" max-w-xl mx-auto">
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
            saepe excepturi corrupti nulla quasi officiis, laboriosam
            repudiandae accusantium, odit quibusdam eveniet? Ipsa aperiam
            asperiores excepturi soluta culpa impedit nobis nesciunt!
          </p>
          <div>
            <a href="/" className="bg-btn px-12 py-3 rounded-full text-white"> Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-md p-8 mt-5 text-center h-[300px]">
            <h1> pick deck here</h1>


        </div>
        <div className="flex justify-center mt-5">
        <a href="#" className="text-white  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-gray-200">
                Launch App
              </a>
        </div>
      </div>
    </section>
  );
}

export default About;

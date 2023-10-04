import React from "react";

function About() {
  return (
    <div className=" relative">
 <img src="images/cloud1.png" alt="" className=" absolute top-[-50px] sm:top-[-30px] left-[-30px] h-[250px] sm:h-[500px] -z-10 overflow-hidden " />
 <img src="images/tree.png" alt="" className=" absolute top-[-30px] right-[0px] h-[200px]  sm:h-[500px] -z-10 floating overflow-hidden"  />
   
    <section className="bg-[#ffffff54] rounded-md  backdrop-blur-[3px] relative z-10">
     
      <div className="container-wrapper pt-8 pb-8 z-10">
        <div className=" text-center">
          <h1 className="font-car text-black text-3xl sm:text-5xl pb-8   gap-4 mx-auto justify-center items-center">what is Noodlefi ?</h1>
          <p className=" max-w-3xl mx-auto">
            {" "}
            Noodle Fi is a place where you can easily trade different digital assets. We've built it to be user-friendly, so whether you're new to trading or have been doing it for a while, you'll find it straightforward. With Noodle Fi, you can take different trading positions, get rewards by participating, and always have a clear view of your transactions. It's a secure, transparent, and simple way to dive into the world of digital trading.
          </p>
          <div className=" my-6">
            <a href="/" className="bg-btn px-12 py-3 rounded-full text-white shadow-lg font-bold"> Read More</a>
          </div>
        </div>
        <div className="bg-white rounded-md p-8 mt-8 text-center h-[300px] z-10 block">
            <h1> pick deck here</h1>


        </div>
        <div className="flex justify-center mt-5">
        <a href="#" className="text-white  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full shadow-lg   hover:text-gray-200">
                Launch App
              </a>
        </div>
      </div>
    </section>
    </div>
  );
}

export default About;

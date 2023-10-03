import React from 'react';
import Partners from './Partners';
import Token from './Token';

const BoxSection = () => {
  return (
      <div className=' relative'>
         <img src="images/tree2.png" alt="" className=" absolute top-[-200px] left-[-30px] h-[700px] -z-10" />
         <img src="images/bowl.png" alt="" className=" absolute top-[-200px] right-[-30px] h-[700px] -z-10" />

    <section className='bg-[#ffffff54] rounded-md  backdrop-blur-md py-8'>
    <div className='container-wrapper'>
    <div className=" py-2">
      <div className="container mx-auto flex flex-col sm:flex-row justify-around items-baseline  space-y-4 sm:space-x-4">
        {/* Box 1 */}
        <div className=" relative p-6 rounded-lg text-center ">
          <div>
            <img src="images/box.png" alt="" className='h-[160px]' />
          </div>
          <div className='m-content'>
          <h1 className="text-3xl font-bold text-white">$2344565</h1>
          <p className="mt-2">Hi, how are you?</p>
          </div>
         
        </div>

        {/* Box 2 */}
        <div className=" relative p-6 rounded-lg text-center ">
          <div>
            <img src="images/box.png" alt="" className='h-[160px]' />
          </div>
          <div className='m-content'>
          <h1 className="text-3xl font-bold text-white">$2344565</h1>
          <p className="mt-2">Hi, how are you?</p>
          </div>
         
        </div>

        {/* Box 3 */}
        <div className=" relative p-6 rounded-lg text-center ">
          <div>
            <img src="images/box.png" alt="" className='h-[160px]' />
          </div>
          <div className='m-content'>
          <h1 className="text-3xl font-bold text-white">$2344565</h1>
          <p className="mt-2">Hi, how are you?</p>
          </div>
         
        </div>
      </div>
    </div>
    <div className=' py-8'>
      <Partners/>

    </div>
    <div>
      <Token/>
    </div>
    </div>
    </section>
      </div>
  );
};

export default BoxSection;
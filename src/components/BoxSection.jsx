import React from 'react';
import Partners from './Partners';
import Token from './Token';

const BoxSection = () => {
  return (
      <div className=' relative'>
         <img src="images/tree2.png" alt="" className=" absolute top-[-200px] left-[-30px] h-[150px] sm:h-[700px] -z-10 floating overflow-hidden" />
         <img src="images/bowl.png" alt="" className=" absolute top-[-200px] right-[0px] h-[150px] sm:h-[700px] -z-10  overflow-hidden" />

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
          <h1 className="text-3xl font-bold text-white">$56,809,953,811</h1>
          <p className="mt-2 text-sm font-semibold text-white uppercase">
         24h Volume</p>
          </div>
         
        </div>

        {/* Box 2 */}
        <div className=" relative p-6 rounded-lg text-center ">
          <div>
            <img src="images/box.png" alt="" className='h-[160px]' />
          </div>
          <div className='m-content'>
          <h1 className="text-3xl font-bold text-white">$24,344,655,525</h1>
          <p className="mt-2 text-sm font-semibold text-white uppercase">Open Interest</p>
          </div>
         
        </div>

        {/* Box 3 */}
        <div className=" relative p-6 rounded-lg text-center ">
          <div>
            <img src="images/box.png" alt="" className='h-[160px]' />
          </div>
          <div className='m-content ml-[1.3rem]'>
          <h1 className="text-3xl font-bold text-white">$68,670,477</h1>
          <p className="mt-2 text-sm font-semibold text-white uppercase">24h Liquidation</p>
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
    <img src="images/flower.png" alt="" className=" absolute bottom-[-40px] sm:bottom-[-100px] left-[0px] h-[100px] sm:h-[250px] z-10 anime2 overflow-hidden" />
         <img src="images/cloud2.png" alt="" className=" absolute bottom-[-40px] sm:bottom-[-100px] right-[0px] h-[100px] sm:h-[250px] z-10 anime1 floating overflow-hidden" />
      </div>
  );
};

export default BoxSection;
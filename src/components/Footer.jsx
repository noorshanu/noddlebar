import React from 'react'
import {FaSquareXTwitter} from 'react-icons/fa6'
import {AiFillFacebook} from 'react-icons/ai'

function Footer() {
  return (
    <div className=' py-8 text-center container-wrapper'>

      <div className='flex flex-col sm:flex-row justify-between items-center'>
<div>
<img src="images/logo.png" alt=""  className='w-auto h-14'/>

</div>
<div className='flex items-center gap-2'>
  <a href="/" className=' text-3xl text-[#f04451]'><FaSquareXTwitter/></a>
  <a href="/" className=' text-3xl text-[#f04451]'><AiFillFacebook/></a>

</div>
<p className=' font-bold'>All Right Reserved | Noodlefi.com</p>
      </div>
       


    </div>
  )
}

export default Footer
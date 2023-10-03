import React from 'react'
import {FaSquareXTwitter,FaTelegram} from 'react-icons/fa6'
import {AiFillFacebook} from 'react-icons/ai'
import {IoLogoDiscord} from 'react-icons/io5'

function Footer() {
  return (
    <div className=' py-8 text-center container-wrapper'>

      <div className='flex flex-col sm:flex-row justify-between items-center'>
<div>
<img src="images/logo.png" alt=""  className='w-auto h-14'/>

</div>
<div className='flex items-center gap-2'>
  <a href="/" className=' text-3xl text-[#f04451] hover:text-black'><FaSquareXTwitter/></a>
  <a href="/" className=' text-3xl text-[#f04451] hover:text-black'><AiFillFacebook/></a>
  <a href="/" className=' text-2xl text-[#f04451] hover:text-black'><FaTelegram/></a>
  <a href="/" className=' text-3xl text-[#f04451] hover:text-black'><IoLogoDiscord/></a>

</div>
<p className=' font-bold'>All Right Reserved | Noodlefi.com</p>
      </div>
       


    </div>
  )
}

export default Footer
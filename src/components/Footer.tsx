import React from 'react'
import img1 from '../assets/img1.jpg'
const Footer = () => {
  return (
    <>
    <div className='relative'>
  <img className='blur-[2px]' src={img1} />
  
  <div className='absolute z-10 top-2 grid justify-center p-5'>
    <h1 className='text-2xl mt-5 text-black text-center bg-white/70 p-5 rounded-2xl'>
      Bringing colors to childhood, one craft at a time
    </h1>
  </div>
  
  <div className='absolute bottom-3 left-1/2 -translate-x-1/2'>
    <h1 className='bg-white/70 p-1 rounded-xl text-center'>
      Made with ❤️ by Raghav
    </h1>
  </div>
</div>

    </>
  )
}

export default Footer
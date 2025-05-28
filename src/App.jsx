import React from 'react'
import Header from './components/Header'
import Store from './components/Store'
import logo4 from './assets/logo4.png'
import img4 from './assets/img4.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  AOS.init();
  return (
    <>
    <Header/>
        <div className='relative'>
          <img className='blur-[2px] h-[90vh] md:h-[100vh] md:object-cover md:w-full' src={img4} alt=''/>
          <div data-aos='fade-in' data-aos-offset="200"data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" 
          className='absolute z-10 top-[22vh] left-7 text-white font-title text-slate-700 '>
             <h1 className='text-4xl w-[250px] bg-white/40 rounded-3xl backdrop-blur-[29px] p-4'>Unlock Your Child&apos;s Creativity This Summer!</h1>
             <h2><a href='#contact'><button className='rounded-2xl bg-white text-slate-700 p-4 mt-9'>Enroll Now</button></a></h2>
          </div>
        </div>
        <div
  data-aos="fade-left"
  data-aos-offset="200"
  data-aos-delay="50"
  data-aos-duration="1000"
  data-aos-easing="ease-in-out"
  className="min-h-screen flex justify-center items-center px-4"
>
  <div id='about' className="bg-[#F0A04B] text-white rounded-lg shadow-lg max-w-md text-center">
    <img className="h-[270px] w-[300px] mx-auto pt-1" alt="logo" src={logo4} />
    <h1 className="p-4">
      Hi! I'm Manisha, a passionate artist and craft enthusiast with over 15 years of experience working with kids. This summer, I&apos;m organizing a fun-filled art & craft camp to nurture your child&apos;s creativity in a safe and friendly environment!
    </h1>
  </div>
</div>
        <Store/>
        <Testimonials/>
        <Contact/>
        <Footer/>
        <div>
          <a href="https://wa.me/919193549939" target="_blank" rel="noopener noreferrer"
   className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition duration-300">
      <i className="text-green text-5xl fa-brands fa-whatsapp"></i>
</a>

        </div>

    </>
  )
}

export default App
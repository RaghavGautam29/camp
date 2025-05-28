import { useRef,useEffect } from 'react';
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img3 from '../assets/img3.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import 'aos/dist/aos.css';
import AOS from 'aos';
const Markets = () => {
  const scrollContainerRef = useRef(null);
  useEffect(() => {
       AOS.init();
     }, []);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  const images = [
    { src: img5, alt: 'paper', label: 'Paper Crafts' },
    { src: img6, alt: 'Agriculture', label: 'Origami' },
    { src: img3, alt: 'drawing', label: 'Drawing And Painting' },
    { src: img7, alt: 'diy', label: 'DIY Projects' },
    { src: img8, alt: 'lotmore', label:'And Much More'}
  ];

  return (
    <div id='store' data-aos="fade-up" data-aos-delay="50" data-aos-easing="ease-in-out" className="bg-gray-200 relative z-0 overflow-x-hidden scrollbar-hidden">
      <div className="text-center text-black text-4xl font-serif pt-8">What&apos;s in the Store?</div>
      <div className="relative flex items-center overflow-hidden mt-4 p-8 scrollbar-hide no-scrollbar">
        {/* Left Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-[17vh] lg:top-[25vh] bg-[#F0A04B] p-3 rounded-full shadow-lg z-10 scrollbar-hide no-scarollbar"
        >
          <i className="fa-solid text-white fa-arrow-left w-6"></i>
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-y-hidden p-12 pt-4 overflow-x-auto w-[400vh] no-scrollbar scrollbar-hide"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-[30vh] h-[30vh] pb-8 lg:pb-0 lg:w-[60vh] lg:h-[40vh] flex-shrink-0 scrollbar-hide no-scrollbar" 
            >
              <img
                className="w-full h-full object-cover rounded-3xl hover:opacity-80 hover:opacity-black"
                src={image.src}
                alt={image.alt}
              />
              {/* Hover Text */}
              <div className="font-thin inset-0 flex items-center justify-center pt-2 text-black rounded-3xl transition-opacity font-serif uppercase text-xl">
                {image.label}
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-[17vh] lg:top-[25vh] bg-[#F0A04B] text-black p-3 rounded-full shadow-lg z-10 scrollbar-hide no-scrollbar"
        >
          <i className="fa-solid text-white fa-arrow-right w-6"></i>
        </button>
      </div>
    </div>
  );
};

export default Markets;

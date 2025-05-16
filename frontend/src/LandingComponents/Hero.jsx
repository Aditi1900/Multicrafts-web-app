// import React, { useEffect } from 'react';
import TypingAnimation from "../Components/TypingAnimation";

import '../../src/index';
import img from '../Assets/img.png';
import Navbar from "../Shared/Navbar";



const Hero = () => {
  
    const imageStyles = {
      backgroundImage: `url(${img})`,
      backgroundSize: '600% 200%',
      backgroundRepeat: 'no-repeat',
    };
    <Navbar />
    return (
      
      <section className="bg-yellow h-screen">
       <TypingAnimation className='pt-24 text-5xl md:text-9xl font-bold font-amatic text-lightestyellow text-center ' text="Welcome to Multicrafts">Welcome to MultiCrafts</TypingAnimation>
       <p className='text-center text-xl md:text-2xl text-lightestyellow font-serif'>Where we foster creativity</p>
       
       <div className="flex w-full max-w-5xl max-h-5xl mx-auto justify-center py-5 items-center">
      {/* Slice 1 */}
      <div
        className="flex-1 h-64 md:h-72  border-4 border-yellow rounded-lg"
        style={{
          ...imageStyles,
          backgroundPosition: '20% ', // Adjust for the first slice
        }}
      ></div>
      {/* Slice 2 */}
      <div
        className="flex-1 h-64 md:h-72 border-4 border-yellow rounded-lg"
        style={{
          ...imageStyles,
          backgroundPosition: '40%', // Adjust for the second slice
        }}
      ></div>
      {/* Slice 3 */}
      <div
        className="flex-1 h-64 md:h-72 border-4 border-yellow rounded-lg "
        style={{
          ...imageStyles,
          backgroundPosition: '60% ', // Adjust for the third slice
        }}
      ></div>
      {/* Slice 4 */}
      <div
        className="flex-1 h-64 md:h-72 border-4 border-yellow rounded-lg"
        style={{
          ...imageStyles,
          backgroundPosition: '80% ', // Adjust for the fourth slice
        }}
      ></div>
    </div>
      
       {/* <div className="relative w-full max-w-4xl mx-auto my-12">
         <div className="relative w-full h-0 pt-[75%] overflow-hidden">
        
          <div
            className="rounded-lg absolute top-0 left-0 grayscale-100 w-[calc(30%-10px)] h-[calc(40%-10px)] "
            style={{
              ...imageStyles,
              backgroundPosition: '0 0',
            }}
          ></div>
        
          <div
            className="absolute rounded-lg top-0 right-0 w-[calc(50%-10px)] h-[calc(50%-10px)]"
            style={{
              ...imageStyles,
              backgroundPosition: '100% 0',
            }}
          ></div>
          
          <div
            className="absolute rounded-lg bottom-0 left-0 w-[calc(50%-10px)] h-[calc(50%-10px)] "
            style={{
              ...imageStyles,
              backgroundPosition: '0 100%',
            }}
          ></div>
      
          <div
            className="absolute rounded-lg bottom-0 right-0 w-[calc(50%-10px)] h-[calc(50%-10px)] "
            style={{
              ...imageStyles,
              backgroundPosition: '100% 100%',
            }}
          ></div>
        </div>
      </div> */}
      </section>
    );
  };


export default Hero;

       

 import React, { useEffect, useState, useRef } from 'react';
import '../../src/index';
import TypingAnimation from "../Components/TypingAnimation";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Page2 = () => {
  const { ref, inView } = useInView();
 

// const { ref, inView } = useInView({
//   threshold: 0.1, 
// });

// const animationVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// };

    return(

        <section className="bg-[#fef9eb] h-full"  >
          
            <div className="absolute z-20 text-center w-full">
            
                <div ref={ref}>
    <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        // variants={animationVariants}
        transition={{ duration: 0.5 }}
        // isInView={inView}
      >
            <TypingAnimation
            isInView={inView}
              className="font-bold w-full text-center text-4xl md:text-6xl md:py-10  pt-16 pb-5  font-amatic"
              text="Our Goal"
            >
            </TypingAnimation>
          
        </motion.div>
        </div>
            {/* <TypingAnimation className="font-bold w-full justify-center text-center text-4xl md:text-6xl py-10 font-amatic" text="Our Goal">Our Goal</TypingAnimation> */}
            
            <p className="text-sm md:text-base z-20 w-full md:pt-5 text-center px-3 md:px-64  font-sans">
            <p>Ex reprehenderit repudiandae alias at natus voluptas.Architecto non doloremque voluptates error.Architecto non dicta doloremque voluptates error.</p>
            </p>
            

            <p className="text-sm md:text-base z-20 md:pt-10 pt-5 w-full px-3 md:px-64 font-sans">
            <p>Ex reprehenderit repudiandae alias at natus voluptas.Architecto non dicta doloremque voluptates error.Architecto non dicta doloremque voluptates error.</p>
            </p>
            

            <p className="text-sm md:text-base z-20 md:pt-10 pt-5 px-3 w-full md:px-64 font-sans">
            <p>Ex reprehenderit repudiandae alias at natus voluptas.Architecto non dicta doloremque voluptates error.Architecto non dicta doloremque voluptates error.</p>
            </p>
            </div>

            <div className="h-screen">
            <p className="relative font-bold  pt-5 text-[7rem] md:text-[11rem]  opacity-60  leading-none justify-start text-yellow font-anton ">Envision.</p>
            <p className=" relative text-[7rem] md:text-[11rem]  font-bold  opacity-60 leading-none justify-end items-end text-end text-yellow font-anton ">Create.</p>
            <p className=" relative text-[7rem] md:text-[11rem]  font-bold  opacity-60 leading-none justify-start text-yellow font-anton ">Transform.</p>
           </div>
            
        </section>
    );
};
export default Page2;
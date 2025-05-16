import React from 'react';
import aboutImg1 from "../Assets/AboutImages/aboutImg1.png";
import aboutImg2 from "../Assets/AboutImages/aboutImg2.png";
import aboutUsBg from "../Assets/AboutImages/aboutUsBg.jpg";

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden">
    <div  
    className="fixed inset-0 bg-fixed" 
    style={{ 
    backgroundImage: `url(${aboutUsBg})`,
    filter: 'grayscale(70%) opacity(50%) sepia(30%)',
    zIndex: -1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    }}
    />
        <div className='flex flex-col md:flex-row relative z-10 items-center'>
        <div className='md:w-[60%] w-full items-center'>
            <h1 className=" z-10 font-serif font-semibold md:text-6xl text-3xl px-8 md:px-20 pt-24 pb-5 md:pt-28 md:pb-12">Who we are and what we do.</h1>
            <div className="font-serif px-8 space-y-4 text-sm md:pl-20 md:pr-28 md:text-lg">
                <p>Sapiente possimus voluptate omnis aliquid error exercitationem tempora doloremque fugiat. 
                    Ipsum tempore nemo expedita vero. 
                    Aperiam commodi maiores atque quasi.
                </p>
                <p>Sapiente possimus voluptate omnis aliquid error exercitationem tempora doloremque fugiat. 
                    Ipsum tempore nemo expedita vero. 
                    Aperiam commodi maiores atque quasi.
                </p>
            </div>
        </div>
        <div className='md:p-28 p-10 items-center md:w-[40%]'>
            {/* <h1 className="font-anton text-yellow text-4xl">Our Founder.</h1> */}
            <img src={aboutImg2} alt="AboutPageImage2" className='rounded-lg shadow-lg w-[260px] h-[310px]'/>
        </div>
        </div> 
        <div className="flex flex-col items-center md:items-start md:flex-row relative z-10">
            
            <div className='md:p-20 p-8 md:w-[60%]'>
            <h1 className="font-serif z-100 font-semibold md:text-6xl  text-3xl  py-5 md:py-14">Our Founder.</h1>
                <div className="font-serif  md:pr-28 text-sm md:text-lg">
                    <p>Sapiente possimus voluptate omnis aliquid error exercitationem tempora doloremque fugiat. 
                        Ipsum tempore nemo expedita vero. 
                        Aperiam commodi maiores atque quasi.
                    </p>
                </div>
            </div>
            <div className="  md:py-24 p-10 items-center md:w-[40%]">
            <img src={aboutImg1} alt="AboutPageImage1" className='rounded-lg shadow-lg w-[260px] h-[310px]'/>
            </div>
        </div>
    </section>
    
  )
}

export default About;
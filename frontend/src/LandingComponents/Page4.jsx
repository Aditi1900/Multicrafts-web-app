import React from 'react';
import '../../src/index';
import oldPaperTexture from '../Assets/oldPaperTexture.png';
import diwalipic from '../Assets/diwalipic.png';
import Button from "../Shared/Button";

const Page4 = () => {
    const handleClick = {
        alert: 'Button clicked!',
      };
    return(
        <section className="bg-lightestyellow h-full flex-col md:flex-row flex">
            {/* <div className=" md:w-[65%]">
            <img src={diwalipic} alt="" className="absolute z-20 opacity-90 pl-36 p-28 pt-24 w-[690px] h-[590px]" />
            <img src={oldPaperTexture} alt="" className="relative pl-12 w-[700px] h-[550px]" />
            </div> */}

            <div className="w-full items-center md:w-[65%]  ">
            <img src={oldPaperTexture} alt="" className=" absolute items-center md:pl-12 w-[400px] p-4 h-[350px] md:w-[700px] md:h-[550px]"/>
                <div className="md:w-[700px] md:h-[550px] items-center py-16 px-20 md:py-0 md:px-0">
                   <img src={diwalipic} alt="" className="relative z-20 opacity-90 md:pl-36 md:p-28 md:pt-24 w-[350px] h-[220px] md:w-[690px] md:h-[590px]" />
                </div>
            </div>
            <div className='  md:w-[35%]'> 
             <h1 className="font-amatic text-4xl pr-20 font-bold text-end py-5 md:py-20 md:text-6xl">Diwali Special</h1>
             {/* <div className="pr-20 pl-96 py-10 "> */}
             {/* <p className="pl-80  font-sans md:py-10 leading-7 md:leading-extra-loose md:pl-96"> */}
             <p className=" pb-7 px-10 font-sans ">
                A repellat mollitia alias aut. 
                Officiis odio assumenda quaerat illo. 
                Quam placeat aperiam sapiente tempora explicabo dolorem deleniti provident.
            </p>
            <div className='pl-20 md:pl-10 pb-10'>
            <Button label="Register Now" onClick={handleClick} />
            </div>
            {/* </div> */}
            </div>
        </section>
       
    );
};
export default Page4;
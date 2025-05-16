import React from 'react';
import '../../src/index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "../Assets/CarouselImages/img1.jpg";
import img2 from "../Assets/CarouselImages/img2.jpg";
import img3 from "../Assets/CarouselImages/img3.jpg";
import img4 from "../Assets/CarouselImages/img4.jpg";
import Button from "../Shared/Button";

const carouselItems = [
  { id: 1, src: img1, alt: 'Slide 1' },
  { id: 2, src:  img2, alt: 'Slide 2' },
  { id: 3, src:  img3, alt: 'Slide 3' },
  { id: 4, src: img4, alt: 'Slide 4' },
];

const Page3 = () => {
  const handleClick = {
    alert: 'Button clicked!',
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // arrows: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    appendDots: dots => (
      <div className="absolute items-center transform -translate-x-1/2">
        <div className="items-center">
        <ul className="flex md:pl-80 pl-56 space-x-2">
          {dots.map((dot, index) => (
            <li key={index}>
              {dot.props.children}
            </li>
          ))}
        </ul>
        </div>
      </div>
    ),
    // prevArrow: <button style={{ color: 'white'}} className="absolute top-1/2" >{"<"}</button>,
    // nextArrow: <button style={{ color: 'white' }} className="absolute top-1/2 ">{">"}</button>,
  };

  return (
    <section className="bg-yellow h-full">
        <h3 className="font-amatic font-bold py-10 md:pl-20 pl-12 text-4xl  md:text-6xl">Ganapati Season</h3>
    <div className=" w-full  mx-auto px-4 ">
      <Slider {...settings}>
        {carouselItems.map(item => (
          <div key={item.id} className="relative  md:px-20 overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className=" w-[350px] h-[150px] md:w-[650px] md:h-[350px]  rounded-lg justify-center transform transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </Slider>
    </div>
    <div className="font-sans md:text-base text-sm md:pl-20 pl-12 py-10">
    <p>Officiis occaecati earum voluptatibus maxime eligendi.</p>
    <p>iste nobis ea repellat quasi ea autem.</p>
    </div>
    <div className="px-10 md:pl-20 pb-10">
    <Button label="View Details" onClick={handleClick} />
    </div>
    </section>
  );
};

export default Page3;

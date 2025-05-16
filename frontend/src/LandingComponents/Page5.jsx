import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Button from "../Shared/Button";

// Import required Swiper modules
import { EffectCards } from 'swiper/modules';

const reviews = [
    { name: 'John Doe', text: 'Great product! Exceeded my expectations. Quod qui tempora ducimus minus accusamus occaecati. Officiis explicabo non temporibus nulla occaecati commodi omnis eaque. Provident recusandae tenetur.' },
    { name: 'Jane Smith', text: 'Very satisfied with my purchase. Inventore autem ab odio fugiat. Corporis sunt ipsum exercitationem quasi recusandae quas dolores magnam sapiente. Dicta libero veritatis quibusdam praesentium.' },
    { name: 'Alice Johnson', text: 'Exceptional quality and service! Dolorum cumque molestiae officia. Dolorum laboriosam eveniet consequuntur ullam. Doloribus inventore sed sunt.' },
    { name: 'Bob Brown', text: 'Worth every penny. Highly recommend! Iusto hic vero eos nihil exercitationem. Beatae ea reprehenderit voluptate maiores. Repellat esse a ex sapiente a voluptate ab ratione repudiandae.' },
    { name: 'Charlie Davis', text: 'Excellent product and customer support. Officia repudiandae eligendi dicta eveniet adipisci quo. Officia mollitia perspiciatis distinctio quaerat impedit eius. Neque magni veniam.' },
    { name: 'Emily Wilson', text: 'I am thrilled with this product! Ab enim veniam rem officia minus nostrum numquam error distinctio. Aliquam similique quae. Excepturi facere provident distinctio reiciendis.' },
    { name: 'Michael Lee', text: 'A fantastic addition to my collection. Error accusamus placeat facilis culpa recusandae. Tenetur pariatur nisi recusandae suscipit ea commodi. Illum cum possimus cum et amet facere.' },
    { name: 'Sarah Brown', text: 'Great value for the money. Will buy again. Debitis reprehenderit quasi labore suscipit corrupti fugiat cumque. Non quae qui. At unde deserunt at reprehenderit maiores.' },
    { name: 'David Clark', text: 'Outstanding quality and craftsmanship. Placeat at iste architecto rem reiciendis. Ut fuga mollitia laboriosam rerum quidem maiores cupiditate a voluptatem. Doloremque quis blanditiis pariatur at temporibus consequuntur voluptatum dignissimos quas.' },
    { name: 'Laura Adams', text: 'Very happy with my purchase. Thank you! Saepe quae quam consequuntur quos quam aliquid animi. Ratione nostrum consectetur magni aspernatur magnam. Cupiditate blanditiis iste eius voluptatibus placeat occaecati.' }
  ];

// const colorClasses = [
//   'bg-red-700',
//   'bg-blue-600',
//   'bg-green-500',
//   'bg-orange-600',
//   'bg-yellow-500',
//   'bg-pink-700',
//   'bg-green-800',
//   'bg-blue-900',
//   'bg-purple-600',
//   'bg-teal-600'
// ];

const App = () => {
  const handleClick = {
    alert: 'Button clicked!',
  };
  return (
    <div className="h-full bg-yellow flex flex-col md:flex-row ">
      <div>
        <h1 className="md:w-[70%] text-center font-amatic text-4xl md:pl-20 font-bold items-center p-12 justify-center md:text-start py-5 md:pt-40 md:pb-5 md:text-6xl">Take a look at what our fellow customers want to say</h1>
        <p className="md:pl-20 ">Want to send your feedback too? Click below</p>
        <div className=" flex-1 text-center md:text-start md:pl-20  md:py-8">
          <Button label="Send Feedback" onClick={handleClick} />
        </div>
     </div>
     <div className=' md:w-[50%]  md:py-20 md:px-40 pb-10'>
     
     <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-48 h-72 md:w-72 md:h-96"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className={`bg-lightestyellow md:text-base text-sm text-red-500 flex items-center justify-center rounded-xl py-10 md:py-16 p-4`}
          >
            <div className="text-center">
              <p className="font-montserrat">{review.text}</p>
              <h3 className=" md:text-xl font-anton py-5 mb-2">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
    </div>
  );
};

export default App;

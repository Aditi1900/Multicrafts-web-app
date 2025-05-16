import React from 'react';
import cake from "../Assets/productImages/cake.png";
import rice from "../Assets/productImages/rice.png";
import dhokla from "../Assets/productImages/dhokla.png";
import kachori from "../Assets/productImages/kachori.png";

const images = [
    cake,
    rice,
    dhokla,
    kachori,
  ];

const Products = () => {

    
  return (
    <section className="bg-lightestyellow h-full">
      <h1 className="text-start text-4xl md:text-6xl font-bold font-amatic pt-20 px-20 md:pt-24">Explore our custom made products with eco friendly materials.</h1>
    <div className="md:p-20 p-8 grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {images.map((src, index) => (
        <div key={index} className="overflow-hidden shadow-lg">
          <img
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover"
          />
        </div>
      ))}
    </div>
    </section>
  )
}

export default Products;
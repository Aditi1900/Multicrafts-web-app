
// import React, { useEffect, useState } from 'react';
// import MulticraftsLogo from "../Assets/MulticraftsLogo.png";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       if (scrollTop > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//   return (
//   <div className="p-8">
//       {/* <div className="bg-yellow rounded-lg shadow-lg py-2 px-5"> */}
//       <div
//       className={`fixed z-50 top-0 left-0 w-full bg-[#fae19d] shadow-lg py-2 px-5 rounded-lg transition-all duration-500 ${
//         isScrolled ? 'bg-opacity-50' : ''
//       }`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <img src={MulticraftsLogo} alt="Logo" className="w-12 h-12" />
//           <div className="flex font-semibold font-indie space-x-4">
//             <Link to="/" className="text-yellow px-2 py-1 bg-white rounded-lg">Home</Link>
//             <Link to="/about" className="text-yellow px-2 py-1 bg-white rounded-lg">About</Link>
//             <Link to="/workshops" className="text-yellow px-2 py-1 bg-white rounded-lg">Workshops</Link>
//             <Link to="/products" className="text-yellow px-2 py-1 bg-white rounded-lg">Products</Link> 
//             <Link to="/contact" className="text-yellow px-2 py-1 bg-white rounded-lg">Contact</Link>
//           </div>
//         </div>
//     </div>
//   </div>
//   );
// };

// export default Navbar;


// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800  text-white">
//       <div className="container mx-auto flex items-center justify-between p-4">
//         <div className="text-2xl font-bold">
//           <a href="#">MySite</a>
//         </div>
//         <div className="lg:hidden flex items-center">
//           <button onClick={toggleMenu} className="text-white">
//             {isOpen ? (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//         <ul
//           className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static top-16 left-0 w-full lg:w-auto lg:bg-transparent bg-gray-800 lg:p-0 p-4 transition-transform duration-300 ease-in-out ${
//             isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
//           }`}
//         >
//           <li className="py-2 lg:py-0">
//             <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
//               Home
//             </a>
//           </li>
//           <li className="py-2 lg:py-0">
//             <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
//               About
//             </a>
//           </li>
//           <li className="py-2 lg:py-0">
//             <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
//               Services
//             </a>
//           </li>
//           <li className="py-2 lg:py-0">
//             <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import MulticraftsLogo from "../Assets/MulticraftsLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 top-0 md:items-center left-0 w-full p-2 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-lightyellow bg-opacity-90' : 'bg-lightyellow bg-opacity-100'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
        <img src={MulticraftsLogo} alt="Logo" className="w-12 h-12" />
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`lg:flex md:items-center md:justify-center lg:space-x-6 absolute lg:static top-16 opacity-90 font-indie font-bold left-0 h-screen md:h-12 w-[70%] lg:w-auto lg:bg-transparent bg-lightyellow lg:p-0 p-4 transition-transform duration-300 ease-in-out ${
            isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}
        >
          <li className="py-2 rounded hover:bg-lightestyellow lg:py-0">
            <a href="/home" className="px-3 py-2">
              Home
            </a>
          </li>
          <li className="py-2 rounded hover:bg-lightestyellow lg:py-0">
            <a href="/about" className=" px-3 py-2 ">
              About
            </a>
          </li>
          <li className="py-2 rounded hover:bg-lightestyellow lg:py-0">
            <a href="/workshops" className=" px-3 py-2 ">
              Workshops
            </a>
          </li>
          <li className="py-2 rounded hover:bg-lightestyellow lg:py-0">
            <a href="/products" className=" px-3 py-2 ">
              Products
            </a>
          </li>

          <li className="py-2 rounded hover:bg-lightestyellow lg:py-0">
            <a href="/contact" className=" px-3 py-2 ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;







import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoNonTransparent from "../Assets/LogoNonTransparent.jpeg";
import { faFacebookF, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="">
    <footer className=" text-lightestyellow bg-gradient-to-br from-red-500 to-yellow bottom-0 w-full shadow-lg py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex-1">
            <div className="flex flex-col md:items-center">
              <div className="pr-4  border-b md:border-b-0">
              <img src={LogoNonTransparent} alt="Logo" className="w-12 h-12" />
                {/* <h3 className="text-lg font-semibold">Section 1</h3> */}
                <p className="mt-2 font-montserrat py-2">© 2010 MultiCrafts India</p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:border-l border-white">
            <div className="flex flex-col md:items-center">
              <div className="pl-4 pt-3 md:pt-0 pr-4 border-b md:border-b-0 border-white">
                <a href="mailto:example@example.com" className="text-xl font-indie underline">multicraftsindia@gmail.com</a>
                
                <h3 className="text-lg mt-2 font-anton">Reach Us</h3>
                <p className=" font-montserrat">Tulips apt.</p>
                <p className=" font-montserrat">Mukund nagar</p>
                <p className="mb-3 md:mb-0 font-montserrat">Pune, 411088</p>
              </div>
            </div>
          </div>
          <div className="flex-1 md:border-l border-white">
            <div className="flex flex-col md:items-center">
              <div className="pl-4  pt-3 md:pt-0 ">
                <h3 className="mb-1 text-lg font-anton">Follow Us</h3>
                  
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF}  className="px-3" size="2x" />
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="px-3" size="2x" />
                  </a>
                  <a href="https://www.telegram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} className="px-3" size="2x" />
                  </a>
                <h3 className="mt-1 text-lg font-anton">Contact Us</h3>
                <p className=" font-montserrat">+91 734685 6573</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;

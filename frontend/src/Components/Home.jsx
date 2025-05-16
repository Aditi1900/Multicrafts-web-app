import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import Hero from '../LandingComponents/Hero';
import Page2 from '../LandingComponents/Page2';
import Page3 from '../LandingComponents/Page3';
import Page4 from '../LandingComponents/Page4';
import Page5 from '../LandingComponents/Page5';


const Home = () => {
  return (
    <div id="home">
            {/* <Navbar /> */}
            <Hero />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            {/* <Footer /> */}
        </div>
  );
};

export default Home;

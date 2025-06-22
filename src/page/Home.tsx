import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import Header from "../component/Header";
import WhatWeDo from "../component/WhatWeDo";
import Project from "../component/Project";
import Faq from "../component/Faq";
import OurClient from "../component/OurClient";
import Testimonial from "../component/Testimonial";
import AboutUs from "../component/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <WhatWeDo />
      <OurClient />
      <AboutUs />
      <Project />
      <Faq />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

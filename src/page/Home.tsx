import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import Header from "../component/Header";
import WhatWeDo from "../component/WhatWeDo";
import Project from "../component/Project";
import OurClient from "../component/OurClient";
import Testimonial from "../component/Testimonial";
import AboutUs from "../component/AboutUs";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <WhatWeDo />
      <OurClient />
      <Project />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;

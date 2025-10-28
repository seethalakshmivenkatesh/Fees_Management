import React from "react";
import FirstSection from "./components/FirstSection";
import About from "./components/About";
import Service from "./components/Service";
import Carousel from "./components/secondsection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/contact";
import PricingSection from "./components/Pricing";
function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Service />
      </div>
      <Carousel />
      <div id="contact">
        <Contact />
      </div>
      <PricingSection />
      <Footer />
    </div>
  );
}
export default Home;

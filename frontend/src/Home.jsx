import React from "react";
import FirstSection from "./components/FirstSection";
import About from "./components/About";
import Service from "./components/Service";
import Carousel from "./components/secondsection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PricingSection from "./components/Pricing";
function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <About />
      <Service />
      <Carousel />
      <PricingSection />
      <Footer />
    </div>
  );
}
export default Home;

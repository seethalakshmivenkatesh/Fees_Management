import React from "react";
import FirstSection from "./components/FirstSection";
import About from "./components/About";
import Service from "./components/Service";
import Carousel from "./components/secondsection";
import Header from "./components/Header";
import Footer from "./components/Footer";
function Home() {
  return (
    <div>
      <Header />
      <FirstSection />
      <About />
      <Service />
      <Carousel />
      <Footer />
    </div>
  );
}
export default Home;

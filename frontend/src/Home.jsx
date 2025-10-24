import React from "react";
import FirstSection from "./components/FirstSection";
import About from "./components/About";
import Service from "./components/Service";
function Home() {
  return (
    <div>
      <>
        <FirstSection />
        <About />
        <Service />
      </>
    </div>
  );
}

export default Home;

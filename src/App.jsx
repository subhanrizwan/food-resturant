import React from "react";
import Header from "./components/header";
import HeroSection from "./sections/heroSection";
import HerSection2 from "./sections/herSection2";
import CustomCursor from "./components/cursor";
import Section3 from "./sections/section3";
function App() {
  return (
    <>
      {/* cursor */}
      <CustomCursor />

      {/* sections */}
      <Header />
      <HeroSection />
      <HerSection2 />
      <Section3 />
    </>
  );
}

export default App;

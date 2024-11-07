import React from "react";
// import Power from "../assets/img/food1.webp";
import Power from "../assets/img/food2.jpg";
import Getmorebtn from "../components/getmorebtn";
import ViewPlanBtn from "../components/viewPlan";

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div
          className="hero-section flex flex-col bg-no-repeat bg-cover items-center text-center md:h-[1000px] h-[800px] md:py-56  "
          style={{
            width: "100vw",
            // backgroundImage: `url(${Power})`,
          }}
        >
          <div className="text-wrap md:w-1/2 w-3/4">
            <div class="homepage-subheading text-xl flex justify-center text-white rounded ">
              <h6 className="welcome md:w-[15%] md:p-1 rounded-2xl text-getmoreBtnColor ">
                Healthy Bites
              </h6>
            </div>
            <h1 className="md:text-7xl text-5xl font-bold text-white md:p-8 pt-32 pb-10 ">
              Healthy Food{" "}
              <strong className="text-getmoreBtnColor">Resturant</strong>
            </h1>
            <p className="font-medium md:text-1xl text-white md:p-8 md:pb-20 pb-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime
              nesciunt nostrum alias laborum velit, eum illo fugiat molestiae
              nam sequi temporibus pariatur reiciendis quo esse iste dolorum
              nemo non!
            </p>
          </div>
          <div className="button-parent md:space-x-6 space-x-3 space-y-4">
            <Getmorebtn />
            <ViewPlanBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
// style="background-image: url(&quot;http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_06.jpg&quot;); transition: transform 20000ms ease-out, opacity 1000ms; opacity: 1; transform: scale(1.2, 1.2); z-index: 2;"

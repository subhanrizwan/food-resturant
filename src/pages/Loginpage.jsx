import React from "react";
import Login from "../Context/login";
import Profile from "../Context/profile";

function Loginpage() {
  return (
    <>
      <div className="flex mx-auto justify-center items-center ">
        <Login />

        <Profile />
      </div>
    </>
  );
}

export default Loginpage;

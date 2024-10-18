import React from "react";
import { BiSolidMessageDots } from "react-icons/bi";
import { BiSolidHeart } from "react-icons/bi";

const TopperMenu = () => {
  return (
    <div className="h-14 bg-[#242324] hidden xl:flex justify-between px-10 text-xl items-center    font-bold uppercase ">
      <div className="flex gap-5 items-center justify-center">
        <BiSolidMessageDots
          style={{ width: 40, height: 40, color: "#9FC7B1" }}
        />

        <p className="text-[#9FC7B1]">Do you need an help?</p>
      </div>
      <div
        className="absolute left-2/4 right-2/4  

      flex items-center justify-center text-[#CFCFBD] "
      >
        <p>VapeTopper.com</p>
      </div>
      <div
        className="flex gap-10 text-[#CFCFBD] 
      

      "
      >
        <p>+450334025</p>
        <p>email: vapetopper.com</p>
      </div>
    </div>
  );
};

export default TopperMenu;

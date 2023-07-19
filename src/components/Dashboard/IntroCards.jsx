import React from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import LinearChart from "./LinearChart";
import { dummyData } from "../../utils/dummyData";

const IntroCards = () => {
  return (
    <div className="w-full min-h-[120px] gap-6 py-[20px] flex flex-col md:flex-row items-center border-[#EDF2F7] border-[1px] rounded-[16px]">
      <div className="w-full md:w-1/3 flex flex-row gap-3 justify-around items-center md:border-r-[#E8E9EB] md:border-r-[2px] border-b-[#E8E9EB] border-b-[2px] md:border-b-[0px]">
        <div className="flex flex-col">
          <p className="text-[15px] text-[#8A9099]">My Package</p>
          <div className="flex flex-row justify-between items-center gap-2">
            <p className="text-[30px] text-[#3F434A] font-[500]">$8.500</p>
            <div className="flex flex-row items-center">
              <BsArrowUp className="text-[#49C96D] text-[15px]" />
              <p className="text-[#49C96D] text-[15px]">50.8%</p>
            </div>
          </div>
        </div>
        <div>
          <LinearChart
            data={dummyData}
            tooltipTitle="Title"
            strokeColor="#304FFD"
          />
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-row gap-3 items-center justify-around md:border-r-[#E8E9EB] md:border-r-[2px] border-b-[#E8E9EB] border-b-[2px] md:border-b-[0px]">
        <div className="flex flex-col">
          <p className="text-[15px] text-[#8A9099]">Level Income</p>
          <div className="flex flex-row justify-between items-center gap-2">
            <p className="text-[30px] text-[#3F434A] font-[500]">$3.500K</p>
            <div className="flex flex-row items-center">
              <BsArrowDown className="text-[#FD7972] text-[15px]" />
              <p className="text-[#FD7972] text-[15px]">50.8%</p>
            </div>
          </div>
        </div>
        <div>
          <LinearChart
            data={dummyData}
            tooltipTitle="Title"
            strokeColor="#FF965D"
          />
        </div>
      </div>
      <div className="w-full md:w-1/3 flex flex-row gap-3 items-center justify-around">
        <div className="flex flex-col">
          <p className="text-[15px] text-[#8A9099]">AutoPool Income</p>
          <div className="flex flex-row justify-between items-center gap-2">
            <p className="text-[30px] text-[#3F434A] font-[500]">$5.100K</p>
            <div className="flex flex-row items-center">
              <BsArrowUp className="text-[#49C96D] text-[15px]" />
              <p className="text-[#49C96D] text-[15px]">50.8%</p>
            </div>
          </div>
        </div>
        <div>
          <LinearChart
            data={dummyData}
            tooltipTitle="Title"
            strokeColor="#304FFD"
          />
        </div>
      </div>
    </div>
  );
};

export default IntroCards;

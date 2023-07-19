import React, { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { BsChevronDown } from "react-icons/bs";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import StatsGraph from "./StatsGraph";
// import { DateRange } from "react-date-range";

const Statistics = () => {
  // const [range, setRange] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: null,
  //     key: "selection",
  //   },
  // ]);
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="w-full flex flex-row items-center ">
        <div className="w-[65%] border-[#EDF2F7] border-[1px] rounded-[16px] p-[24px]">
          <div className="flex flex-row items-center justify-between">
            <p className="text-[20px] text-[#3F434A] font-bold">Statistics</p>
            <div
              onClick={() => setShow(!show)}
              className="relative w-[190px] border-[#E8E9EB] border-[1px] rounded-[14px] flex flex-row justify-between items-center px-[20px] py-[10px]"
            >
              <div className="flex flex-row items-center gap-2">
                <RxCalendar />
                <p className="text-[14px] text-[#3F434A]">25 Aug - 15 Sep</p>
              </div>
              <BsChevronDown className="text-[10px]" />
              {/* {show ? (
                <div className="absolute top-[45px] right-0">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setRange([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={range}
                  />
                </div>
              ) : (
                ""
              )} */}
            </div>
          </div>
          <div className="flex flex-row items-center py-2 justify-start gap-6">
            <div className="flex flex-row items-center gap-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[14px] bg-[#EAEDFF]">
                <BsArrowUp className="text-[#304FFD] text-[16px]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[18px] text-[#3F434A]">20.500</p>
                <p className="text-[#8A9099] text-[14px] relative top-[-4px]">
                  Income
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4">
              <div className="flex justify-center items-center w-[40px] h-[40px] rounded-[14px] bg-[#FFF4EF]">
                <BsArrowDown className="text-[#FF965D] text-[16px]" />
              </div>
              <div className="flex flex-col">
                <p className="text-[18px] text-[#3F434A]">20.500</p>
                <p className="text-[#8A9099] text-[14px] relative top-[-4px]">
                  Expense
                </p>
              </div>
            </div>
          </div>
          <div>
            <StatsGraph />
          </div>
        </div>
        <div className="w-[35%] border-[#EDF2F7] border-[1px] rounded-[16px]">
              <div className="p-[24px]">
                
              </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Statistics;

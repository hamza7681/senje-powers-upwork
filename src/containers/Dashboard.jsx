import React from "react";
import IntroCards from "../components/Dashboard/IntroCards";
import Statistics from "../components/Dashboard/Statistics";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="font-[700] text-[38px] text-[#11142D]">Welcome back👋</h1>
      <IntroCards />
      <Statistics />
    </div>
  );
};

export default Dashboard;

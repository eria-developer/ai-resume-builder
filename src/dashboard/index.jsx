import { UserButton } from "@clerk/clerk-react";
import React from "react";
import AddResume from "./components/AddResume";

const Dashboard = () => {
  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-2xl">My Resume</h2>
      <p>Start creating AI based resume for your new job</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <AddResume />
      </div>
    </div>
  );
};

export default Dashboard;

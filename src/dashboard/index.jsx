import { UserButton, useUser } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import AddResume from "./components/AddResume";
import GlobalApi from "./../../service/GlobalApi";
import ResumeCardItem from "./components/ResumeCardItem";

const Dashboard = () => {
  const [resumeList, setResumeList] = useState([]);
  const user = useUser();

  // getting the resume list only when user information is available
  useEffect(() => {
    if (user && user.isSignedIn) {
      getResumesList();
    }
  }, [user]);

  // fetching all user resumes
  const getResumesList = () => {
    const email = user.user?.primaryEmailAddress?.emailAddress;
    if (email) {
      GlobalApi.getUserResumes(email)
        .then((response) => {
          console.log(response.data.data);
          setResumeList(response.data.data);
          console.log(resumeList);
        })
        .catch((error) => {
          console.error("Error fetching resumes:", error);
        });
    } else {
      console.error("User email is not available.");
    }
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-2xl">My Resume</h2>
      <p>Start creating AI-based resumes for your new job</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        <AddResume />
        {resumeList &&
          resumeList.map((resume, index) => (
            <ResumeCardItem resume={resume} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;

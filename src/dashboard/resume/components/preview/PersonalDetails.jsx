
import React, { useContext } from "react";

const PersonalDetails = ({ resumeInfo }) => {
  return (
    <div>
      <h2
        className="text-center text-2xl font-bold"
        style={{ color: resumeInfo?.themeColor }}
      >
        {" "}
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2 className="text-center text-sm font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center text-xs font-normal"
        style={{ color: resumeInfo?.themeColor }}
      >
        {resumeInfo?.address}
      </h2>

      <div className="flex justify-between">
        <h2
          className="text-normal text-sm"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="text-normal text-xs"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.email}
        </h2>
      </div>

      <hr
        className="border-[1.5px] my-3"
        style={{ borderColor: resumeInfo?.themeColor }}
      />
    </div>
  );
};

export default PersonalDetails;

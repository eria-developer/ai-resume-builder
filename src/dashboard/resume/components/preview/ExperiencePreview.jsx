import React from "react";

const ExperiencePreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      {resumeInfo?.experience.map((experience, index) => (
        <div key={index} className="mt-6">
          <div
            className="text-sm font-bold"
            style={{ color: resumeInfo?.themeColor }}
          >
            {experience.title}
          </div>
          <div className="flex justify-between text-xs">
            <h2>
              {experience?.companyName}, {experience?.city}
            </h2>
            <span>
              {experience?.startDate} -{" "}
              {experience.currentlyWorking ? "Present" : experience.endDate}
            </span>
          </div>
          <p className="text-sm my-2">{experience?.workSummary}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperiencePreview;

import React from "react";

const EducationPreview = ({ resumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        className="font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Education Background
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />

      <div>
        {resumeInfo?.education.map((education, index) => (
          <div key={index} className="my-5">
            <h2
              className="font-bold text-sm"
              style={{ color: resumeInfo?.themeColor }}
            >
              {education?.universityName}
            </h2>
            <h2 className="text-xs flex justify-between">
              {education?.degree} in {education?.major}
              <span>
                {education?.startDate} - {education?.endDate}
              </span>
            </h2>
            <h2 className="text-xs my-2">{education?.description}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationPreview;

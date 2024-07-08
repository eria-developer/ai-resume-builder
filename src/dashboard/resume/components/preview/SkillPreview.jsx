import React from "react";

const SkillPreview = ({ resumeInfo }) => {
  return (
    <div className="mt-6">
      <h2
        className="font-bold text-sm mb-2"
        style={{ color: resumeInfo?.themeColor }}
      >
        Skills
      </h2>
      <hr style={{ borderColor: resumeInfo?.themeColor }} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between">
            <h2>{skill?.name}</h2>
            <div className="h-2 w-[120px] bg-gray-200">
                <div className="h-2" style={{backgroundColor: resumeInfo?.themeColor, width: skill?.rating+"%"}}>

                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillPreview;

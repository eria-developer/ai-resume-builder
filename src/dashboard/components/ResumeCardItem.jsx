import { Notebook } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ResumeCardItem = ({ resume }) => {
  return (
    <>
      <Link to={`resume/${resume.id}/edit`}>
        <div className="mt-10 p-10 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-lg hover:scale-105 transition-all hover:shadow-md shadow-primary">
          <Notebook />
        </div>
        <h2 className="text-center my-1">{resume.attributes.title}</h2>
      </Link>
      {console.log("My document id", resume)}
    </>
  );
};

export default ResumeCardItem;

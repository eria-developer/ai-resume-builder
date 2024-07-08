import React, { useState } from "react";
import PersonalDetailsForm from "./forms/PersonalDetailsForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";

const FormSection = () => {
  const [activeFormIndex, setActiveFormIndex] = useState(1);
  const [enableNext, setEnableNext] = useState(false)
  return (
    <div>
      <div className="flex justify-between items-center">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
        <div className="flex gap-2 items-center">
          {activeFormIndex > 1 ? (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex - 1)}
            >
              <ArrowLeft />
            </Button>
          ) : (
            ""
          )}
          {activeFormIndex <= 5 && (
            <Button
              size="sm"
              onClick={() => setActiveFormIndex(activeFormIndex + 1)}
              disabled={!enableNext}
            >
              Next <ArrowRight />
            </Button>
          )}
        </div>
      </div>
      {/* personal details  */}
      {activeFormIndex === 1 && <PersonalDetailsForm enableNext={(value)=>setEnableNext(value)} />}
      {/* summary  */}
      {/* experience  */}
      {/* education  */}
      {/* skills  */}
    </div>
  );
};

export default FormSection;

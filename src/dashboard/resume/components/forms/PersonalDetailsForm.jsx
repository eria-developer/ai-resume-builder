import React, { useContext, useEffect, useState } from "react";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GlobalApi from "./../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const PersonalDetailsForm = ({ enableNext }) => {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  //   console.log(params);
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(params);
  }, []);

  const handleInputChange = (e) => {
    enableNext(false);
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setResumeInfo({ ...resumeInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: formData,
    };
    GlobalApi.updateResumeDetails(params?.resumeID, data).then((response) => {
      console.log(response);
      setLoading(false);
      toast("Resume details updated successfully.");
      enableNext(true);
    }),
      (error) => {
        setLoading(false);
      };
  };

  return (
    <div className="p-5 border-t-primary border-t-8 shadow-lg rounded-lg mt-10">
      <h2 className="font-bold text-lg">Personal Information</h2>
      <p className="text-sm">Get started with the basic information</p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div>
            <label className="text-sm" htmlFor="firstName">
              First Name:
            </label>
            <Input
              name="firstName"
              defaultValue={resumeInfo?.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="text-sm" htmlFor="lastName">
              Last Name:
            </label>
            <Input
              name="lastName"
              defaultValue={resumeInfo?.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm" htmlFor="jobTitle">
              Job Title:
            </label>
            <Input
              name="jobTitle"
              defaultValue={resumeInfo?.jobTitle}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="col-span-2">
            <label className="text-sm" htmlFor="address">
              Address:
            </label>
            <Input
              name="address"
              defaultValue={resumeInfo?.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="text-sm" htmlFor="phome">
              Phone Number:
            </label>
            <Input
              name="phome"
              defaultValue={resumeInfo?.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <label className="text-sm" htmlFor="email">
              Email:
            </label>
            <Input
              name="email"
              defaultValue={resumeInfo?.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="flex justify-end mt-3" size="xs">
          <Button type="submit">
            {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;

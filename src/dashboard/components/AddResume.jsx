import { Loader2, PlaySquare, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import GlobalApi from "./../../../service/GlobalApi";
import { data } from "autoprefixer";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const navigate = useNavigate();

  const onCreateResume = async () => {
    setLoading(true);
    const uuid = uuidv4();
    const data = {
      data: {
        title: resumeTitle,
        resumeId: uuid,
        userEmail: user?.user?.primaryEmailAddress?.emailAddress,
        userName: user?.user?.fullName,
      },
    };
    console.log(data);

    try {
      const resp = await GlobalApi.createNewResume(data);
      console.log(resp.data.data.attributes.resumeId);
      setLoading(false);
      navigate(`resume/${resp.data.data.id}/edit`);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="mt-10 h-[280px] p-14 py-24 border items-center flex justify-center bg-secondary rounded-lg hover:scale-105 transition-all hover:shadow-md cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <p htmlFor="email">Add a title for your new resume</p>
                <Input
                  className="my-2"
                  type="text"
                  id="email"
                  placeholder="Ex.Fullstack resume"
                  onChange={(e) => setResumeTitle(e.target.value)}
                />
              </div>
            </DialogDescription>

            <div className="flex justify-end gap-5">
              <Button onClick={() => setOpenDialog(false)} variant="ghost">
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={() => onCreateResume()}
              >
                {loading ? <Loader2 className="animate-spin" /> : "Create"}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;

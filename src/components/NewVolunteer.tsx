import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Volunteer } from "@/Redux/VolunteerSlice";
import { ADD_VOLUNTEER, EDIT_VOLUNTEER } from "@/Redux/Actions";

interface DialogPropsType {
  compTask: "New" | "Edit";
  volunteer?: Volunteer;
}

export const NewVolunteer: React.FC<DialogPropsType> = ({
  compTask,
  volunteer,
}) => {
  // associatedEvent: string;
  const dispatch = useDispatch();
  const [ID, setID] = useState<string>(volunteer?._id ?? "101");
  const [name, setName] = useState<string>(volunteer?.name ?? "Test Name");
  const [contact, setContact] = useState<number>(volunteer?.contact ?? 9000000);
  const [skills, setSkills] = useState<string>(
    volunteer?.skills ?? "Example Skills",
  );
  const [availability, setAvailability] = useState<boolean>(
    volunteer?.availability ?? false,
  );
  const [intrestArea, setIntrestArea] = useState<string>(
    volunteer?.intrestArea ?? "Examnple Intrest",
  );
  const [associatedEvent, setAssociatedEvent] = useState<string>(
    volunteer?.associatedEvent ?? "Examnple Event",
  );

  const addNewVolunteer = () => {
    compTask === "New" &&
      dispatch(
        ADD_VOLUNTEER({
          _id: ID,
          name,
          contact,
          skills,
          availability,
          intrestArea,
          associatedEvent,
        }),
      );
    compTask === "Edit" &&
      dispatch(
        EDIT_VOLUNTEER({
          _id: ID,
          name,
          contact,
          skills,
          availability,
          intrestArea,
          associatedEvent,
        }),
      );
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-[100%] bg-gradient-to-r from-blue-600 to-purple-800">
            {compTask === "New" ? "Add New Volunteer" : "Edit Volunteer"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border border-black rounded-md w-[90vw]">
          <DialogHeader>
            <DialogTitle>Add a New Volunteer</DialogTitle>
            <DialogDescription>
              All the fields are mandatory. Choose a unique ID.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                type="text"
                placeholder="Volunteer ID"
                onChange={(e) => setID(e.target.value)}
                defaultValue={ID}
                disabled={compTask === "Edit"}
              />
              <Input
                type="text"
                placeholder="Volunteer Name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
              />
              <Input
                type="number"
                placeholder="Contact"
                onChange={(e) => setContact(Number(e.target.value))}
                defaultValue={contact}
              />
              <Input
                type="text"
                placeholder="Associated Event"
                onChange={(e) => setAssociatedEvent(e.target.value)}
                defaultValue={associatedEvent}
              />
              <Input
                type="text"
                placeholder="Skills"
                onChange={(e) => setSkills(e.target.value)}
                defaultValue={skills}
              />
              <Input
                type="text"
                placeholder="Intrest Areas"
                onChange={(e) => setIntrestArea(e.target.value)}
                defaultValue={intrestArea}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start flex gap-1">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={addNewVolunteer}>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

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
import { ADD_EVENT, EDIT_EVENT } from "@/Redux/Actions";
import { Event } from "@/Redux/EventSlice";

interface DialogPropsType {
  compTask: "New" | "Edit";
  event?: Event;
}

export const NewEvent: React.FC<DialogPropsType> = ({ compTask, event }) => {
  const dispatch = useDispatch();
  const [ID, setID] = useState<string>(event?._id ?? "100");
  const [name, setName] = useState<string>(event?.name ?? "Test Name");
  const [date, setDate] = useState<string>(event?.date ?? "20/01/2023");
  const [location, setLocation] = useState<string>(
    event?.location ?? "Bhubaneswar",
  );
  const [description, setDescription] = useState<string>(
    event?.description ?? "None",
  );
  const [volunteersRequired, setVolunteersRequired] = useState<number>(
    event?.volunteersRequired ?? 10,
  );
  const addNewEvent = () => {
    compTask === "New" &&
      dispatch(
        ADD_EVENT({
          _id: ID,
          name,
          date,
          location,
          description,
          volunteersRequired,
        }),
      );
    compTask === "Edit" &&
      dispatch(
        EDIT_EVENT({
          _id: ID,
          name,
          date,
          location,
          description,
          volunteersRequired,
        }),
      );
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-[100%] bg-gradient-to-r from-blue-600 to-purple-800">
            {compTask === "New" ? "Add New Event" : "Edit Event"}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md border border-black rounded-md w-[90vw]">
          <DialogHeader>
            <DialogTitle>Add a New Event</DialogTitle>
            <DialogDescription>
              All the fields are mandatory. Choose a unique ID.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input
                type="text"
                placeholder="Event ID"
                onChange={(e) => setID(e.target.value)}
                defaultValue={ID}
                disabled={compTask === "Edit"}
              />
              <Input
                type="text"
                placeholder="Event Name"
                onChange={(e) => setName(e.target.value)}
                defaultValue={name}
              />
              <Input
                type="text"
                placeholder="Event Date"
                onChange={(e) => setDate(e.target.value)}
                defaultValue={date}
              />
              <Input
                type="text"
                placeholder="Event location"
                onChange={(e) => setLocation(e.target.value)}
                defaultValue={location}
              />
              <Input
                type="text"
                placeholder="Event Description"
                onChange={(e) => setDescription(e.target.value)}
                defaultValue={description}
              />
              <Input
                type="number"
                placeholder="Number of Volunteers Required"
                onChange={(e) => setVolunteersRequired(Number(e.target.value))}
                defaultValue={volunteersRequired}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start flex gap-1">
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={addNewEvent}>Save</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

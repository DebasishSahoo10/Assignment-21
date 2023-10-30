import { Event } from "@/Redux/EventSlice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { DELETE_EVENT } from "@/Redux/Actions";
import { NewEvent } from "./NewEvent";

interface EventCardPropType {
  event: Event;
}

export const EventCard: React.FC<EventCardPropType> = ({ event }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DELETE_EVENT(event._id));
  };
  return (
    <>
      <Card className="bg-transparent text-black w-[90vw] text-start border border-black mt-3 flex items-center justify-between">
        <div>
          <CardHeader>
            <CardTitle>{event.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Date : {event.date}</p>
            <p>Location : {event.location}</p>
            <p>Description : {event.description}</p>
            <p>Volunteers Required : {event.volunteersRequired}</p>
          </CardContent>
        </div>
        <div>
          <CardFooter className="flex flex-col gap-2">
            <NewEvent compTask="Edit" event={event} />
            <Button
              variant="outline"
              className="border-red-700 w-[100%]"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </CardFooter>
        </div>
      </Card>
    </>
  );
};

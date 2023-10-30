import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import { EventCard } from "@/components/EventCard";
import { NewEvent } from "@/components/NewEvent";

export const Event = () => {
  const events = useSelector((state: RootState) => state.Event.events);

  return (
    <div>
      <NewEvent compTask="New" />
      <ul className="mb-10">
        {events.map((event) => (
          <li key={event._id}>
            <EventCard event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
};

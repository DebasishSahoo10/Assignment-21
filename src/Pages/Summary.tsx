import { RootState } from "@/Redux/store";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";

export const Summary = () => {
  const events = useSelector((state: RootState) => state.Event.events);
  const volunteers = useSelector(
    (state: RootState) => state.Volunteer.volunteer,
  );
  const totalAvailableVolunteers = volunteers.reduce(
    (acc, curr) => (curr.availability ? (acc += 1) : (acc += 0)),
    0,
  );
  return (
    <div>
      <Card className="bg-transparent text-black w-[90vw] text-start border border-black mb-3">
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg">Number of Active Events : {events.length}</p>
          <p className="text-lg">
            Number of Available Volunteers : {totalAvailableVolunteers}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

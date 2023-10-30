import { Volunteer } from "@/Redux/VolunteerSlice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { DELETE_VOLUNTEER } from "@/Redux/Actions";
import { NewVolunteer } from "./NewVolunteer";

interface VolunteerCardPropType {
  volunteer: Volunteer;
}

export const VolunteerCard: React.FC<VolunteerCardPropType> = ({
  volunteer,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(DELETE_VOLUNTEER(volunteer._id));
  };
  return (
    <>
      <Card className="bg-transparent text-black  w-[90vw] text-start border border-black mb-3 flex items-center justify-between">
        <div>
          <CardHeader>
            <CardTitle>Name : {volunteer.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Contact : {volunteer.contact}</p>
            <p>
              Availability :{" "}
              {volunteer.availability ? "Available" : "Not Available"}
            </p>
            <p>Intrest Areas : {volunteer.intrestArea}</p>
            <p>Associated Event : {volunteer.associatedEvent}</p>
            <p>Skills : {volunteer.skills}</p>
          </CardContent>
        </div>
        <div>
          <CardFooter className="flex flex-col gap-2">
            <NewVolunteer compTask="Edit" volunteer={volunteer} />
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

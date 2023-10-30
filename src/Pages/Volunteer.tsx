import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { VolunteerCard } from "@/components/VolunteerCard";
import { NewVolunteer } from "@/components/NewVolunteer";

export const Volunteer = () => {
  const volunteers = useSelector(
    (state: RootState) => state.Volunteer.volunteer,
  );
  return (
    <div>
      <NewVolunteer compTask="New" />
      <ul className="mt-3">
        {volunteers.map((volunteer) => (
          <li key={volunteer._id}>
            <VolunteerCard volunteer={volunteer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

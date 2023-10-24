import { useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { WardCard } from "@/components/WardCard";
import { NewWard } from "@/components/NewWard";

export const Ward = () => {
    const wards = useSelector((state: RootState) => state.Ward.wards)
    return (
        <div>
            <NewWard compTask="New"/>
            <ul className="mt-3">
                {wards.map(ward =>
                    <li key={ward._id}>
                        <WardCard ward={ward} />
                    </li>
                )}
            </ul>
        </div>
    )
}
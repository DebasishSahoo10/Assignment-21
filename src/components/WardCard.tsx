import { Ward } from "@/Redux/WardSlice"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { DELETE_WARD } from "@/Redux/Actions";
import { NewWard } from "./NewWard";

interface WardCardPropType {
    ward: Ward
}

export const WardCard: React.FC<WardCardPropType> = ({ ward }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(DELETE_WARD(ward._id))
    }
    return (
        <>
            <Card className="bg-transparent text-black  w-[90vw] text-start border border-black mb-3 flex items-center justify-between">
                <div>
                    <CardHeader>
                        <CardTitle>Ward Number : {ward.number}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Bed Capacity : {ward.capacity}</p>
                        <p>Specialisation : {ward.specialisation}</p>
                    </CardContent>
                </div>
                <div>
                    <CardFooter className="flex flex-col gap-2">
                        <NewWard compTask="Edit" ward={ward}/>
                        <Button variant="outline" className="border-red-700 w-[100%]" onClick={handleDelete}>Delete</Button>
                    </CardFooter>
                </div>
            </Card>
        </>
    )
}
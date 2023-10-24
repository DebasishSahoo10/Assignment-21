import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useState } from 'react'
import { Ward } from "@/Redux/WardSlice";
import { ADD_WARD, EDIT_WARD } from "@/Redux/Actions";

interface DialogPropsType {
    compTask: "New" | "Edit",
    ward? : Ward
}

export const NewWard: React.FC<DialogPropsType> = ({ compTask, ward }) => {
    const dispatch = useDispatch()
    const [ID, setID] = useState<string>(ward?._id ?? "101")
    const [number, setNumber] = useState<number>(ward?.number ?? 5)
    const [specialisation, setSpecialisation] = useState<string>(ward?.specialisation ?? "Test")
    const [capacity, setCapacity] = useState<number>(ward?.capacity ?? 10)
    const addNewWard = () => {
        compTask === "New" && dispatch(ADD_WARD({
            _id : ID,
            number,
            specialisation,
            capacity
        }))
        compTask === "Edit" && dispatch(EDIT_WARD({
            _id : ID,
            number,
            specialisation,
            capacity
        }))
    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-[100%] bg-gradient-to-r from-blue-600 to-purple-800">{compTask === "New" ? "Add New Ward" : "Edit Ward"}</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md border border-black rounded-md w-[90vw]">
                    <DialogHeader>
                        <DialogTitle>Add a New Patient</DialogTitle>
                        <DialogDescription>
                            All the fields are mandatory. Choose a unique ID.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center space-x-2">
                        <div className="grid flex-1 gap-2">
                            <Input
                                type="text"
                                placeholder="Patient ID"
                                onChange={(e) => setID(e.target.value)}
                                defaultValue={ID}
                                disabled={compTask === "Edit"}
                            />
                            <Input
                                type="number"
                                placeholder="Ward Number"
                                onChange={(e) => setNumber(Number(e.target.value))}
                                defaultValue={number}
                            />
                            <Input
                                type="text"
                                placeholder="Specialisation"
                                onChange={(e) => setSpecialisation(e.target.value)}
                                defaultValue={specialisation}
                            />
                            <Input
                                type="number"
                                placeholder="Capacity"
                                onChange={(e) => setCapacity(Number(e.target.value))}
                                defaultValue={capacity}
                            />
                        </div>
                    </div>
                    <DialogFooter className="sm:justify-start flex gap-1">
                        <DialogClose asChild>
                            <Button type="button">
                                Close
                            </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button onClick={addNewWard}>Save</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
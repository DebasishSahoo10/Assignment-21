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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { useState } from 'react'
import { ADD_PATIENT, EDIT_PATIENT } from "@/Redux/Actions";
import { Patient } from "@/Redux/PatientSlice";

interface DialogPropsType {
    compTask: "New" | "Edit",
    patient? : Patient
}

export const NewPatient: React.FC<DialogPropsType> = ({ compTask, patient }) => {
    const dispatch = useDispatch()
    const [ID, setID] = useState<string>(patient?._id ?? "100")
    const [name, setName] = useState<string>(patient?.name ?? "Test Name")
    const [age, setAge] = useState<number>(patient?.age ?? 12)
    const [gender, setGender] = useState<string>( patient?.gender ?? "Male")
    const [medicalHistory, setMedicalHistory] = useState<string>( patient?.medicalHistory ?? "None")
    const [contact, setContact] = useState<number>( patient?.contact ?? 1000000)
    const [ward, setWard] = useState<number>(patient?.ward ?? 0)
    const addNewPatient = () => {
        compTask === "New" && dispatch(ADD_PATIENT({
            _id: ID,
            name,
            age,
            gender,
            medicalHistory,
            contact,
            ward
        }))
        compTask === "Edit" && dispatch(EDIT_PATIENT({
            _id: ID,
            name,
            age,
            gender,
            medicalHistory,
            contact,
            ward
        }))
    }
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-[100%] bg-gradient-to-r from-blue-600 to-purple-800">{compTask === "New" ? "Add New Patient" : "Edit Patient"}</Button>
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
                                type="text"
                                placeholder="Patient Name"
                                onChange={(e) => setName(e.target.value)}
                                defaultValue={name}
                            />
                            <Input
                                type="number"
                                placeholder="Patient Age"
                                onChange={(e) => setAge(Number(e.target.value))}
                                defaultValue={age}
                            />
                            <Select onValueChange={setGender} defaultValue={gender}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="Male">Male</SelectItem>
                                        <SelectItem value="Female">Female</SelectItem>
                                        <SelectItem value="Not Preferred">Not Preferred</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Input
                                type="text"
                                placeholder="Medical History"
                                onChange={(e) => setMedicalHistory(e.target.value)}
                                defaultValue={medicalHistory}
                            />
                            <Input
                                type="number"
                                placeholder="Contact Number"
                                onChange={(e) => setContact(Number(e.target.value))}
                                defaultValue={contact}
                            />
                            <Input
                                type="number"
                                placeholder="Ward Assigned"
                                onChange={(e) => setWard(Number(e.target.value))}
                                defaultValue={ward}
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
                            <Button onClick={addNewPatient}>Save</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
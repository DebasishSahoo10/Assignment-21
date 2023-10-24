import { Patient } from "@/Redux/PatientSlice";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { DELETE_PATIENT } from "@/Redux/Actions";
import { NewPatient } from "./NewPatient";

interface PatientCardPropType {
    patient : Patient
}

export const PatientCard : React.FC<PatientCardPropType> = ({patient}) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(DELETE_PATIENT(patient._id))
    }
    return (
        <>
            <Card className="bg-transparent text-black w-[90vw] text-start border border-black mt-3 flex items-center justify-between">
                <div>
                    <CardHeader>
                        <CardTitle>{patient.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Age : {patient.age}</p>
                        <p>Gender : {patient.gender}</p>
                        <p>Contact : {patient.contact}</p>
                        <p>Ward Number : {patient.ward}</p>
                        <p>Medical History : {patient.medicalHistory}</p>
                    </CardContent>
                </div>
                <div>
                    <CardFooter className="flex flex-col gap-2">
                        <NewPatient compTask="Edit" patient={patient}/>
                        <Button variant="outline" className="border-red-700 w-[100%]" onClick={handleDelete}>Delete</Button>
                    </CardFooter>
                </div>
            </Card>
        </>
    )
}
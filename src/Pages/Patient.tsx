import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import { PatientCard } from "@/components/PatientCard";
import { NewPatient } from "@/components/NewPatient";


export const Patient = () => {
    const patients = useSelector((state: RootState) => state.Patient.patient)

    return (
        <div>
            <NewPatient compTask="New"/>
            <ul className="mb-10">
                {patients.map(patient =>
                    <li key={patient._id}>
                        <PatientCard patient={patient} />
                    </li>
                )}
            </ul>
        </div>
    )
}
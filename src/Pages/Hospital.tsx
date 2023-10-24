import { RootState } from "@/Redux/store"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { useSelector } from "react-redux"

export const Hospital = () => {
    const patients = useSelector((state : RootState) => state.Patient.patient)
    const wards = useSelector((state : RootState) => state.Ward.wards)
    const totalHospitalCapacity = wards.reduce((acc, curr) => acc+=curr.capacity,0)
    return (
        <div>
            <Card className="bg-transparent text-black w-[90vw] text-start border border-black mb-3">
                <CardHeader>
                    <CardTitle>Hospital Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg">Number of Patients : {patients.length}</p>
                    <p className="text-lg">Occupency Rate : {((patients.length /totalHospitalCapacity) * 100).toFixed(2)}%</p>
                </CardContent>
            </Card>
        </div>
    )
}
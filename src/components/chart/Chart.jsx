import { useContext } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { LawyerContext } from "../../providers/LawyerProvider";

const Chart = () => {
    const {lawyers , storedLawyer} = useContext(LawyerContext)

    const findDetails = lawyers.filter(lawyer => storedLawyer.includes(lawyer.id))
   
   

    return (
        <div>
            <BarChart style={{ width: '100%', maxHeight: '70vh', aspectRatio: 1.618,marginTop:"40px" }}
            data={findDetails}
            >
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="consultationFee" fill="#8884d8"></Bar>
            </BarChart>
        </div>
    );
};

export default Chart;
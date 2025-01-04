import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import ChartData from "../../../../types/ChartData";

export default function DevicesChart ({ data }: {data: ChartData[]}) {
    return <ResponsiveContainer width='100%' height={400}>
        <BarChart data={data} margin={{ top: 30}}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="y" fill="#574ae2" />
        </BarChart>
    </ResponsiveContainer>
};
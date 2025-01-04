import ChartData from "../../../../types/ChartData"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

type CountriesChartProps = {
    data: ChartData[]
}


export default function CountriesChart ({ data }: CountriesChartProps) {
    //display only the 6 top countries
    return <ResponsiveContainer width='100%' height={400}>
        <BarChart data={data} margin={{top: 30}}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="y" fill="#574ae2" />
        </BarChart>
    </ResponsiveContainer>
}
import ChartData from "../../../../types/ChartData"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type CountriesChartProps = {
    data: ChartData[]
}


export default function AnalyticsBarChart ({ data }: CountriesChartProps) {
    //display only the 6 top countries
    return <ResponsiveContainer width='100%' height={400}>
        <BarChart data={data} margin={{top: 30}}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false}/>
            <Tooltip cursor={false} contentStyle={{maxWidth: 200}} labelStyle={{ color: 'black'}} />
            <Bar dataKey="frequency" fill="#574ae2" maxBarSize={120}/>
        </BarChart>
    </ResponsiveContainer>
}
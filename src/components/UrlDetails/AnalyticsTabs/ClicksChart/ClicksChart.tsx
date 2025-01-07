import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, LabelList, Tooltip } from "recharts"
import ChartData from "../../../../types/ChartData"

type ClicksChartProps = {
    data: ChartData[]
}
    
export default function ClicksChart ({ data }: ClicksChartProps) {
    return <ResponsiveContainer width={"100%"} height={400}>
    <LineChart data={data} margin={{ top: 30 }}>
        <XAxis dataKey="name"/>
        <YAxis allowDecimals={false}/>
        <Tooltip cursor={false} contentStyle={{ maxWidth: 200 }} labelStyle={{ color: 'black'}}/>
        <Line className="linechart_line" type="monotone" dataKey='clicks' stroke="#574ae2">
            <LabelList position="left" offset={10} />
        </Line>
    </LineChart>
</ResponsiveContainer>
}
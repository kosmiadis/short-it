import ChartData from "./ChartData";

export type AnalyticsResponse = {
    clicks: ChartData[] | null,
    devices: ChartData[] | null,
    countries: ChartData[] | null,
} | { message: string, clicks: undefined, devices: undefined, countries: undefined };

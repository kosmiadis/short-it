export type ChartData = {
    name: string,
    x: number,
    clicks: number,
} | {
    name: string,
    x: number,
    frequency: number,
}
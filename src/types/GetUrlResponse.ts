import { Url } from "./Url";

export interface GetUrlResponse {
    message: string,
    url: Url | null
}
import { Url } from "./Url"

export type UserAuthResponse = {
    user: {
        fullName: string,
        email: string, 
        urls: Url[],
        created_at: string,
        remaining_url_quota: number,
    },
    message: string,
} | {
    user: null,
    message: string
} | null
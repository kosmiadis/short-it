import { Url } from "./Url"

export type UserAuthResponse = {
    user: {
        fullName: string,
        email: string, 
        urls: Url[],
        created_at: string,
    },
    message: string,
} | {
    user: null,
    message: string
} | null
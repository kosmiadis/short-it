export type AuthUserResponse = {
    user: {
        fullName: string,
        email: string, 
        urls: string[],
        created_at: string,
    },
    message: string,
} | {
    user: null,
    message: string
} | null
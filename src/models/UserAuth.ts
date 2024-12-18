export type AuthUser = {
    fullName: string,
    email: string, 
    urls: string[],
    created_at: string,
} | {
    isAuthenticated: boolean
    message: string
} | null
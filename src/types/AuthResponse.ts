import { UserAuthResponse } from "./UserAuthResponse"

export interface AuthResponse {
    user: UserAuthResponse,
    message: string,
    isAuthenticated: boolean,
    isError: boolean
} 
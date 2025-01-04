import { ReactNode } from "react"
import './LoadingSection.css';

type LoadingSectionProps = {
    children: ReactNode
}

export default function LoadingSection ({children}: LoadingSectionProps) {
    return <div className="loading_section">
        {children}
    </div>   
}
import { ReactNode } from "react";
import './TabContent.css';

type TabContentProps = {
    children: ReactNode
}
export default function TabContent ({ children }: TabContentProps) {
    return <div className="tab_content">
        {children}
    </div>
}
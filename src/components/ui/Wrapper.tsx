import { ReactNode } from "react";
import './Wrapper.css';

const Wrapper: React.FC<{children: ReactNode}> = ({children}) => {
    return <main className="wrapper">
        {children}
    </main>
}

export default Wrapper;
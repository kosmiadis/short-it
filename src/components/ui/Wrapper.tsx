import { ReactNode } from "react";

const Wrapper: React.FC<{children: ReactNode}> = ({children}) => {
    return <main className="wrapper-padding flex-1">
        {children}
    </main>
}

export default Wrapper;
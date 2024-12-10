import { ReactNode } from "react";

const Button: React.FC<{className?: string, onClick?: () => void, children : ReactNode}> = ({className, onClick, children}) => {
    return <button onClick={onClick} className={"jost-text btn action-btn " + className}>{children}</button>
}

export default Button;
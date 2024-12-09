import { ReactNode } from "react";

const Button: React.FC<{onClick?: () => void, children : ReactNode}> = ({onClick, children}) => {
    return <button onClick={onClick} className="jost-text btn action-btn">{children}</button>
}

export default Button;
import { ReactNode } from "react";

type BtnType = 'action-btn' | 'danger-btn' | 'theme-btn' | 'learn-more-btn'
type Type = 'submit' | 'button' | 'reset';

const Button: React.FC<{id?: string, btnType: BtnType, type?: Type, className?: string, onClick?: () => void, disabled?: boolean, children : ReactNode}> = ({id, btnType, disabled, type, className, onClick, children}) => {
    return <button type={type} id={id} onClick={onClick} className={"btn " + btnType + ' ' + className} disabled={disabled}>{children}</button>
}

export default Button;
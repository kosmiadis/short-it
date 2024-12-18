import { ReactNode } from "react";
import { Link } from "react-router-dom"

const NavLink: React.FC<{className?: string, to: string, children: ReactNode}> = ({ className, to, children }) => {
    return <Link to={to} className={className}>
        {children}
    </Link>
}

export default NavLink;
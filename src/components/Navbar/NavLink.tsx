import { ReactNode } from "react";
import { Link } from "react-router-dom"

const NavLink: React.FC<{to: string, children: ReactNode}> = ({ to, children }) => {
    return <Link to={to} className="no-underline">
        {children}
    </Link>
}

export default NavLink;
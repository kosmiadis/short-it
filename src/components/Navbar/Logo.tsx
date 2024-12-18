import { ReactNode } from "react";
import NavLink from "./NavLink";

const Logo: React.FC<{className?: string, children: ReactNode}> = ({ className, children }) => {
    return <NavLink to='/' className={className}>{children}</NavLink>
}
export default Logo;
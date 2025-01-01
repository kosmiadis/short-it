import { ReactNode } from "react";
import { Link } from "react-router-dom"

type NavLinksProps = {className?: string, to: string, children: ReactNode}

export default function NavLink ({ className, to, children }: NavLinksProps) {
    return <Link to={to} className={className}>
        {children}
    </Link>
}
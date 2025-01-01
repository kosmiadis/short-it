import { ReactNode } from "react";
import NavLink from "../NavLink";

type LogoProps = {
    id?: string, 
    children: ReactNode
}

export default function Logo ({ id, children }: LogoProps ) {
    return <NavLink to='/'><h2 id={id}>{children}</h2></NavLink>
}
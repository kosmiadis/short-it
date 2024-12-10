import NavLink from "./NavLink";

const Logo: React.FC<{text: string}> = ({ text }) => {
    return <NavLink to='/'><h2 className="jost-text">{text}</h2></NavLink>
}
export default Logo;
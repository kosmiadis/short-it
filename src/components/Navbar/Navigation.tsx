import { Link } from "react-router-dom";

const Navigation: React.FC<{id: string}> = ({ id }) => {

    return <nav id={id} className="flex">
      <Link to='/' id='brand'><h2>Short-It</h2></Link></nav>
}

export default Navigation;
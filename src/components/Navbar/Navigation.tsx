import { useRef } from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC<{id: string}> = ({id}) => {

    //FIX LATER *IMPORTANT
    const pathName = useRef(location.pathname);


    return <nav id={id} className="flex">
      <Link to='/' id='brand'><h2>Short-It</h2></Link>
      {pathName.current === '/' && <>
        <ul>
          <li><a href='#features'>Features</a></li>
          <li><a href='#how-it-works'>How It Works</a></li>
        </ul>
      </>}
    </nav>
}

export default Navigation;
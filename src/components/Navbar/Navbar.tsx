import Navigation from "./Navigation";
import NavActions from "./NavActions";
import './Navbar.css';
import { useMutation } from "@tanstack/react-query";
import { checkAuth } from "../Auth/Protected";
import { useAuth } from "../../store/AuthProvider";
import { useEffect } from "react";

const Navbar: React.FC = () => {
  const { setIsAuthorized, setAuthUser } = useAuth();

  const { mutate } = useMutation({
    mutationFn: checkAuth,
    onSuccess: (response) => {
        setIsAuthorized(true);
        setAuthUser({user: response!.user, message: response!.message})
    }
  })

  useEffect(() => {
    mutate();
  },[])

  return <header>
    <Navigation id='navigation'/>
    <NavActions id='nav-actions'/>
  </header>
}

export default Navbar;

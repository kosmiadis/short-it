import Navigation from "./Navigation";
import NavActions from "./NavActions";
import { useMutation } from "@tanstack/react-query";
import { checkAuth } from "../Auth/Protected/Protected";
import { useAuth } from "../../store/AuthProvider";
import { useEffect } from "react";
import './Navbar.css';

export default function Navbar () {
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

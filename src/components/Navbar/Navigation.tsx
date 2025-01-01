import Logo from "./Logo/Logo";

type NavigationProps = { id: string } 

export default function Navigation ({id}: NavigationProps) {
  return <nav id={id}>
      <Logo id="brand">
        Short-It
      </Logo>
    </nav>
};
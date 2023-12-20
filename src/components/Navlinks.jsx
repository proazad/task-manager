import { NavLink } from "react-router-dom";

const Navlinks = () => {
  return (
    <>
      <li>
        <NavLink to={"/"} className={"text-white"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className={"text-white"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className={"text-white"}>Contact</NavLink>
      </li>
      <li>
        <NavLink to={"/login"} className={"text-white"}>Login</NavLink>
      </li>
    </>
  );
};

export default Navlinks;

import { Link } from "react-router-dom";
import logo from "../assets/icon.png";
const Logo = () => {
  return (
    <Link to={"/"} className="flex items-center">
      <img src={logo} width={40} draggable="false" />
      <span className="text-2xl font-bold text-white">Task Manager</span>
    </Link>
  );
};

export default Logo;

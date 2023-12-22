import { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navlinks = () => {
  const { userLogOut, user } = useContext(AuthContext);
  
  const handleUserLogOut = () => {
    userLogOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "SignOut Successfull",
        showConfirmButton: false,
        timer: 1500,
      });
      return <Navigate to="/" replace></Navigate>;
    });
  };
  return (
    <>
      <li>
        <NavLink to={"/"} className={"text-white"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"} className={"text-white"}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"} className={"text-white"}>
          Contact
        </NavLink>
      </li>
      <li className="hover:p-0">
        {user ? (
          <div className="flex-none gap-0">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-8 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/dashboard"} className="justify-between">
                    Dashboard
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleUserLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <NavLink to={"/login"} className={"text-white"}>
            Login
          </NavLink>
        )}
      </li>
    </>
  );
};

export default Navlinks;

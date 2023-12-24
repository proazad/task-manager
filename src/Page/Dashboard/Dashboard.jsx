import { useContext } from "react";
import { FaFileCirclePlus } from "react-icons/fa6";
import { FcHome } from "react-icons/fc";
import { RiLogoutCircleLine, RiMenuUnfoldLine } from "react-icons/ri";
import { Link, Navigate, Outlet } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Task from "../../components/Task";
const Dashboard = () => {
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
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
        <div className="my-5">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary btn-outline drawer-button lg:hidden"
          >
            <RiMenuUnfoldLine className="text-4xl" />
          </label>
        </div>
        <Outlet />
        <Task />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex items-center justify-center flex-col gap-5 mb-5">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} />
              </div>
            </div>
            <p className="text-xl font-medium">{user?.displayName}</p>
          </div>
          <li>
            <Link to={"/dashboard"}>
              <FcHome />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={"/dashboard"}>
              <FaFileCirclePlus />
              Add Task
            </Link>
          </li>
          <div className="divider divider-secondary">Secondary</div>
          <li>
            <Link to={"/"}>
              <FcHome />
              Home
            </Link>
          </li>
          <li>
            <button onClick={handleUserLogOut}>
              <RiLogoutCircleLine />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

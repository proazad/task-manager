import { Link, Outlet } from "react-router-dom";
import { FcHome } from "react-icons/fc";
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiMenuUnfoldLine } from "react-icons/ri";
const Dashboard = () => {
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
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-52 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to={"/dashboard"}>
              <FcHome />
              Home
            </Link>
          </li>
          <li>
            <Link to={"/dashboard/addtask"}>
              <FaFileCirclePlus />
              Add Task
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;

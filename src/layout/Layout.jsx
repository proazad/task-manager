import { Outlet } from "react-router-dom";
import Navlinks from "../components/Navlinks";
import Header from "../components/Header";
const Layout = () => {
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Header />
        <Outlet />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-violet-950">
          {/* Sidebar content here */}
          <Navlinks />
        </ul>
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import Navlinks from "../components/Navlinks";
import Header from "../components/Header";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Layout = () => {
  const { user, loading } = useContext(AuthContext);
  if (loading && user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }
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
          <Navlinks />
        </ul>
      </div>
    </div>
  );
};

export default Layout;

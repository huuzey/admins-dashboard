import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { setMenu, setScreenSize, setUser } from "state";
import { useGetUserQuery } from "state/api";
import "../../components/sidebarstyle.css";

const Layout = () => {
  const { screenSize, activeMenu, userId } = useSelector(
    (state) => state.global
  );
  const { data } = useGetUserQuery(userId);

  const dispatch = useDispatch();
  if (data) {
    dispatch(setUser(data));
  }
  useEffect(() => {
    const handleResize = () => dispatch(setScreenSize(window.innerWidth));

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    if (screenSize <= 600) {
      dispatch(setMenu());
    } else {
      dispatch(setMenu());
    }
  }, [screenSize]);
  return (
    <div>
      <div className={` sdibar shadow-2xl w-60 pt-3  -top-1 fixed `}>
        {activeMenu && <Sidebar />}
      </div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

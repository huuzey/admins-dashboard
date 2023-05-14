import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutlined,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import React, { useEffect } from "react";
import "./sidebarstyle.css";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  NavLink,
  Navigate,
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { setMenu } from "state";

const Sidebar = () => {
  const { currentColor, mode, screenSize } = useSelector(
    (state) => state.global
  );
  const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Client Facing",
      icon: null,
    },
    {
      text: "Products",
      icon: <ShoppingCartOutlined />,
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Transactions",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
  ];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scre = () => {
    if (window.innerWidth <= 780) {
      dispatch(setMenu());
    }
  };
  const locar = useLocation().pathname.slice(1) || "Dashboard";
  return (
    <div
      className={`  ${
        mode === "dark"
          ? "text-white bg-main-dark-bg "
          : "text-black bg-main-bg"
      } `}
    >
      {navItems.map(({ text, icon }) => {
        if (!icon) {
          return (
            <div className={`ml-1 my-1 py-3`}>
              <p>{text}</p>
            </div>
          );
        } else {
          return (
            <div className={`flex ml-3 gap-2 mb-1`}>
              <p>{icon}</p>

              <p
                key={text}
                to={`/${text}`}
                style={{
                  backgroundColor: locar === text ? currentColor : "",
                }}
                className={`flex rounded-2xl cursor-pointer p-1 px-2`}
                onClick={() => {
                  navigate(`/${text}`);
                  scre();
                }}
              >
                {text}
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Sidebar;

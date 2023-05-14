import { IconButton } from "@mui/material";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import profile from "assets/profile.jpeg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setMode, setTheme, setUser } from "state";

const Navbar = () => {
  const { activeMenu, mode, currentColor, user } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        mode === "dark" ? "bg-main-dark-bg text-white" : ""
      } ml-2  flex items-center justify-between sm:flex-wrap  ${
        activeMenu ? "md:ml-64" : ""
      }`}
    >
      <div
        className={`${
          mode === "dark" ? " text-black" : ""
        } flex mt-2 items-center  px-1 rounded-xl`}
      >
        <div
          className={`${mode === "dark" ? "bg-white" : ""} rounded-3xl mr-1`}
          style={{ backgroundColor: currentColor }}
          onClick={() => dispatch(setMenu())}
        >
          <IconButton>
            <MenuIcon />
          </IconButton>
        </div>
        <div className="relative">
          <input
            type="text "
            placeholder="search..."
            className={`${
              mode === "dark" ? "text-white" : ""
            }focus:outline-none  rounded-2xl p-0.5`}
            style={{ backgroundColor: currentColor }}
          />
          <div className="  flex items-center justify-center absolute -top-1.5 right-1">
            <IconButton>
              <Search />
            </IconButton>
          </div>
        </div>
      </div>
      <div className="flex items-center  gap-2 sm:gap-1 mr-2 mt-2 justify-center">
        <div
          className={`${mode === "dark" ? "bg-white " : ""} rounded-3xl mr-1`}
          style={{ backgroundColor: currentColor }}
        >
          <IconButton onClick={() => dispatch(setMode())}>
            {mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
        </div>
        <div
          onClick={() => dispatch(setTheme())}
          className={`${mode === "dark" ? "bg-white " : ""} rounded-3xl mr-1`}
          style={{ backgroundColor: currentColor }}
        >
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </div>
        <div className="flex  gap-2 items-center justify-center sm:ml-1">
          <img src={profile} className="w-10 h-10 rounded-xl" />
          <p style={{ color: currentColor }} className="flex flex-col">
            HUZE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

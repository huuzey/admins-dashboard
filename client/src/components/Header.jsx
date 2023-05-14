import React from "react";
import { useSelector } from "react-redux";

const Header = ({ title, subtitle }) => {
  const { currentColor } = useSelector((state) => state.global);
  return (
    <div
      style={{ boxShadow: currentColor }}
      className={`flex flex-col w-full shadow-2xl shadow-${[
        currentColor,
      ]}  py-3 ml-0 `}
    >
      <p style={{ color: currentColor }} className="mt-2 ml-3">
        {title}
      </p>
      <p style={{ color: currentColor }} className="ml-5 mb-2">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;

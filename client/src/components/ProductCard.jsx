import { CardContent, Rating, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { category, description, supply, rating, name, price, _id, stat } =
    product;
  const { activeMenu, currentColor, mode } = useSelector(
    (state) => state.global
  );

  return (
    <div
      style={{ color: currentColor }}
      className={` overflow-hidden md:px-2 mb-2 flex flex-col  ${
        mode === "dark" ? "" : ""
      } shadow-2xl rounded-xl  gap-1  ml-1 pl-2 ${
        activeMenu ? "md:w-1/5 sm:w-full " : "md:w-1/6 sm:w-1/2 "
      }`}
    >
      <p>{category}</p>
      <p className="text-lg">{name}</p>
      <p>${price}</p>
      <CardContent>
        <Rating value={rating} readOnly />
        <Typography>{description}</Typography>
      </CardContent>

      <div className={`flex flex-col flex-wrap pb-2`}>
        <p> supply left:{supply}</p>
        <p> Yearly sales this year:{stat?.yearlySalesTotal}</p>
        <p> yearly units this year:{stat?.yearlyTotalSoldUnits}</p>
      </div>
    </div>
  );
};

export default ProductCard;

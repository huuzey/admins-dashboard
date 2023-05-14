import Header from "components/Header";
import ProductCard from "components/ProductCard";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "state";
import { useGetProductsQuery } from "state/api";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  if (data) {
    dispatch(setData(data));
  }
  const { Products, activeMenu, currentColor } = useSelector(
    (state) => state.global
  );
  if (isLoading) {
    return (
      <p
        className=" text-2xl flex items-center h-screen justify-center"
        style={{ color: currentColor }}
      >
        Generating products...
      </p>
    );
  }
  console.log(data);
  return (
    <div className={`${activeMenu ? "" : ""}`}>
      <div>
        <Header title="PRODUCTS" subtitle="See your list of products" />
        <div className={`flex  flex-wrap justify-evenly gap-2  ml-2 mt-2`}>
          {!isLoading &&
            Products &&
            Products?.map((product) => (
              <ProductCard product={product} key={product?._id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

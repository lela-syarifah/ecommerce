import React, { useState, useEffect } from "react";
import ProductDisplay from "../Product/ProductDisplay";
import ProductAdmin from "./ProductAdmin";

const setRefresh = ({ isRefresh, setRefresh }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isRefresh) {
      fetch("http://localhost:8000/products")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setRefresh(false);
          setProducts(data);
        })
        .catch((err) => {
          setRefresh(false);
          if (err.name === "AbortError") {
            console.log("fetch aborted.");
          }
        });
    }
  }, [isRefresh, setRefresh]);

  return (
    <div>
      {products.map((product) => (
        <ProductAdmin
          product={product}
          key={product.id}
          setRefresh={setRefresh}
        />
      ))}
    </div>
  );
};

export default setRefresh;

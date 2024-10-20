import React from "react";
import { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { ProductItem } from "./ProductItem";
import { Title } from "./Title";

export const BestSeller = () => {
  const { products } = useContext(ShopContext);

  const [bestSeller, setBestSeller] = React.useState([]);

  useEffect(() => {
    const bestProduct = products.filter((product) => product.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text_1={"Best"} text_2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis,
          consectetur.
        </p>
      </div>
      {
        <div className="grid grid-cols-2 gap-4 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {bestSeller.map((product, idx) => (
            <ProductItem
              key={idx}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      }
    </div>
  );
};

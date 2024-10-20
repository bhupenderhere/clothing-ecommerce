import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { Title } from "../components/Title";
import { ProductItem } from "../components/ProductItem";
export const Collection = () => {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(category.filter((item) => item !== e.target.value));
    } else {
      setCategory([...category, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      setSubCategory([...subCategory, e.target.value]);
    }
  };

  const applyFilters = () => {
    let tempProducts = products.slice();

    if (showSearch && search) {
      tempProducts = tempProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      tempProducts = tempProducts.filter((product) =>
        category.includes(product.category)
      );
    }
    if (subCategory.length > 0) {
      tempProducts = tempProducts.filter((product) =>
        subCategory.includes(product.subCategory)
      );
    }
    setFilteredProducts(tempProducts);
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showSearch]);

  const sortProducts = (e) => {
    let tempProducts = filteredProducts.slice();
    if (e.target.value === "low-high") {
      tempProducts.sort((a, b) => a.price - b.price);
    } else if (e.target.value === "high-low") {
      tempProducts.sort((a, b) => b.price - a.price);
    } else {
      tempProducts = products.slice();
    }
    setFilteredProducts(tempProducts);
  }


  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          className="my-2 text-xl inline-flex items-center cursor-pointer gap-2 uppercase"
          onClick={() => setShowFilters(!showFilters)}
        >
          <span>Filters</span>
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden ${showFilters ? "rotate-90" : ""}`}
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase mb-3 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />{" "}
              <span>Men</span>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />{" "}
              <span>Women</span>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />{" "}
              <span>Kids</span>
            </p>
          </div>
        </div>
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? "" : "hidden"
          } sm:block`}
        >
          <p className="uppercase mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />{" "}
              <span>Top Wear</span>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />{" "}
              <span>Bottom Wear</span>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />{" "}
              <span>Winter Wear</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text_1={"All"} text_2={"Collections"} />
          <select className="border-2 border-gray-300 text-sm px-2" onChange={sortProducts}>
            <option value="relevant">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filteredProducts.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { RelatedProducts } from "../components/RelatedProducts";

export const Product = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [sizeSelected, setSizeSelected] = useState("");

  const fetchProductData = async () => {
    const data = await products.find((product) => product._id === productId);
    setImage(data.image[0]);
    setProductData(data);
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);


  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-medium mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="text-3xl font-medium mt-5">
            {currency}&nbsp;{productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`border border-gray-300 w-8 h-8 flex items-center justify-center ${
                    sizeSelected === size ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSizeSelected(size)}
                >
                  <p>{size.toUpperCase()}</p>
                </button>
              ))}
            </div>
          </div>
          <button
            className="bg-black text-sm uppercase px-8 active:bg-gray-700 text-white py-3"
            onClick={() => addToCart(productData._id, sizeSelected)}
          >
            Add to Cart
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>Pay on delivery</p>
            <p>100% Original product</p>
            <p>Free delivery on order above {currency}500</p>
            <p>Easy return & exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is a platform that allows you to sell and buy
            products on the internet. It is a website that facilitates online
            transactions of goods and services through means of the transfer of
            information and funds over the internet. In the early days,
            e-commerce was done partially through emails and phone calls. Now,
            with a single website, anything and everything that a transaction
            needs, can be executed
          </p>
          <p>
            E-commerce websites are a great way to reach out to a larger market.
            It is a platform that allows you to sell to anyone, anywhere,
            without any geographical restrictions. It is a great way to increase
            your sales and grow your business. It is also a great way to
            increase your brand visibility and awareness. It is a great way to
            reach out to a larger market. It is a platform that allows you to
            sell to anyone, anywhere, without any geographical restrictions. It
            is a great way to increase your sales and grow your business. It is
            also a great way to increase your brand visibility and awareness.
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subcategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

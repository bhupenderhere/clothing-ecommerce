import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Title } from '../components/Title';

export const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text_1={"My"} text_2={"Orders"} />
      </div>
      <div>
        {products.slice(0, 4).map((product, index) => (
          <div
            key={index}
            className="py-4 text-gray-700 grid grid-cols-[3fr_0.5fr_0.5fr] sm:grid-cols-[3fr_1fr_1fr] items-center gap-4 border-b border-t"
          >
            <div className="flex items-start gap-6">
              <img src={product.image[0]} alt="" className="w-16 sm:w-20" />
              <div>
                <p className="text-xs sm:text-lg font-medium">{product.name}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency}&nbsp;{product.price}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>
                Order Date: <span className="text-gray-400">12-12-2021</span>
              </p>
              <p>
                Delivery Date: <span className="text-gray-400">20-12-2021</span>
              </p>
            </div>
            <div className="flex flex-col items-end">
              <p>Quantity: 1</p>
              <p>Size: M</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

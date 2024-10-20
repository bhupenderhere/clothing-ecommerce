import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import { ProductItem } from './ProductItem';
import { Title } from './Title';

export const RelatedProducts = ({category, subcategory}) => {

    const {products} = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);

    const fetchRelatedProducts = () => {
        const data = products.filter(product => product.category === category && product.subCategory === subcategory);
        setRelatedProducts(data);
    }

    useEffect(() => {
      fetchRelatedProducts();
    }, [category, subcategory]);

  return (
    <div className="my-24">
      <div className="text-3xl text-center font-medium py-2">
        <Title text_1={"Related"} text_2={"Products"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relatedProducts.map((product, index) => (
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
  );
}

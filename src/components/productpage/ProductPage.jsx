import React, { useState } from 'react';
import jsonData from './../../data.json';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../producttable/ProductTable';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);
  console.log(products.data);

  // function searchProduct() {
  //   const findProducts = products.data.filter(({ name, inStock }) => {
  //     if (!inStock) {
  //       return false;
  //     }
  //   });
  // }

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable products={products.data} />
    </div>
  );
}

export default ProductPage;

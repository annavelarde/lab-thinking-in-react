import React from 'react';
import ProductRow from '../productrow/ProductRow';

function ProductTable({ products }) {
  // console.log(products);

  return (
    <>
      {/* <h1> -- ProductTable</h1> */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <ProductRow
                productKey={product.id}
                name={product.name}
                price={product.price}
                inStock={product.stocked}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;

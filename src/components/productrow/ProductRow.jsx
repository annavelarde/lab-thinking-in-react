import React from 'react';

const ProductRow = ({ name, price, productKey, inStock }) => {
  return (
    <>
      {/* <h1> -- ProductRow</h1> */}
      <tr key={productKey}>
        {/* <td>
          {inStock ? <td>{name}</td> : <td style={{ color: 'red' }}>{name}</td>}
        </td> */}
        <td style={inStock ? null : { color: `red` }}>{name}</td>
        <td>{price}</td>
      </tr>
    </>
  );
};

export default ProductRow;

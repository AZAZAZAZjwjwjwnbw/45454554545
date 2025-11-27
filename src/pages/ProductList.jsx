// import React from 'react';
// import ProductCard from './ProductCard';
// import { useNavigate } from 'react-router-dom';

// const ProductList = ({ products }) => {
//   const navigate = useNavigate();

//   const handleProductDoubleClick = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   return (
//     <div className="product-list-container">
//       <div className="product-grid">
//         {products.map(product => (
//           <div key={product.id} className="product-item-wrapper">
//             <ProductCard
//               product={product}
//               onDoubleClick={() => handleProductDoubleClick(product.id)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
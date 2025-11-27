// import React from 'react';
// import StarRating from './StarRating'; // Исправлен импорт

// const ProductCard = ({ product, onDoubleClick }) => {
//   return (
//     <div
//       className="product-card"
//       onDoubleClick={onDoubleClick} // Исправлен синтаксис
//     >
//       <div className="card-image-container">
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="product-image"
//         />
//       </div>
//       <div className="card-content">
//         <h3 className="product-title">{product.title}</h3>
//         <p className="product-category">{product.category}</p>
//         <p className="product-description">{product.description}</p>
//         <div className="card-footer">
//           <span className="product-price">${product.price}</span>
//           <div className="rating">
//             <StarRating rating={product.rating} /> {/* Добавлен пропс rating */}
//             <span className="rating-value">{product.rating}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
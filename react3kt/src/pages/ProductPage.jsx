// import React, { useState, useEffect } from 'react';
// import ProductList from '../pages/ProductList';

// const ProductPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//           throw new Error('Ошибка загрузки данных');
//         }
//         const data = await response.json();
//         setProducts(data.products);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const handleProductDoubleClick = (productId) => {
//     setProducts(prevProducts => 
//       prevProducts.filter(product => product.id !== productId)
//     );
//   };

//   if (loading) {
//     return <div className="loading">Загрузка товаров...</div>;
//   }

//   if (error) {
//     return <div className="error">Ошибка: {error}</div>;
//   }

//   return (
//     <div className="product-page">
//       <h2 className="page-title">Наши товары</h2>
//       <ProductList 
//         products={products} 
//         onProductDoubleClick={handleProductDoubleClick}
//       />
//     </div>
//   );
// };

// export default ProductPage;
// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import StarRating from './StarRating';

// const ProductDetail = () => {
//   const navigate = useNavigate();
//   const { productId } = useParams();
//   const [product, setProduct] = React.useState(null);
//   const [loading, setLoading] = React.useState(true);

//   React.useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://dummyjson.com/products/${productId}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error('Error fetching product:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   if (loading) return <div>Loading...</div>;
//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="product-detail">
//       <button onClick={() => navigate(-1)} className="back-button">
//         ← Назад к товарам
//       </button>
      
//       <div className="product-detail-content">
//         <div className="product-images">
//           <img src={product.thumbnail} alt={product.title} />
//           <div className="image-gallery">
//             {product.images.map((image, index) => (
//               <img key={index} src={image} alt={`${product.title} ${index + 1}`} />
//             ))}
//           </div>
//         </div>
        
//         <div className="product-info">
//           <h1>{product.title}</h1>
//           <p className="category">{product.category}</p>
//           <p className="description">{product.description}</p>
          
//           <div className="price-section">
//             <span className="price">${product.price}</span>
//             <span className="discount">
//               {product.discountPercentage}% OFF
//             </span>
//           </div>
          
//           <div className="rating-section">
//             <StarRating rating={product.rating} />
//             <span className="rating-value">{product.rating}/5</span>
//           </div>
          
//           <div className="stock-info">
//             <span>В наличии: {product.stock} шт.</span>
//           </div>
          
//           <button className="add-to-cart">Добавить в корзину</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
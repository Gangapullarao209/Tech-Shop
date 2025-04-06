// import React from 'react';
// import productsData from '../Assets/productsData';

// function FeaturedItems() {


//     const productstyle ={
//         height:'180px',
//         width:'130px',
        
//     }

//     const productliststyle= {
//         display: "flex",
//         flexWrap: "wrap",
//         justifyContent: 'space-between',
//         background:'black',
//         color:'whitesmoke',
//         objectFit:'cover',
        
//       }
      
//       const productStyle1 ={
//         marginBottom: '20px' /* Add margin between products */
//       }
      
//    const h5style={
//     textalien:'center'
//    }

//    const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 4,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 4,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };




//   return (
//     <div   >
         
//     <div className="product-list" style={productliststyle}>
         
//       {productsData.map(product => (
//         <div key={product.id} className="product" style={productStyle1} >

             
//           <img src={product.images[0]} alt={product.title} style={productstyle} />
//           <h5>{product.title}</h5>
//           <p>{product.info}</p>
           
//            <p>{product.finalPrice}<span>
//           {product.originalPrice}</span></p>
//           </div>
//       ))}
//       </div>
//     </div>
//   );
// }

// export default FeaturedItems;
 
import React from 'react';
import productsData from '../Assets/productsData'; // adjust the path to your JSON file
import './Products.css'; // custom styles

const Products = () => {
  return (
    <div className="products-container">
      <h2 className="section-title">Top Products</h2>
      <div className="products-grid">
        {productsData.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.images[0]} alt={product.title} className="product-img" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-desc">{product.description}</p>
            <div className="price-section">
              <span className="current-price">₹{product.finalPrice}</span>
              <span className="old-price">₹{product.originalPrice}</span>
            </div>
            <button className="cart-btn">Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;


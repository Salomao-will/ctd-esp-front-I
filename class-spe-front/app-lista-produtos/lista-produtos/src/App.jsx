import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

export default function App() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    setProduct(response.data.products);
  }

  return (
    <>
      <div className="screen">
        <div className="header">
          <h1 className="title">Shop Products</h1>
        </div>

        <div className="div-product">
          <div className="container">
            {product.map((product) => (
              <div className="product" key={product.id}>
                <img
                  className="product-image"
                  src={product.images[0]}
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="product-title">{product.title}</h5>
                  <h5 className="product-brand">{product.brand}</h5>
                  <h5 className="product-price">R$ {product.price}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

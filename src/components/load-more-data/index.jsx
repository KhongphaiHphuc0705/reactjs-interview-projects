import { useState, useEffect } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setProducts((previousData) => [...previousData, ...result.products]);
        setLoading(false);
      }
      console.log(result);
    } catch (error) {
      console.error("Error fetching products: ", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => (
              <div key={product.id} className="product">
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        {disabled ? <p className="disabled-text">No more products to load</p> : <button onClick={() => setCount(count + 1)}>Load more</button>}
      </div>
    </div>
  );
}

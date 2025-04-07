import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
  /**Extracting the product ID from the URL */
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then(setProduct)
      .catch(() => setError("Failed to load product details."));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details">
      <img src={product.thumbnail} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <button onClick={() => navigate("/")}>← Go Back</button>
    </div>
  );
}

export default ProductDetail;

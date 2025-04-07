import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  /**Local state to track how many times this product has been added */
  const [localQty, setLocalQty] = useState(0);
  /** Handle adding product to cart and updating local quantity */
  const handleAddToCart = () => {
    dispatch(addToCart(product)); //Add product to cart
    setLocalQty((prev) => prev + 1); //Add local number.
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
      </Link>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart </button>
      {localQty > 0 && <span>+{localQty}</span>}
    </div>
  );
}

export default ProductItem;

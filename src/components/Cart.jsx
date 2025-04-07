import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
function Cart() {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <p>Your cart is empty!!!</p>
        <button onClick={() => navigate("/")}>Click to Shop..</button>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
export default Cart;

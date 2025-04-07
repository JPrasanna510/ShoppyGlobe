import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img
        src={item.thumbnail}
        alt={item.title}
        style={{ width: 80, height: 80, objectFit: "cover" }}
      />
      <div>
        <h4>{item.title}</h4>
        <p>
          ${item.price} × {item.quantity}
        </p>
      </div>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}

export default CartItem;

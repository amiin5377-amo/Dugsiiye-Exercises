import CartContext from "./CartContext";
import { useContext } from "react";

function CartSummary() {
  const { cartItems, removeItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItems(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartSummary;
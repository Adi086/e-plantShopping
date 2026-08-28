import { useSelector, useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Shopping Cart</h1>

      <h2>Total Plants: {totalItems}</h2>
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {items.map(item => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>

                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  -
                </button>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-actions">
        <button onClick={() => window.location.hash = 'plants'}>
          Continue Shopping
        </button>

        <button onClick={() => alert('Coming Soon')}>
          Checkout
        </button>
      </div>
    </main>
  );
}

export default CartItem;

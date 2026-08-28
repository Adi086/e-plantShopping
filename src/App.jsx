import { useSelector } from 'react-redux';
import { useState } from 'react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

function Header({ page, setPage }) {
  const cart = useSelector(state => state.cart.items);
  const quantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2 onClick={() => setPage('home')}>Paradise Nursery</h2>

      <div>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('plants')}>Plants</button>
        <button onClick={() => setPage('cart')}>
          Cart ({quantity})
        </button>
      </div>
    </nav>
  );
}

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      {page !== 'home' && (
        <Header page={page} setPage={setPage} />
      )}

      {page === 'home' && (
        <main className="landing">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>

            <p>
              Bring nature into your home with our beautiful collection
              of carefully selected houseplants.
            </p>

            <button onClick={() => setPage('plants')}>
              Get Started
            </button>
          </div>

          <AboutUs />
        </main>
      )}

      {page === 'plants' && <ProductList />}

      {page === 'cart' && <CartItem />}
    </div>
  );
}

export default App;

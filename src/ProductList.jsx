import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './CartSlice';

const products = [
  {
    id: 1,
    name: 'Aloe Vera',
    category: 'Medicinal Plants',
    price: 15,
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80',
    description: 'A useful and attractive plant known for its soothing properties.'
  },
  {
    id: 2,
    name: 'Snake Plant',
    category: 'Medicinal Plants',
    price: 25,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80',
    description: 'A hardy indoor plant that is easy to maintain.'
  },
  {
    id: 3,
    name: 'Lavender',
    category: 'Aromatic Plants',
    price: 18,
    image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=500&q=80',
    description: 'A fragrant plant that adds a relaxing atmosphere.'
  },
  {
    id: 4,
    name: 'Mint',
    category: 'Aromatic Plants',
    price: 12,
    image: 'https://images.unsplash.com/photo-1622611600110-2c3f3d7e6b98?auto=format&fit=crop&w=500&q=80',
    description: 'A fresh aromatic herb that grows well indoors.'
  },
  {
    id: 5,
    name: 'Peace Lily',
    category: 'Decorative Plants',
    price: 22,
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=500&q=80',
    description: 'An elegant flowering plant perfect for home decoration.'
  },
  {
    id: 6,
    name: 'Monstera',
    category: 'Decorative Plants',
    price: 30,
    image: 'https://images.unsplash.com/photo-1614594575924-ae7c8d4b4a2b?auto=format&fit=crop&w=500&q=80',
    description: 'A tropical plant with large distinctive leaves.'
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <main className="products-page">
      <h1>Our Houseplants</h1>

      {categories.map(category => (
        <section key={category} className="category">
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter(product => product.category === category)
              .map(product => {
                const added = cart.some(item => item.id === product.id);

                return (
                  <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />

                    <h3>{product.name}</h3>

                    <p>{product.description}</p>

                    <strong>${product.price}</strong>

                    <button
                      disabled={added}
                      onClick={() => dispatch(addToCart(product))}
                    >
                      {added ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;

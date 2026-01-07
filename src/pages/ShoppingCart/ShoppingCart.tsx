import React from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useApp } from '../../context/AppContext';
import { getFrequentlyBoughtTogether } from '../../data/mockData';
import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '../../components/Button/Button';
import styles from './ShoppingCart.module.css';

const ShoppingCart: React.FC = () => {
  const { cart, removeFromCart, updateCartQuantity, addToCart, getCartSubtotal } = useApp();
  const recommendations = getFrequentlyBoughtTogether(cart);

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = cart.find((item) => item.product.id === productId);
    if (item) {
      updateCartQuantity(productId, item.quantity + delta);
    }
  };

  const subtotal = getCartSubtotal();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <Link to="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/products" className={styles.backLink}>
          ← Continue Shopping
        </Link>

        <h1 className={styles.title}>Shopping cart</h1>
        <p className={styles.subtitle}>You have {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart.</p>

        <div className={styles.content}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.product.id} className={styles.cartItem}>
                <img
                  src={item.product.image || '/images/jelly-grip.jpg'}
                  alt={item.product.name}
                  className={styles.itemImage}
                />
                <div className={styles.itemInfo}>
                  <h3 className={styles.itemName}>{item.product.name}</h3>
                  <p className={styles.itemBrand}>{item.product.brand}</p>
                  {item.product.shade && <p className={styles.itemShade}>Shade: {item.product.shade}</p>}
                </div>
                <div className={styles.itemQuantity}>
                  <button
                    onClick={() => handleQuantityChange(item.product.id, -1)}
                    className={styles.quantityButton}
                  >
                    −
                  </button>
                  <span className={styles.quantityValue}>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.product.id, 1)}
                    className={styles.quantityButton}
                  >
                    +
                  </button>
                </div>
                <div className={styles.itemPrice}>${item.product.price.toFixed(2)}</div>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className={styles.removeButton}
                >
                  <DeleteIcon />
                </button>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <div className={styles.summaryContent}>
              <p className={styles.subtotal}>Subtotal: ${subtotal.toFixed(2)}</p>
              <p className={styles.note}>Total is calculated at checkout.</p>
              <Link to="/checkout">
                <Button className={styles.checkoutButton}>Checkout &gt;</Button>
              </Link>
            </div>
          </div>
        </div>

        {recommendations.length > 0 && (
          <section className={styles.recommendations}>
            <h2 className={styles.recommendationsTitle}>Frequently bought together</h2>
            <div className={styles.recommendationsGrid}>
              {recommendations.map((product) => (
                <div key={product.id} className={styles.recommendationCard}>
                  <ProductCard product={product} />
                  <div className={styles.recommendationActions}>
                    <Button
                      variant="outline"
                      onClick={() => {}}
                      className={styles.notInterestedButton}
                    >
                      Not interested
                    </Button>
                    <Button
                      onClick={() => addToCart(product)}
                      className={styles.addButton}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;


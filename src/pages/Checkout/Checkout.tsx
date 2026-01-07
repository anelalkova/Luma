import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LocalShipping, Inventory, CreditCard, AttachMoney } from '@mui/icons-material';
import { useApp } from '../../context/AppContext';
import Button from '../../components/Button/Button';
import styles from './Checkout.module.css';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, user, getCartSubtotal, getCartTotal, getCartDiscount, createOrder } = useApp();

  const [formData, setFormData] = useState({
    fullName: user.name,
    email: user.email,
    phone: '+389 1234 567',
    shippingMethod: 'delivery' as 'delivery' | 'pickup',
    city: 'Skopje',
    street: 'Partizanska',
    streetNumber: '7',
    paymentMethod: 'card' as 'card' | 'cash',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    saveInfo: false,
  });

  const subtotal = getCartSubtotal();
  const discount = getCartDiscount();
  const delivery = formData.shippingMethod === 'delivery' ? 0 : 0;
  const total = getCartTotal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const order = createOrder({
      userId: user.id,
      items: cart,
      subtotal,
      discount,
      delivery,
      total,
      estimatedDelivery: new Date(Date.now() + 42 * 24 * 60 * 60 * 1000).toISOString(),
      status: 'confirmed',
      shippingAddress: {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        city: formData.shippingMethod === 'delivery' ? formData.city : undefined,
        street: formData.shippingMethod === 'delivery' ? formData.street : undefined,
        streetNumber: formData.shippingMethod === 'delivery' ? formData.streetNumber : undefined,
      },
      paymentMethod: {
        type: formData.paymentMethod,
        cardNumber: formData.cardNumber ? `****${formData.cardNumber.slice(-4)}` : undefined,
        cardType: formData.cardNumber.startsWith('4') ? 'visa' : 'mastercard',
      },
    });

    navigate(`/orders/${order.id}`);
  };

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your cart is empty</h2>
        <Button onClick={() => navigate('/products')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/cart" className={styles.backLink}>
          ← Back to cart
        </Link>

        <h1 className={styles.title}>Checkout</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formSection}>
            <h2 className={styles.sectionTitle}>Personal Information</h2>

            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone number</label>
              <div className={styles.phoneInput}>
                <select className={styles.countryCode}>
                  <option>🇲🇰 +389</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Shipping method</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="delivery"
                    checked={formData.shippingMethod === 'delivery'}
                    onChange={handleInputChange}
                  />
                  <span><LocalShipping /> Delivery</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="pickup"
                    checked={formData.shippingMethod === 'pickup'}
                    onChange={handleInputChange}
                  />
                  <span><Inventory /> Pick up</span>
                </label>
              </div>
            </div>

            {formData.shippingMethod === 'delivery' && (
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="street">Street</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="streetNumber">Street number</label>
                  <input
                    type="text"
                    id="streetNumber"
                    name="streetNumber"
                    value={formData.streetNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
              <label>Payment method</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleInputChange}
                  />
                  <span><CreditCard /> Card</span>
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleInputChange}
                  />
                  <span><AttachMoney /> Cash</span>
                </label>
              </div>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="cardNumber">Card number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    placeholder="1234 1234 1234 1234"
                    maxLength={19}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="expirationDate">Expiration date</label>
                  <input
                    type="text"
                    id="expirationDate"
                    name="expirationDate"
                    value={formData.expirationDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength={5}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    placeholder="CVC"
                    maxLength={3}
                    required
                  />
                </div>
              </div>
            )}

            <div className={styles.formGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                />
                <span>Save information for future orders</span>
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className={styles.orderSummary}>
            <h2 className={styles.sectionTitle}>Order summary</h2>
            <div className={styles.summaryDetails}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Discount</span>
                <span>(20%) - ${discount.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className={styles.summaryRowTotal}>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button type="submit" className={styles.confirmButton}>
              Confirm order &gt;
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

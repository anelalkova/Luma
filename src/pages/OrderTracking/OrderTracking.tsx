import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import RefreshIcon from '@mui/icons-material/Refresh';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useApp } from '../../context/AppContext';
import Button from '../../components/Button/Button';
import styles from './OrderTracking.module.css';

const OrderTracking: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { orders } = useApp();

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return (
      <div className={styles.notFound}>
        <h2>Order not found</h2>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  const getStatusIndex = (status: string) => {
    const statuses = ['confirmed', 'shipped', 'outForDelivery', 'delivered'];
    return statuses.indexOf(status);
  };

  const statusIndex = getStatusIndex(order.status);
  const statusSteps = [
    { label: 'Order Confirmed', date: 'Sun, 4th Jan' },
    { label: 'Shipped', date: 'Sun, 4th Jan' },
    { label: 'Out For Delivery', date: 'Sun, 4th Jan' },
    { label: 'Delivered', date: 'Expected by, Mon 16th' },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <nav className={styles.breadcrumb}>
          <Link to="/account">Account</Link>
          <span> &gt; </span>
          <Link to="/orders">Orders</Link>
          <span> &gt; </span>
          <span>ID {order.id}</span>
        </nav>

        <div className={styles.header}>
          <div>
            <h1 className={styles.orderId}>Order ID: {order.id}</h1>
            <p className={styles.orderDate}>
              Order date: {formatDate(order.orderDate)}
            </p>
            <p className={styles.deliveryDate}>
              <CalendarTodayIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }} />
              Estimated delivery: {formatDate(order.estimatedDelivery)}
            </p>
          </div>
          <div className={styles.headerActions}>
            <Button variant="outline"><DescriptionIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }} /> Invoice</Button>
            <Button variant="outline"><RefreshIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }} /> Track order</Button>
          </div>
        </div>

        <div className={styles.statusTracker}>
          {statusSteps.map((step, index) => (
            <div
              key={index}
              className={`${styles.statusStep} ${index <= statusIndex ? styles.active : ''} ${
                index === statusIndex ? styles.current : ''
              }`}
            >
              <div className={styles.statusCircle}>
                {index < statusIndex && '✓'}
              </div>
              <div className={styles.statusInfo}>
                <span className={styles.statusLabel}>{step.label}</span>
                <span className={styles.statusDate}>{step.date}</span>
              </div>
              {index < statusSteps.length - 1 && (
                <div
                  className={`${styles.statusLine} ${index < statusIndex ? styles.active : ''}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className={styles.orderItems}>
          <h2 className={styles.sectionTitle}>Order Items</h2>
          {order.items.map((item) => (
            <div key={item.product.id} className={styles.orderItem}>
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
              <div className={styles.itemQuantity}>Qty: {item.quantity}</div>
              <div className={styles.itemPrice}>${item.product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailsSection}>
            <h3 className={styles.detailsTitle}>Payment</h3>
            <p className={styles.detailsText}>
              Method: {order.paymentMethod.type === 'card' ? <CreditCardIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }} /> : <AttachMoneyIcon style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.25rem' }} />}
              {order.paymentMethod.type === 'card'
                ? `${order.paymentMethod.cardType?.toUpperCase()} ${order.paymentMethod.cardNumber}`
                : 'Cash'}
            </p>
          </div>

          <div className={styles.detailsSection}>
            <h3 className={styles.detailsTitle}>Delivery</h3>
            {order.shippingAddress.street || order.shippingAddress.city || order.shippingAddress.streetNumber ? (
              <p className={styles.detailsText}>
                {order.shippingAddress.street} {order.shippingAddress.streetNumber}{' '}
                {order.shippingAddress.city}
              </p>
            ) : (
              <p className={styles.detailsText}>Pick up at store</p>
            )}
            <p className={styles.detailsText}>Phone: {order.shippingAddress.phone}</p>
          </div>
        </div>
        <div className={styles.helpSection}>
          <h3 className={styles.helpTitle}>Need Help?</h3>
          <div className={styles.helpLinks}>
            <a href="#" className={styles.helpLink}>
              Order Issues →
            </a>
            <a href="#" className={styles.helpLink}>
              Delivery Info →
            </a>
            <a href="#" className={styles.helpLink}>
              Returns →
            </a>
          </div>
        </div>
        <div className={styles.orderSummary}>
          <h2 className={styles.sectionTitle}>Order Summary</h2>
          <div className={styles.summaryDetails}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${order.subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Discount</span>
              <span>(20%) - ${order.discount.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery</span>
              <span>${order.delivery.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRowTotal}>
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;


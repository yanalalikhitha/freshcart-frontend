import { Link } from "react-router-dom";

function OrderStatus() {
  return (
    <div className="products">
      <h2>Order Placed Successfully! 🎉</h2>

      <div className="product-card">
        <div className="product-image">📦</div>

        <h3>Thank you for your order!</h3>

        <p>Your grocery order has been placed successfully.</p>

        <p>
          Order Status: <strong>Confirmed</strong>
        </p>

        <p>
          Total Amount: <strong>₹120</strong>
        </p>

        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default OrderStatus;
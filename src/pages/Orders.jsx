import React from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1>📦 My Orders</h1>

      {orders.length === 0 ? (
        <h2>No orders found</h2>
      ) : (
        orders.map((order) => (
          <div
            key={order.orderId}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <h2>📦 Order #{order.orderId}</h2>

            {order.items.map((item) => (
              <div key={item.id}>
                <p>
                  {item.emoji} {item.name} × {item.quantity}
                </p>
              </div>
            ))}

            <h3>Total: ₹{order.total}</h3>

            <p>
              <strong>Order Status:</strong> {order.status}
            </p>

            <button
              onClick={() =>
                navigate(`/track-order/${order.orderId}`)
              }
              style={{
                padding: "10px 20px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Track Order 🚚
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Orders;
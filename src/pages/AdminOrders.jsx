import React, { useState } from "react";

function AdminOrders() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const updateStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId
        ? { ...order, status: newStatus }
        : order
    );

    setOrders(updatedOrders);

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    alert("Order status updated! ✅");
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>👨‍💼 Admin - Manage Orders</h1>

      {orders.length === 0 ? (
        <h2>No orders available</h2>
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

            <p>
              <strong>Customer:</strong> {order.name}
            </p>

            <p>
              <strong>Phone:</strong> {order.phone}
            </p>

            <p>
              <strong>Address:</strong> {order.address}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.total}
            </p>

            <p>
              <strong>Current Status:</strong>{" "}
              {order.status}
            </p>

            <h3>Update Order Status</h3>

            <select
              value={order.status}
              onChange={(e) =>
                updateStatus(
                  order.orderId,
                  e.target.value
                )
              }
              style={{
                padding: "10px",
                fontSize: "16px",
                borderRadius: "5px",
              }}
            >
              <option value="Order Confirmed">
                Order Confirmed
              </option>

              <option value="Preparing Order">
                Preparing Order
              </option>

              <option value="Out for Delivery">
                Out for Delivery
              </option>

              <option value="Delivered">
                Delivered
              </option>
            </select>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminOrders;
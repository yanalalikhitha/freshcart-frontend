import React from "react";
import { useParams } from "react-router-dom";

function TrackOrder() {
  const { orderId } = useParams();

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const order = orders.find(
    (item) => item.orderId === orderId
  );

  if (!order) {
    return (
      <div style={{ padding: "30px" }}>
        <h1>❌ Order Not Found</h1>
      </div>
    );
  }

  const steps = [
    {
      name: "Order Confirmed",
      icon: "✅",
      description: "Your order has been confirmed.",
    },
    {
      name: "Preparing Order",
      icon: "👨‍🍳",
      description: "Your groceries are being prepared.",
    },
    {
      name: "Out for Delivery",
      icon: "🚚",
      description: "Your order is on the way.",
    },
    {
      name: "Delivered",
      icon: "🏠",
      description: "Your order has been delivered.",
    },
  ];

  const currentStep = steps.findIndex(
    (step) => step.name === order.status
  );

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>🚚 Track Order</h1>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "25px",
        }}
      >
        <h2>Order #{order.orderId}</h2>

        <p>
          <strong>Total:</strong> ₹{order.total}
        </p>

        <p>
          <strong>Delivery Address:</strong>{" "}
          {order.address}
        </p>
      </div>

      <h2>📍 Order Status</h2>

      {steps.map((step, index) => {
        const completed = index <= currentStep;

        return (
          <div
            key={step.name}
            style={{
              padding: "18px",
              marginBottom: "12px",
              borderRadius: "10px",
              border: completed
                ? "2px solid green"
                : "1px solid #ddd",
              backgroundColor: completed
                ? "#f0fff0"
                : "#f8f8f8",
            }}
          >
            <h3>
              {completed ? "✅" : "⚪"} {step.icon}{" "}
              {step.name}
            </h3>

            {completed && (
              <p>{step.description}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TrackOrder;
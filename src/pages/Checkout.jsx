import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (!name || !phone || !address) {
      alert("Please fill all delivery details.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const order = {
      orderId: "FC" + Math.floor(1000 + Math.random() * 9000),
      items: cart,
      total: total,
      name: name,
      phone: phone,
      address: address,

      // Initial status
      status: "Order Confirmed",
    };

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order placed successfully! 🎉");

    navigate("/orders");
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>💳 Checkout</h1>

      <h2>Order Summary</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>
            {item.emoji} {item.name}
          </h3>

          <p>Quantity: {item.quantity}</p>

          <p>
            Price: ₹{item.price * item.quantity}
          </p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <hr />

      <h2>📍 Delivery Details</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          boxSizing: "border-box",
        }}
      />

      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "12px",
          marginBottom: "12px",
          boxSizing: "border-box",
        }}
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          height: "100px",
          padding: "12px",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={placeOrder}
        style={{
          width: "100%",
          padding: "14px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
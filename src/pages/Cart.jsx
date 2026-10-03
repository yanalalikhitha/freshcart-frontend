
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  };

  // Increase / decrease quantity
  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: Math.max(
            1,
            (item.quantity || 1) + change
          ),
        };
      }

      return item;
    });

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Update cart badge
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // Remove product
  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

    // Update cart badge
    window.dispatchEvent(
      new Event("cartUpdated")
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) =>
      sum +
      item.price * (item.quantity || 1),
    0
  );

  // Empty cart
  if (cart.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1>🛒 My Cart</h1>

        <div
          style={{
            fontSize: "70px",
            margin: "30px",
          }}
        >
          🛍️
        </div>

        <h2>Your cart is empty</h2>

        <p>
          Add some fresh groceries to your cart.
        </p>

        <Link to="/products">
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#198754",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Shop Now 🛒
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
        padding: "30px 20px",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontSize: "45px",
          marginBottom: "30px",
        }}
      >
        🛒 My Cart
      </h1>

      {/* Cart Products */}
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px",
            padding: "25px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "14px",
            backgroundColor: "white",
            boxShadow:
              "0 3px 10px rgba(0,0,0,0.10)",
          }}
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "125px",
              height: "125px",
              objectFit: "cover",
              borderRadius: "12px",
            }}
          />

          {/* Product Information */}
          <div
            style={{
              flex: 1,
            }}
          >
            <h2
              style={{
                margin: "0 0 8px",
                fontSize: "28px",
              }}
            >
              {item.name}
            </h2>

            <p
              style={{
                color: "#666",
                fontSize: "20px",
                margin: "5px 0",
              }}
            >
              ₹{item.price}
            </p>

            {/* Quantity Controls */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginTop: "15px",
              }}
            >
              {/* Minus Button */}
              <button
                onClick={() =>
                  updateQuantity(item.id, -1)
                }
                style={{
                  width: "45px",
                  height: "45px",
                  border: "none",
                  backgroundColor: "#198754",
                  color: "white",
                  borderRadius: "7px",
                  cursor: "pointer",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                −
              </button>

              {/* Quantity */}
              <strong
                style={{
                  fontSize: "20px",
                  minWidth: "30px",
                  textAlign: "center",
                }}
              >
                {item.quantity || 1}
              </strong>

              {/* Plus Button */}
              <button
                onClick={() =>
                  updateQuantity(item.id, 1)
                }
                style={{
                  width: "45px",
                  height: "45px",
                  border: "none",
                  backgroundColor: "#198754",
                  color: "white",
                  borderRadius: "7px",
                  cursor: "pointer",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                +
              </button>
            </div>
          </div>

          {/* Price and Remove */}
          <div
            style={{
              textAlign: "right",
              minWidth: "110px",
            }}
          >
            <h2
              style={{
                color: "#555",
                marginTop: "0",
              }}
            >
              ₹
              {item.price *
                (item.quantity || 1)}
            </h2>

            <button
              onClick={() =>
                removeItem(item.id)
              }
              style={{
                border: "none",
                backgroundColor: "#dc3545",
                color: "white",
                padding: "10px 16px",
                borderRadius: "7px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* Cart Summary */}
      <div
        style={{
          marginTop: "35px",
          padding: "30px",
          borderRadius: "14px",
          backgroundColor: "#f5f5f5",
          textAlign: "right",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "20px",
          }}
        >
          Total: ₹{total}
        </h2>

        <Link to="/checkout">
          <button
            style={{
              padding: "15px 35px",
              backgroundColor: "#008000",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: "bold",
            }}
          >
            Proceed to Checkout →
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cart;
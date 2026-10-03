import React, { useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

  const addToCart = (product) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert(`${product.name} added to cart! 🛒`);
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
          }}
        >
          <h2>🤍 Your wishlist is empty</h2>

          <p>
            Add your favorite products to your
            wishlist.
          </p>
        </div>
      ) : (
        <>
          <p>
            <strong>
              {wishlist.length} product
              {wishlist.length !== 1 ? "s" : ""} in
              your wishlist
            </strong>
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "25px",
              marginTop: "25px",
            }}
          >
            {wishlist.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  padding: "15px",
                  textAlign: "center",
                  boxShadow:
                    "0 3px 10px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    border: "none",
                    background: "white",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                >
                  ❤️
                </button>

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <h2>{product.name}</h2>

                <p
                  style={{
                    color: "#777",
                  }}
                >
                  {product.category}
                </p>

                <p
                  style={{
                    color: "green",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginBottom: "10px",
                  }}
                >
                  Add to Cart 🛒
                </button>

                <button
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                  style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    fontSize: "15px",
                  }}
                >
                  Remove ❤️
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Wishlist;
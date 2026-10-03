
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";
import Orders from "./pages/Orders";
import TrackOrder from "./pages/TrackOrder";
import AdminOrders from "./pages/AdminOrders";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";

function Home() {
  return (
    <div className="app">
      <header className="navbar">
        <h1>🛒 FreshCart</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>

          <Link to="/cart">
            Cart 🛒
          </Link>

          <Link to="/orders">My Orders 📦</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

          <Link to="/wishlist">
            Wishlist ❤️
          </Link>
          <Link to="/profile">
  Profile 👤
</Link>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h2>Fresh Groceries Delivered to Your Door</h2>

          <p>
            Shop fresh fruits, vegetables, dairy products and daily essentials
            from the comfort of your home.
          </p>

          <Link to="/products">
            <button>Shop Now</button>
          </Link>
        </div>

        <div className="hero-icon">🥦🥕🍎</div>
      </section>

      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-container">
          <div className="category">
            🥦
            <span>Vegetables</span>
          </div>

          <div className="category">
            🍎
            <span>Fruits</span>
          </div>

          <div className="category">
            🥛
            <span>Dairy</span>
          </div>

          <div className="category">
            🍞
            <span>Bakery</span>
          </div>
        </div>
      </section>

      <section className="products">
        <h2>Popular Products</h2>

        <div className="product-container">
          <div className="product-card">
            <div className="product-image">🍎</div>
            <h3>Fresh Apples</h3>
            <p>₹120 / kg</p>

            <Link to="/cart">
              <button>Add to Cart</button>
            </Link>
          </div>

          <div className="product-card">
            <div className="product-image">🥦</div>
            <h3>Fresh Broccoli</h3>
            <p>₹80 / kg</p>

            <Link to="/cart">
              <button>Add to Cart</button>
            </Link>
          </div>

          <div className="product-card">
            <div className="product-image">🥛</div>
            <h3>Fresh Milk</h3>
            <p>₹60 / litre</p>

            <Link to="/cart">
              <button>Add to Cart</button>
            </Link>
          </div>

          <div className="product-card">
            <div className="product-image">🍞</div>
            <h3>Brown Bread</h3>
            <p>₹45</p>

            <Link to="/cart">
              <button>Add to Cart</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <p>© 2026 FreshCart - Online Grocery Delivery System</p>
      </footer>
    </div>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce(
      (total, item) => total + (item.quantity || 1),
      0
    );

    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();

    window.addEventListener(
      "storage",
      updateCartCount
    );

    return () => {
      window.removeEventListener(
        "storage",
        updateCartCount
      );
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/order-status"
          element={<OrderStatus />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/track-order/:orderId"
          element={<TrackOrder />}
        />

        <Route
          path="/admin-orders"
          element={<AdminOrders />}
        />

        <Route
          path="/wishlist"
          element={<Wishlist />}
        />
        <Route
  path="/profile"
  element={<Profile />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


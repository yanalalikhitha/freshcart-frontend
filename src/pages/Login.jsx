import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="products">
      <h2>Login 🔐</h2>

      <div className="product-card">
        <h3>Welcome to FreshCart</h3>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <br />
        <br />

        <Link to="/products">
          <button>Login</button>
        </Link>

        <p>New to FreshCart?</p>

        <Link to="/register">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
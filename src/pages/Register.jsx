import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="products">
      <h2>Create Account 👤</h2>

      <div className="product-card">
        <h3>Join FreshCart</h3>

        <input
          type="text"
          placeholder="Enter your name"
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Create Password"
        />

        <br />
        <br />

        <button>Create Account</button>

        <p>Already have an account?</p>

        <Link to="/login">
          <button>Go to Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;
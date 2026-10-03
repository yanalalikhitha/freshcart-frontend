import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedProfile =
      JSON.parse(localStorage.getItem("profile"));

    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "profile",
      JSON.stringify(profile)
    );

    setEditing(false);
    setMessage("✅ Profile updated successfully!");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  const logout = () => {
    localStorage.removeItem("profile");

    setProfile({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    setMessage("✅ Logged out successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      {/* Heading */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "#198754",
            color: "white",
            fontSize: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          👤
        </div>

        <h1>My Profile</h1>

        <p>
          Manage your FreshCart account
        </p>
      </div>

      {/* Profile Card */}
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.10)",
        }}
      >
        {/* Name */}
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          👤 Full Name
        </label>

        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          disabled={!editing}
          placeholder="Enter your name"
          style={inputStyle}
        />

        {/* Email */}
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          📧 Email
        </label>

        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          disabled={!editing}
          placeholder="Enter your email"
          style={inputStyle}
        />

        {/* Phone */}
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          📱 Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          disabled={!editing}
          placeholder="Enter your phone number"
          style={inputStyle}
        />

        {/* Address */}
        <label
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          🏠 Delivery Address
        </label>

        <textarea
          name="address"
          value={profile.address}
          onChange={handleChange}
          disabled={!editing}
          placeholder="Enter your delivery address"
          rows="4"
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
        />

        {/* Message */}
        {message && (
          <p
            style={{
              color: "green",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {message}
          </p>
        )}

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {!editing ? (
            <button
              onClick={() => setEditing(true)}
              style={{
                ...buttonStyle,
                backgroundColor: "#198754",
              }}
            >
              ✏️ Edit Profile
            </button>
          ) : (
            <button
              onClick={saveProfile}
              style={{
                ...buttonStyle,
                backgroundColor: "#198754",
              }}
            >
              💾 Save Profile
            </button>
          )}

          <button
            onClick={logout}
            style={{
              ...buttonStyle,
              backgroundColor: "#dc3545",
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginTop: "25px",
        }}
      >
        <Link
          to="/orders"
          style={quickLinkStyle}
        >
          📦
          <strong>My Orders</strong>
          <span>View your orders</span>
        </Link>

        <Link
          to="/wishlist"
          style={quickLinkStyle}
        >
          ❤️
          <strong>Wishlist</strong>
          <span>View saved products</span>
        </Link>

        <Link
          to="/products"
          style={quickLinkStyle}
        >
          🛒
          <strong>Shop Products</strong>
          <span>Continue shopping</span>
        </Link>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "20px",
  border: "1px solid #ccc",
  borderRadius: "7px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "12px 20px",
  color: "white",
  border: "none",
  borderRadius: "7px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

const quickLinkStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  padding: "20px",
  borderRadius: "12px",
  backgroundColor: "#f5f5f5",
  color: "#222",
  textDecoration: "none",
  textAlign: "center",
  fontSize: "16px",
};

export default Profile;
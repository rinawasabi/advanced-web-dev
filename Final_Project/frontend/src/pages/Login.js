import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

// Login page with name input
function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle login button click or Enter key
  const handleLogin = () => {
    if (username.trim() === "") {
      setError("Name is required!");
      return;
    }

    // Generate a random temporary user ID
    const tempId = Math.floor(Math.random() * 100000);

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify({ id: tempId, username }));

    navigate("/home");
  };

  return (
    <div className="login-font">
      <div className="login-container">
        {/* Logo */}
        <img src="/logo.png" alt="Makunote Logo" className="login-logo" />

        {/* Prompt */}
        <h4 className="mb-3">What's your name?</h4>

        {/* Input field */}
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin();
          }}
          className="login-input"
        />

        {/* Error message */}
        {error && (
          <div className="text-danger mt-2" style={{ fontSize: "0.9rem" }}>
            {error}
          </div>
        )}

        {/* Submit button */}
        <button className="login-button" onClick={handleLogin}>
          Start Cooking! 🥕🍳
        </button>
      </div>
    </div>
  );
}

export default Login;

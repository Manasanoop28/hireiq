import React, { useState } from "react";
import { supabase } from "../supabase";
import "./AuthPage.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Registration successful! Please check your email to verify your account.");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="login-card">
          <h1 className="title">Create your account</h1>
          <p className="subtitle">Enter email and password to sign up</p>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Create a password" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className="primary-btn" onClick={handleRegister} disabled={loading}>
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          {message && <p className="msg">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;

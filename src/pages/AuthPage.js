import React, { useState } from "react";
import { supabase } from "../supabase";
import "./AuthPage.css";

function AuthPage() {
  const [mode, setMode] = useState("login"); // login | register

  return (
    <div className="auth-container">
      {/* LEFT SIDE */}
     <div className="auth-left">
  <div className="auth-left-content">
    <h1>HireIQ</h1>
    <p>AI-powered resume screening & ATS scoring platform</p>

    <ul>
      <li>Upload resumes & job descriptions</li>
      <li>Check ATS score & skills</li>
      <li>Make faster hiring decisions</li>
    </ul>
  </div>
</div>


      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-box">
          {mode === "login" ? (
            <Login goToRegister={() => setMode("register")} />
          ) : (
            <Register goToLogin={() => setMode("login")} />
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= LOGIN ================= */

function Login({ goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      window.location.href = "/dashboard";
    }

    setLoading(false);
  };

 const oauth = (provider) =>
  supabase.auth.signInWithOAuth({ provider });

return (
  <div className="login-card">
    <h1 className="title">Welcome Back!</h1>
    <p className="subtitle">
      Sign in to access your dashboard and continue optimizing your QA process.
    </p>

    <div className="field">
      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="field">
      <label>Password</label>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

    <div className="forgot">Forgot Password?</div>

    {/* SIGN IN BUTTON */}
    <button
      className="primary-btn"
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? "Signing in..." : "Sign In"}
    </button>

    <div className="divider">OR</div>

    {/* SOCIAL LOGIN BUTTONS */}
    <button className="social-btn" onClick={() => oauth("google")}>
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
      />
      Continue with Google
    </button>

    <button className="social-btn" onClick={() => oauth("linkedin_oidc")}>
      <img
        src="https://www.svgrepo.com/svg/475661/linkedin-color"
        alt="linkedin"
      />
      Continue with LinkedIn
    </button>

    <button className="social-btn" onClick={() => oauth("github")}>
      <img
        src="https://www.svgrepo.com/show/512317/github-142.svg"
        alt="GitHub"
      />
      Continue with GitHub
    </button>

    {message && <p className="msg error">{message}</p>}

    <p className="switch">
      Don’t have an account?{" "}
      <span onClick={goToRegister}>Sign Up</span>
    </p>
  </div>
);
}

/* ================= REGISTER ================= */

function Register({ goToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Registration successful! Please check your email.");
    }

    setLoading(false);
  };

  return (
    <div className="login-card">
      <h1 className="title">Create Account</h1>
      <p className="subtitle">Start using HR Resume Analyzer</p>

      <div className="field">
        <label>Email</label>
        <input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Password</label>
        <input
          type="password"
          placeholder="Create password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="primary-btn" onClick={handleRegister} disabled={loading}>
        {loading ? "Creating account..." : "Sign Up"}
      </button>

      {message && <p className="msg">{message}</p>}

      <p className="switch">
        Already have an account?{" "}
        <span onClick={goToLogin}>Sign In</span>
      </p>
    </div>
  );
}

export default AuthPage;

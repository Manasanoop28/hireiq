import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";
import "./AuthPage.css";

function AuthPage() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <Login />
      </div>
    </div>
  );
}

/* ================= LOGIN ================= */

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      const { data: userData } = await supabase.auth.getUser();
      const confirmed = !!userData?.user?.email_confirmed_at;
      if (confirmed) {
        window.location.href = "/dashboard";
      } else {
        setMessage("Please verify your email before logging in. Check your inbox.");
        await supabase.auth.signOut();
      }
    }

    setLoading(false);
  };

 const oauth = (provider) =>
  supabase.auth.signInWithOAuth({
    provider,
    options: {
      // Ensure provider callback returns to the login screen
      redirectTo: `${window.location.origin}/login`,
    },
  });

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getUser();
      const confirmed = !!data?.user?.email_confirmed_at;
      if (confirmed) {
        window.location.href = "/dashboard";
      } else if (data?.user) {
        setMessage("Please verify your email before logging in. Check your inbox.");
        await supabase.auth.signOut();
      }
    };
    checkSession();
  }, []);

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
        src="https://www.svgrepo.com/show/475661/linkedin-color.svg"
        alt="LinkedIn"
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

    {/* Optional register link removed for a cleaner, focused login */}
  </div>
);
}

export default AuthPage;

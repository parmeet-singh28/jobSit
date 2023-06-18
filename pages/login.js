import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Welcome Back!</h1>
      <form className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button type="submit" className="login-button">Log In</button>
      </form>
      <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
    </div>
  );
};

export default Login;

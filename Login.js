import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginMessage, setLoginMessage] = useState('');

  // Custom password validation function
  const isPasswordValid = (password) => {
    // Define regular expressions for each required rule
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    // Check if all rules are satisfied
    return hasUpperCase && hasLowerCase && hasNumber;
  };

  const isUsernameValid = (username) => {
    const usernamePattern = /^[a-zA-Z]{2,}@[a-zA-Z]+\.[a-zA-Z]{3}$/;
    return usernamePattern.test(username);
  };

  const handleLogin = () => {
    const validationErrors = {};

    if (!username.trim()) {
      validationErrors.username = 'Username is required';
    } else if (!isUsernameValid(username)) {
      validationErrors.username =
        'Invalid username, pls enter valid username';
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    } else if (!isPasswordValid(password)) {
      validationErrors.password =
        'Password must contain at least 1 upper case, 1 lower case, and 1 number';
    }

    if (Object.keys(validationErrors).length === 0) {
      // Validation passed; implement login logic
      setLoginMessage('Login successful');
    } else {
      setErrors(validationErrors);
      setLoginMessage('');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input placeholder="enter username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input placeholder="enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {loginMessage && <p className="login-message">{loginMessage}</p>}
      </form>
    </div>
  );
}

export default Login;

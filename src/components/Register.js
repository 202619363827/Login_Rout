import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
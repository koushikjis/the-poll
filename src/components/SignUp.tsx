import React, { useState } from 'react';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="container mt-4">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label>Email:</label>
          <input className="form-control input-padding" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group mb-2">
          <label>Password:</label>
          <input className="form-control input-padding" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group mb-3">
          <label>Confirm Password:</label>
          <input className="form-control input-padding" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button className="btn btn-primary" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

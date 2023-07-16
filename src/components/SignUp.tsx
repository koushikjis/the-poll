import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

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
      <PageHeader header='Sign Up' />
      <form onSubmit={handleSubmit}>
        <div  className='form-group mt-3 mb-3 border-bottom border-primary rounded'>
        <div className="form-group m-3">
          <label>Email:</label>
          <input className="form-control input-padding" type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group m-3">
          <label>Password:</label>
          <input className="form-control input-padding" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className="form-group m-3">
          <label>Confirm Password:</label>
          <input className="form-control" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
        </div>
        <button className="btn btn-primary m-3" type="submit">Sign Up</button>
        </div>
      </form>
      <div>Already a member?&nbsp;&nbsp;<Link to="/log-in">Login</Link></div>
    </div>
  );
};

export default SignUp;

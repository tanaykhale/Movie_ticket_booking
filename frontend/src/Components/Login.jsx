import React, { useState } from 'react';

const Login = () => {
  const [log, setLog] = useState({ id: '', pwd: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLog((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    console.log('Login details:', log);
    if (!log.id || !log.pwd) {
      alert("Please fill in both fields.");
      return;
    }
    
    
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        UserId or email: 
        <input 
          type="text" 
          name="id" 
          value={log.id} 
          onChange={handleChange} 
        /><br />

        Password: 
        <input 
          type="password" 
          name="pwd" 
          value={log.pwd} 
          onChange={handleChange} 
        /><br />

        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;

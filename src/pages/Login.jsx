import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email && u.password === password);

    if (existingUser) {
      const role = email === 'admin@adsdev.vn' ? 'admin' : 'user';
      setUser({ ...existingUser, role });
      navigate('/dashboard');
    } else {
      alert('Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Mật khẩu</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="btn btn-primary" type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;

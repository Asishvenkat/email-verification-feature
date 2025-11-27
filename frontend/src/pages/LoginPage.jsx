import React, { useState } from 'react';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      const res = await axios.post(`${BACKEND_URL}/api/login`, form);
      setMsg('Login successful! Redirecting...');
      setTimeout(() => navigate('/dashboard', { state: { name: res.data.name, email: res.data.email } }), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || 'Login failed.');
    }
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)', fontFamily: 'Inter, Segoe UI, Arial, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)', padding: 40, borderRadius: 18,
        boxShadow: '0 8px 32px rgba(80,80,180,0.10)', minWidth: 370, maxWidth: 400, width: '100%', border: '1px solid #e0e7ff', backdropFilter: 'blur(2px)'
      }}>
        <h2 style={{ marginBottom: 28, fontWeight: 800, fontSize: 32, letterSpacing: -1.5, color: '#1e293b', textAlign: 'center', textShadow: '0 2px 8px #e0e7ff' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required style={{ padding: '13px 14px', borderRadius: 8, border: '1.5px solid #c7d2fe', fontSize: 17, background: '#f8fafc', outline: 'none', transition: 'border 0.2s', marginBottom: 2 }} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required style={{ padding: '13px 14px', borderRadius: 8, border: '1.5px solid #c7d2fe', fontSize: 17, background: '#f8fafc', outline: 'none', transition: 'border 0.2s', marginBottom: 2 }} />
          <button type="submit" style={{ padding: '13px 0', borderRadius: 8, border: 'none', background: 'linear-gradient(90deg, #6366f1 0%, #2563eb 100%)', color: '#fff', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 10, boxShadow: '0 2px 8px #c7d2fe', letterSpacing: 0.5 }}>Login</button>
        </form>
        {msg && (
          <div style={{ color: msg.includes('success') ? '#2563eb' : '#d32f2f', background: msg.includes('success') ? '#e0f2fe' : '#fff3f3', border: msg.includes('success') ? '1.5px solid #38bdf8' : '1.5px solid #fecaca', borderRadius: 8, padding: 14, marginTop: 22, fontSize: 16, textAlign: 'center', fontWeight: 500, boxShadow: '0 1px 4px #e0e7ff' }}>{msg}</div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;

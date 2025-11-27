import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ResendPage() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');
  const [msg, setMsg] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    try {
      await axios.post('http://localhost:5000/api/resend', { email });
      setMsg('Verification email resent!');
    } catch (err) {
      setMsg(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)',
      fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
      transition: 'background 0.5s'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: 40,
        borderRadius: 18,
        boxShadow: '0 8px 32px rgba(80,80,180,0.10)',
        minWidth: 370,
        maxWidth: 400,
        width: '100%',
        border: '1px solid #e0e7ff',
        backdropFilter: 'blur(2px)'
      }}>
        <h2 style={{
          marginBottom: 28,
          fontWeight: 800,
          fontSize: 28,
          letterSpacing: -1.2,
          color: '#1e293b',
          textAlign: 'center',
          textShadow: '0 2px 8px #e0e7ff'
        }}>Resend Verification Email</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <input name="email" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{
            padding: '13px 14px', borderRadius: 8, border: '1.5px solid #c7d2fe', fontSize: 17, background: '#f8fafc', outline: 'none', transition: 'border 0.2s', marginBottom: 2
          }} />
          <button type="submit" style={{
            padding: '13px 0', borderRadius: 8, border: 'none', background: 'linear-gradient(90deg, #6366f1 0%, #2563eb 100%)', color: '#fff', fontWeight: 700, fontSize: 18, cursor: 'pointer', marginTop: 10, boxShadow: '0 2px 8px #c7d2fe', letterSpacing: 0.5
          }}>Resend</button>
        </form>
        {msg && (
          <div style={{
            color: msg.toLowerCase().includes('resent') ? '#2563eb' : '#d32f2f',
            background: msg.toLowerCase().includes('resent') ? '#e0f2fe' : '#fff3f3',
            border: msg.toLowerCase().includes('resent') ? '1.5px solid #38bdf8' : '1.5px solid #fecaca',
            borderRadius: 8,
            padding: 14,
            marginTop: 22,
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 500,
            boxShadow: '0 1px 4px #e0e7ff'
          }}>
            {msg}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResendPage;

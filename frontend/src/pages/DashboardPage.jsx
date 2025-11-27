import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function DashboardPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const name = location.state?.name || 'User';
  const email = location.state?.email || '';

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)', fontFamily: 'Inter, Segoe UI, Arial, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)', padding: 40, borderRadius: 18,
        boxShadow: '0 8px 32px rgba(80,80,180,0.10)', minWidth: 370, maxWidth: 400, width: '100%', border: '1px solid #e0e7ff', backdropFilter: 'blur(2px)'
      }}>
        <h2 style={{ marginBottom: 18, fontWeight: 800, fontSize: 32, letterSpacing: -1.5, color: '#1e293b', textAlign: 'center', textShadow: '0 2px 8px #e0e7ff' }}>Welcome, {name}!</h2>
        <div style={{ textAlign: 'center', fontSize: 18, color: '#2563eb', marginBottom: 10 }}>
          Your email is verified <span style={{ color: '#22c55e', fontSize: 22 }}>✔</span>
        </div>
        <div style={{ textAlign: 'center', color: '#64748b', fontSize: 15 }}>{email}</div>
        <button onClick={() => navigate('/')} style={{ marginTop: 28, padding: '10px 0', borderRadius: 8, border: 'none', background: '#e0e7ff', color: '#2563eb', fontWeight: 600, fontSize: 16, cursor: 'pointer', width: '100%' }}>Logout</button>
      </div>
    </div>
  );
}

export default DashboardPage;

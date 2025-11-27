import React from 'react';
import { useNavigate } from 'react-router-dom';

function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)', fontFamily: 'Inter, Segoe UI, Arial, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)', padding: 40, borderRadius: 18,
        boxShadow: '0 8px 32px rgba(80,80,180,0.10)', minWidth: 370, maxWidth: 400, width: '100%', border: '1px solid #e0e7ff', backdropFilter: 'blur(2px)'
      }}>
        <h2 style={{ marginBottom: 18, fontWeight: 800, fontSize: 32, letterSpacing: -1.5, color: '#22c55e', textAlign: 'center', textShadow: '0 2px 8px #e0e7ff' }}>Success!</h2>
        <div style={{ textAlign: 'center', fontSize: 18, color: '#2563eb', marginBottom: 10 }}>
          Your email is verified. You can now log in.
        </div>
        <button onClick={() => navigate('/login')} style={{ marginTop: 28, padding: '12px 0', borderRadius: 8, border: 'none', background: 'linear-gradient(90deg, #6366f1 0%, #2563eb 100%)', color: '#fff', fontWeight: 700, fontSize: 18, cursor: 'pointer', width: '100%' }}>Go to Login</button>
      </div>
    </div>
  );
}

export default SuccessPage;

import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';

function VerifyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return; 
    calledRef.current = true;

    const token = searchParams.get('token');
    if (!token) {
      navigate('/error');
      return;
    }

    axios.get(`http://localhost:5000/api/verify?token=${token}`)
      .then(res => {
        const msg = res.data.message?.toLowerCase() || '';

        if (msg.includes('verified')) {
          navigate('/success');
        } else {
          navigate('/error', { state: { message: res.data.message } });
        }
      })
      .catch(err => {
        const msg = err.response?.data?.message || 'Verification failed';
        navigate('/error', { state: { message: msg } });
      });
  }, [searchParams, navigate]);

  return null; 
}

export default VerifyPage;

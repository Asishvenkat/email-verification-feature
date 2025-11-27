import React from "react";
import { useLocation, Link } from "react-router-dom";

function CheckEmailPage() {
  const location = useLocation();
  const email = location.state?.email || "";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
        padding: "20px",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          background: "#fff",
          borderRadius: "20px",
          padding: "40px 36px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
          animation: "fadeIn 0.5s ease-out",
          border: "1px solid #e2e8f0",
        }}
      >
       
        <div
          style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 20px",
            background: "#e0e7ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4f46e5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16v16H4z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>

        
        <h2
          style={{
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "700",
            color: "#1e293b",
            marginBottom: "10px",
          }}
        >
          Check Your Email
        </h2>

        
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#475569",
            marginBottom: "18px",
            lineHeight: "1.6",
          }}
        >
          We’ve sent a verification link to:
        </p>

        
        <div
          style={{
            background: "#f1f5f9",
            padding: "12px 16px",
            borderRadius: "10px",
            textAlign: "center",
            fontWeight: "600",
            color: "#1e293b",
            wordBreak: "break-all",
            fontSize: "15px",
            marginBottom: "20px",
          }}
        >
          {email}
        </div>

        
        <p
          style={{
            textAlign: "center",
            fontSize: "15px",
            color: "#64748b",
            marginBottom: "18px",
            lineHeight: "1.6",
          }}
        >
          Click the link in your email to verify your account and continue.
        </p>

        
        <div style={{ textAlign: "center", marginTop: "15px" }}>
          <span style={{ color: "#475569" }}>Didn’t receive the email?</span>{" "}
          <Link
            to="/resend"
            style={{
              color: "#4f46e5",
              fontWeight: "600",
              textDecoration: "underline",
              marginLeft: "4px",
            }}
          >
            Resend verification
          </Link>
        </div>
      </div>

     
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default CheckEmailPage;

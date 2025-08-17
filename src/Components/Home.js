import React from 'react'
// import Image from "./Image"
export default function home() {
  return (
    
 <>
      <div
        className="d-flex flex-column justify-content-center align-items-center min-vh-100 border border-dark text-center p-3"
        style={{
          background: "linear-gradient(135deg, #ff416c, #ff4b2b, #1e90ff, #00c6ff)",
          backgroundSize: "400% 400%",
          animation: "gradientBG 15s ease infinite",
        }}
      >
        {/* Homepage Image */}
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1350&q=80"
          alt="NewsHub Home"
          className="img-fluid rounded shadow mb-4"
          style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }}
        />

        {/* Website Name */}
        <h1 className="fw-bold text-light mb-3">NewsHub</h1>

        {/* Existing Content */}
        <h2 className="mb-3 text-light">FIND NEWS OF EVERY CATEGORY HERE.</h2>
        <h2 className="text-light">CLICK ON THE LINKS IN NAVBAR TO SELECT THE CATEGORY.</h2>
      </div>

      {/* Gradient Animation CSS */}
      <style>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>


    
  )
}

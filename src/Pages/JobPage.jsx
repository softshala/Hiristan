// import React, { useState } from 'react';
// import './JobPage.css';

// const JobPage = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="job-container">
//       <div className="job-header">
//         <h1 className="job-title">Join Our Team</h1>
//         <p className="job-subtitle">Scan the QR code or click below to apply instantly!</p>
//       </div>

//       <div className="job-qr-section" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
//         <div className={`job-qr-frame ${isHovered ? 'qr-hovered' : ''}`}>
//           <img
//             className="job-qr-image"
//             src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://qrfy.io/r/GNAfmGaeXx"
//             alt="QR Code to Apply"
//           />
//           <div className="qr-overlay">
//             <span className="qr-prompt">Scan to Apply</span>
//           </div>
//         </div>
//         <button
//           className="job-qr-button"
//           onClick={() => window.open('https://qrfy.io/r/GNAfmGaeXx', '_blank')}
//         >
//           Open Application Page
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobPage;



import { useEffect } from 'react';

const JobPage = () => {
  useEffect(() => {
    // Perform the redirect to the external URL
    window.location.replace('https://qrfy.io/r/GNAfmGaeXx');
  }, []);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#ffffff', // White background
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '2.5rem',
        background: 'rgba(255, 255, 255, 0.95)',
        borderRadius: '1rem',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
        animation: 'fadeIn 0.6s ease-out',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.2)';
        e.currentTarget.querySelector('i').style.color = '#15803d';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
        e.currentTarget.querySelector('i').style.color = '#16a34a';
      }}>
        <div style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <i className="fas fa-spinner" style={{
            fontSize: '3rem',
            color: '#16a34a',
            animation: 'spin 1s linear infinite',
          }}></i>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            border: '3px solid #86efac',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite',
            opacity: '0.4',
          }}></div>
        </div>
        <h1 style={{
          fontSize: '1.75rem',
          fontWeight: '600',
          color: '#14532d',
          margin: '0',
          animation: 'textPulse 2s ease-in-out infinite',
        }}>Redirecting to Jobs</h1>
        <p style={{
          fontSize: '1rem',
          color: '#1f4937',
          margin: '0',
          textAlign: 'center',
        }}>Discover exciting career opportunities!</p>
      </div>
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0% { transform: scale(0.8); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 0.7; }
          100% { transform: scale(0.8); opacity: 0.4; }
        }
        @keyframes textPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.03); }
          100% { transform: scale(1); }
        }
      `}</style>
      <script src="https://kit.fontawesome.com/a076d05399.js" crossOrigin="anonymous"></script>
    </div>
  );
};

export default JobPage;
import React from 'react';

const FloatingOrbs: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes float-orb-1 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -80px) scale(1.2); }
          50% { transform: translate(-50px, 30px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float-orb-2 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(80px, -60px) scale(1.15); }
          50% { transform: translate(-40px, 25px) scale(0.85); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes float-orb-3 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(70px, -70px) scale(1.1); }
          50% { transform: translate(-60px, 20px) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        .orb-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }
        .orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(48px);
          opacity: 0.2;
          will-change: transform;
        }
        .orb-1 {
          width: 384px;
          height: 384px;
          top: 10%;
          left: -10%;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%);
          animation: float-orb-1 20s ease-in-out infinite;
        }
        .orb-2 {
          width: 320px;
          height: 320px;
          top: 60%;
          left: 80%;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
          animation: float-orb-2 25s ease-in-out infinite 2s;
        }
        .orb-3 {
          width: 288px;
          height: 288px;
          top: 50%;
          left: 20%;
          background: radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 70%);
          animation: float-orb-3 22s ease-in-out infinite 4s;
        }
        @media (max-width: 768px) {
          .orb-container {
            display: none;
          }
        }
      `}</style>
      <div className="orb-container hidden md:block">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
    </>
  );
};

export default FloatingOrbs;

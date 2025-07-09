import React from 'react';
import type { CSSProperties } from 'react'
interface CustomErrorProps {
  message: string;
  errorCode?: string | number;
}

const CustomError: React.FC<CustomErrorProps> = ({ message, errorCode }) => {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Something went wrong</h2>
      <p style={messageStyle}>{message}</p>
      {errorCode && <p style={codeStyle}>Error Code: {errorCode}</p>}
    </div>
  );
};

// ✅ Type-safe style objects
const containerStyle: CSSProperties = {
  padding: '20px',
  backgroundColor: '#ffe6e6',
  border: '1px solid #ff4d4d',
  borderRadius: '8px',
  color: '#cc0000',
  maxWidth: '600px',
  margin: '20px auto',
  textAlign: 'center',
};

const titleStyle: CSSProperties = {
  marginBottom: '10px',
  fontSize: '20px',
};

const messageStyle: CSSProperties = {
  fontSize: '16px',
};

const codeStyle: CSSProperties = {
  marginTop: '10px',
  fontSize: '14px',
  color: '#990000',
};

export default CustomError;

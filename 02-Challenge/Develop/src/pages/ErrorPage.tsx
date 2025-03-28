import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      textAlign: 'center'
    }}>
      <h1>404: Page Not Found</h1>
      <p>¯\_(ツ)_/¯</p>
      <Link 
        to="/" 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#646cff', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '5px' 
        }}
      >
        Return to Candidate Search
      </Link>
    </div>
  );
};

export default ErrorPage;
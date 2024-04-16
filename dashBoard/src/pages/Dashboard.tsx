import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {

    const navigate = useNavigate();
    const handleClick = () => {navigate("../pages/Chart")}
    const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="buttons">
        <div>
        <button className='login' onClick={handleClick}>
            Dashboard
        </button>
        </div>

        <div className='list'>
        {isAuthenticated ? (
            <li>
                <button className='logout' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button>
            </li>
            )   : ( 
                <li>
                    <button className='signup' onClick={() => loginWithRedirect()}>
                        Log In
                    </button>
                </li>
        )}
        </div>

      </div>
    </div>
  );
};

export { Dashboard };

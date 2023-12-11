import React, {useEffect, useState} from 'react';
import "./Login.css"
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";


function Login({ onLogin }){
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [userDetails, setUserDetails] = useState({ phone: '', email: '', country: '' });

    const handleLogin = async () => {
        const loginData = {username, password};
        console.log('Login Request Data:', loginData);

        try {

            const response = await fetch('http://192.168.2.216:3001/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, password}),
            });

            console.error(response.status);
            if (response.status == 200) {
                // retreive the user information if login in successfully
                console.error("333333");
                const userData = await response.json();
                setLoggedIn(true);
                setLoginError("Login Success!"); // Reset login error if any
                const { phone, email, country } = userData;
                setUserDetails({ phone, email, country });
            } else {
                // fail login
                console.error('Login failed');
                setLoginError('Login failed. Please check your credentials.');
            }
        }catch(error)
        {
            setLoginError('An error occurred during login. Please try again later.'); // Set login error message
        }
    };

    return (
        <div>
            <Helmet>
                <title>Travel Explorer - Login</title>
            </Helmet>
            <div className="login-container">
                {isLoggedIn ? (
                    // already login, display user infor
                    <div>
                        <h2>Welcome, {username}!</h2>
                        <p>Phone: {userDetails.phone}</p>
                        <p>Email: {userDetails.email}</p>
                        <p>Country: {userDetails.country}</p>

                    </div>
                ) : (
                    // not login, show the form
                    <form className="loginForm" id="loginForm">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="button" class="btn btn-success" onClick={handleLogin}>Login</button>
                        {loginError && <p className="login-error">{loginError}</p>}
                    </form>
                )}
            </div>
            <Link to="/index">
                <div id="homeIcon" >🏠
                </div>
            </Link>
        </div>
    );
}

export default Login;

// UserInfo.js
import React from 'react';
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import "./Login.css"


// on the left side display the user information that we retrieve for the database once it is registered. Meaning a new
//record has been inserted.
const UserInfo = ({ username, email, phone, country }) => {
    return (
        <div>

        
            <Helmet>
                <title>Login Success</title>
            </Helmet>
            <div class="login-container">   
                <h2>User Information</h2>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Country: {country}</p>
                <Link to="/index">
                    <div id="homeIcon" >🏠
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default UserInfo;

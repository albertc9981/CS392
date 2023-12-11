import React,{ useState , useEffect}  from 'react';

//import db from "./db"

import "./register.css"
import {Link} from "react-router-dom";

function Register(){
    const [users, setUsers] = useState([]);
    const currentLocation = window.location;
    const apiUrl1 = `http://${currentLocation.hostname}:3001/users`;
    const regUrl = `http://${currentLocation.hostname}:3001/users/register`;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    useEffect(() => {
        fetch(apiUrl1)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {          // check if data length larger than 0
                    setUsers(data);
                } else {
                    console.log('No data available');
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // below, use the POST method to do data operations (REST API)
    const handleRegister = async () => {
        try {

            const response = await fetch(regUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password, email, phone, country }),
            });

            if (response.status === 201) {
                // register successfully, jump to another page
                setErrorMessage('User registered successfully');
                console.log('User registered successfully');
                window.location.replace('/login');
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrorMessage('Internal Server Error');
        }
    };

    return (
        <div>
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-6 form-container">
                        <h2 className="mb-4">User Registration</h2>
                        <form id="registrationForm">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" class="form-control" value={username}  onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="text" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="text" class="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country</label>
                                <input type="text" class="form-control" value={country} onChange={(e) => setCountry(e.target.value)} />
                            </div>
                            <button type="button" class="btn btn-success" onClick={handleRegister}>Register</button>

                        </form>
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    </div>
                </div>
                <div>
                    {users.map(user => (
                        <li key={user.id}>
                            <strong>ID:</strong> {user.id}<br />
                            <strong>Username:</strong> {user.username}<br />
                            <strong>Password:</strong> {user.password}<br />
                            <strong>Email:</strong> {user.email}<br />
                            <strong>Phone:</strong> {user.phone}<br />
                            <strong>Country:</strong> {user.country}
                        </li>
                    ))}
                </div>
            </div>
            <Link to="/index">
                <div id="homeIcon" >🏠
                </div>
            </Link>
        </div>
    );
    //return (
    //    <></>
    //);
}
export default Register;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './AuthContext';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Account from './account';
import ImgIntro from './imgintro';
import IntroMap from './intromap';
import Login from './login';
import Register from './register';


import { Helmet } from 'react-helmet';

import  "./index.css"

function Index(){
    return (
        <div>
            <Helmet>
                <title>Your Beautiful Website</title>
            </Helmet>
        <div class="advertisement">
            <p>Weclome to the Travel Website | Login into your Account | Register for a new Account</p>
        </div>
        <div class="container">
            <div class="box-container">
                <a href="/intromap" class="box">
                    <h4>Spot Intro</h4>
                </a>
                <a href="/login" class="box">
                    <h4>My Account</h4>
                </a>
                <a href="/imgintro" class="box">
                    <h4>Picture Show</h4>
                </a>

                <a href="/register" class="box">
                    <h4>Registration</h4>
                </a>
            </div>
        </div>
        </div>
    );
}

export default Index;


export function App(){

// user the authProvider here with router
    return (
        <AuthProvider>
            <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Index  />}></Route>
                    <Route path="/index" element={<Index  />}></Route>
                    <Route path="/intromap" element={<IntroMap  />}></Route>
                    <Route path="/login" element={<Login  />}></Route>
                    <Route path="/account" element={<Account  />}></Route>
                    <Route path="/imgintro" element={<ImgIntro   />}></Route>
                    <Route path="/register" element={<Register/>}></Route>
                </Routes>
            </Router>
            </React.StrictMode>
        </AuthProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('outside'));
root.render(
    <App />
);


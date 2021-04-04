import React, { useState, useEffect } from 'react';
import '../style/style.css';
import { Link, useHistory } from 'react-router-dom';

const RegisterForm = () => {
    return (
        <div id="login">
        <form name='form-login'>
            <span className="fontawesome-user"></span>
            <input type="text" id="user" placeholder="Username" 
                // onChange={(e) => {
	            //     setUsername(e.target.value);
                // }}
            />
       
            <span className="fontawesome-lock"></span>
            <input type="password" id="pass" placeholder="Password" 
                // onChange={(e) => {
	            //     setPassword(e.target.value);
                // }}
            />

            <span className="fontawesome-user"></span>
            <input type="text" id="first_name" placeholder="First Name" 
                // onChange={(e) => {
	            //     setUsername(e.target.value);
                // }}
            />


            <span className="fontawesome-user"></span>
            <input type="text" id="last_name" placeholder="Last Name" 
                // onChange={(e) => {
	            //     setUsername(e.target.value);
                // }}
            />


            <span className="fontawesome-mail"></span>
            <input type="email" id="email" placeholder="Email" 
                // onChange={(e) => {
	            //     setUsername(e.target.value);
                // }}
            />  
        
            <br/>
            <br/>
            <input type="submit" value="Register"/>
            <Link className="nav-link" to={"/categories"} style={{'color':'white'}}>Continue without login</Link>
        </form>
    </div>
	
    )
}

export default RegisterForm

import React, { useState, useEffect } from 'react';
import '../style/style.css';
import { Link, useHistory } from 'react-router-dom';

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            history.push('/categories');
        }
    }, [history])

    const login = async () => {

        console.log('hiiiii from login');
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'username': username, 'password': password })
        };

        const loginResponse = await fetch('http://localhost:8000/user/login', requestOptions)
            .then(response => {
                return response.json();
            });
            console.log({loginResponse})
            if(loginResponse) {
                console.log({loginResponse});
                localStorage.setItem('token', loginResponse.data.token);
                history.push('/categories');
            }
    }

	return (
    <div id="login">
        <form name='form-login'>
            <span className="fontawesome-user"></span>
            <input type="text" id="user" placeholder="Username" 
                onChange={(e) => {
	                setUsername(e.target.value);
                }}
            />
       
            <span className="fontawesome-lock"></span>
            <input type="password" id="pass" placeholder="Password" 
                onChange={(e) => {
	                setPassword(e.target.value);
                }}
            />
        
            <input type="submit" value="Login" onClick={login}/>
            <br/>
            <br/>
            {/* <input type="submit" value="Register" 
            onClick={history.push('/register')}
            /> */}

            <Link className="nav-link" to={"/register"} style={{'color':'white'}}>Register</Link>
            <Link className="nav-link" to={"/categories"} style={{'color':'white'}}>Continue without login</Link>
        </form>
    </div>
	)
}

export default LoginForm

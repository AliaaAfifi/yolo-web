import LoginForm from './Components/LoginForm';
import Categories from './Components/Categories';
import {Route, Link, Switch } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/categories"}>Categories</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/categories" component={Categories} />
            <Route path="/register" component={RegisterForm} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Login from './LoginForm';
import signup from './SignupForm';
import Home from './Home';
import logout from './Logout';
import ForgotPassword from './ForgotPassword';
import * as serviceWorker from './serviceWorker';
import file from './File/ImageFile';
import ResetPasswordPage from './ResetPasswordPage ';
import selectdropdown from './File/SelectDropDown';

ReactDOM.render(
  <Router>
      <Route path="/Home" component={Home}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Signup" component={signup}/>
      <Route path="/ForgotPassword" component={ForgotPassword}/>
      <Route path="/Reset" component={ResetPasswordPage}/>
      <Route path="/logout" component={logout}/>
      <Route path="/image-file" component={file}/>
      <Route path="/dropdown" component={selectdropdown}/>
    </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

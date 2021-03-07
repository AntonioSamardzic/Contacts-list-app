/** @format */
import React from 'react';
import './App.css';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import AddUserForm from './AddUserForm';
import { Table } from './Table';
import NavBars from './NavBars';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={SignupForm} />
          <Route path='/login' component={LoginForm} />

          <div>
            <NavBars />
            <PrivateRoute path='/adresar' component={Table} />
            <div className='kontakt'>
              <PrivateRoute path='/kontakt' component={AddUserForm} />
            </div>
          </div>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;

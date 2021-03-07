/** @format */

import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

export default function NavBars(props) {
  const [error, setError] = useState('');
  const { logout } = useAuth();
  const history = useHistory;

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('failed to logout');
    }
  }

  return (
    <div>
      <Navbar bg='light' variant='light'>
        <Navbar.Brand href='/'>
          <Nav className='mr-auto'>
            <Nav.Link href='/adresar'>Adresar</Nav.Link>
            <Nav.Link href='/kontakt'>Dodaj Kontakt</Nav.Link>
            <Nav.Link href='/favorites'>Favoriti</Nav.Link>
          </Nav>
        </Navbar.Brand>
        <Button onClick={handleLogout}>Log out</Button>
      </Navbar>
    </div>
  );
}

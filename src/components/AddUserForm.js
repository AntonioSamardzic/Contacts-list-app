/** @format */

import React, { useState } from 'react';
import firebase from '../utils/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container } from 'react-bootstrap';

function AddUserForm() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    DOB: '',
    typeOfContact: '',
    contact: '',
  });

  const createUser = () => {
    const userRef = firebase.database().ref('User');
    const user = {
      data,
    };

    userRef.push(user);
  };

  let handleDropChange = (e) => {
    setData({
      ...data,
      typeOfContact: e.target.value,
    });
  };

  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '50vh' }}>
      <Form className='w-100' style={{ maxWidth: '400px' }}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Ime *</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter email'
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId='formGBasicPassword'>
          <Form.Label>Prezime *</Form.Label>
          <Form.Control
            type='text'
            placeholder='Password'
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId='formGBasicPassword'>
          <Form.Label>Godina i datum rođenja *</Form.Label>
          <Form.Control
            className='rounded p-1 color-black font-bold text-center'
            type='date'
            id='date'
            name='trip-start'
            value={data.DOB}
            onChange={(e) => setData({ ...data, DOB: e.target.value })}
          />
        </Form.Group>
        <Dropdown>
          <Dropdown.Toggle variant='outline-primary' id='dropdown-basic'>
            Dodatno *
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* <Form.Group controlId='formGBasicPassword'>
              <Form.Label>Vrsta kontakta</Form.Label>
              <Form.Control
                type='text'
                placeholder='npr. Mobitel'
                value={data.typeOfContact}
                onChange={(e) =>
                  setData({ ...data, typeOfContact: e.target.value })
                }
              />
            </Form.Group> */}
            <Form.Group controlId='formGBasicPassword'>
              <Form.Label>Vrsta kontakta</Form.Label>
              <Form.Control
                as='select'
                className='mr-sm-2'
                id='inlineFormCustomSelect'
                custom
                onChange={handleDropChange}>
                <option value='Mobitel'>Mobitel</option>
                <option value='Fiksni telefon'>Fiksni telefon</option>
                <option value='E-mail'>E-mail</option>
                <option value='Pager'>Pager</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formGBasicEmail'>
              <Form.Label>Kontakt *</Form.Label>
              <Form.Control
                className='rounded p-1 color-black font-bold text-center'
                type='text'
                value={data.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
              />
            </Form.Group>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          className='submit_button'
          disabled={
            (!data.firstName,
            !data.lastName,
            !data.DOB,
            !data.typeOfContact,
            !data.contact)
          }
          onClick={createUser}>
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default AddUserForm;

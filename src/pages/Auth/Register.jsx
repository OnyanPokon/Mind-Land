import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes('@')) {
      alert('Email harus mengandung karakter "@"');
      return;
    }

    if (password === '') {
      alert('Password is required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and Confirm Password do not match');
      return;
    }

    console.log('Formulir dikirim:', { username, email, password });

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleGoogleLogin = () => {
    // Handle Google login Nanti Disini
    alert('Continue with Google clicked');
  };

  return (
    <div className="Container">
      <div className="wrapper-logo d-flex flex-column align-items-center">
        <img className="text-secondary" src="../public/logo.png" alt="Logo" width="46" height="auto" />
        <h1 className="fs-2">Register for an account</h1>
        <p>Please enter your details.</p>
      </div>
      <Form className="form d-flex flex-column mt-3 mx-auto" style={{ width: '100%', maxWidth: '400px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="outline-primary" onClick={handleGoogleLogin} className="mt-3">
          Continue with Google
        </Button>
      </Form>
    </div> 
  );
}

export default Register;

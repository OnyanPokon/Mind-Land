import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { BsGoogle } from "react-icons/bs";

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
    <div className="auth-wrapper">
      <div className="wrapper-logo d-flex flex-column align-items-center gap-2">
        <img className="text-secondary" src="../public/logo.png" alt="Logo" width="46" height="auto" />
        <h1 className="fs-2 text-center">Daftar atau buat akun baru</h1>
        <p>Isi form dengan lengkap</p>
      </div>
      <Form className="form d-flex flex-column mt-3 mx-auto" style={{ width: '100%', maxWidth: '400px' }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Alamat email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
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
          <Form.Label>Konfirmasi Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Konfirmasi password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="info" type="submit" className='text-light'>
          Daftar
        </Button>
        <Button variant="outline-info" onClick={handleGoogleLogin} className="mt-3">
          Lanjutkan dengan <BsGoogle />
        </Button>
      </Form>
    </div> 
  );
}

export default Register;

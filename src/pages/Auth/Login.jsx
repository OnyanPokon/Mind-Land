import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert('Email harus mengandung karakter "@"');
      return;
    }

    if (password === "") {
      alert("Password is required");
      return;
    }

    console.log("Formulir dikirim:", { email, password });

    setEmail("");
    setPassword("");
  };

  const handleGoogleLogin = () => {
    // Handle Google login Nanti Disini
    alert("Continue with Google clicked");
  };

  return (
    <div className="Container">
      <div className="wrapper-logo d-flex flex-column align-items-center">
        <img
          className="text-secondary"
          src="../public/logo.png"
          alt="Logo"
          width="46"
          height="auto"
        />
        <h1 className="fs-2">Log in to your account</h1>
        <p>Please enter your details.</p>
      </div>
      <Form
        className="form d-flex flex-column mt-3 mx-auto"
        style={{ width: "100%", maxWidth: "400px" }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="outline-primary"
          onClick={handleGoogleLogin}
          className="mt-3"
        >
          Continue with Google
        </Button>
      </Form>
    </div>
  );
}

export default Login;

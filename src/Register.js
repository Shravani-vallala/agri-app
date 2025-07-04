// src/RegisterForm.js
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    // Placeholder: You can connect this to an API later
    console.log("Registered:", { name, email, password });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h3 className="text-center text-primary fw-bold mb-4">Create Your Account</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Register
          </Button>
        </Form>

        <div className="text-center mt-3">
          <small>
            Already have an account?{' '}
            <a href="/" className="text-decoration-none">Login here</a>
          </small>
        </div>
      </Card>
    </div>
  );
}

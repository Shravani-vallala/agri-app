import React, { useState } from 'react';
import { loginUser, initCSRF } from './api';
import { Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ moved to top

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await initCSRF(); // CSRF for Laravel Sanctum

      const { data } = await loginUser({ email, password });
      alert(data.message);

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Check credentials or try again.');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h4 className="text-center mb-4">Login</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit" className="w-100">Login</Button>
        </Form>
        <div className="text-center mt-3">
          <small>Don't have an account? <a href="/register">Register</a></small>
        </div>
      </Card>
    </div>
  );
}

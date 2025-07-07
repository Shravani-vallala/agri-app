import React, { useState } from 'react';
import { registerUser, initCSRF } from './api'; // ⬅️ include initCSRF
import { Form, Button, Card } from 'react-bootstrap';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPass: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPass) {
      alert('Passwords do not match');
      return;
    }

    try {
      // 🔐 First, initialize CSRF token
      await initCSRF();

      // 🔐 Then make registration call
      const { data } = await registerUser(form);
      alert(data.message || 'Registration successful');
    } catch (err) {
      alert('Registration failed. Please check input or try again.');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="p-4 shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <h4 className="text-center mb-4">Register</h4>
        <Form onSubmit={handleSubmit}>
          {['name', 'email', 'password', 'confirmPass'].map((field) => (
            <Form.Group className="mb-3" key={field}>
              <Form.Label>{field === 'confirmPass' ? 'Confirm Password' : field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type={field.includes('password') ? 'password' : 'text'}
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
              />
            </Form.Group>
          ))}
          <Button type="submit" className="w-100">Register</Button>
        </Form>
      </Card>
    </div>
  );
}

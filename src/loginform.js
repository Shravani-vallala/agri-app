// src/LoginTabs.js
import React, { useState } from 'react';
import { Tab, Nav, Form, Button, Card } from 'react-bootstrap';

export default function LoginTabs() {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPass, setAdminPass] = useState('');

  const handleUserLogin = (e) => {
    e.preventDefault();
    console.log("User Login:", userEmail, userPass);
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    console.log("Admin Login:", adminEmail, adminPass);
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <Card className="shadow-lg rounded" style={{ width: '100%', maxWidth: '500px' }}>
        <Card.Body>
          <h3 className="text-center mb-4 text-primary fw-bold">Login Portal</h3>
          <Tab.Container defaultActiveKey="user">
            <Nav variant="pills" className="justify-content-center mb-3">
              <Nav.Item>
                <Nav.Link eventKey="user" className="fw-semibold">User Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="admin" className="fw-semibold">Admin Login</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* User Login */}
              <Tab.Pane eventKey="user">
                <Form onSubmit={handleUserLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={userPass}
                      onChange={(e) => setUserPass(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">Login</Button>
                </Form>
              </Tab.Pane>

              {/* Admin Login */}
              <Tab.Pane eventKey="admin">
                <Form onSubmit={handleAdminLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label>Admin Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter admin email"
                      value={adminEmail}
                      onChange={(e) => setAdminEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Admin Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter admin password"
                      value={adminPass}
                      onChange={(e) => setAdminPass(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="dark" type="submit" className="w-100">Login</Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <div className="text-center mt-4">
            <small>
              Don’t have an account?{' '}
              <a href="/register" className="text-decoration-none">Create Account</a>
            </small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

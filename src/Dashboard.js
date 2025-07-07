import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
  const [equipment, setEquipment] = useState([]);

useEffect(() => {
  axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true })
    .then(() => {
      return axios.get('http://localhost:8000/api/equipment', { withCredentials: true });
    })
    .then(res => setEquipment(res.data))
    .catch((err) => {
      if (err.response && err.response.status === 401) {
        alert('Unauthorized – Please login first');
      } else {
        alert('Error fetching equipment');
      }
    });
}, []);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Available Farming Equipment</h2>
      <Row>
        {equipment.map(item => (
          <Col md={4} sm={6} xs={12} className="mb-4" key={item.id}>
            <Card>
              <Card.Img
                variant="top"
                src={item.image ? `http://localhost:8000/storage/${item.image}` : 'https://via.placeholder.com/150'}
                alt={item.name}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <h5>₹{item.price}</h5>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

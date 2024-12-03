import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <Container className="bg-light py-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center">
          <h1 className="display-4 fw-bold">WizzBite</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;

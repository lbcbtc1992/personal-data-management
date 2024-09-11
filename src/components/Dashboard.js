import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-dark text-light p-3">
          <h4>Menu</h4>
          <ul className="list-unstyled">
            <li>Search</li>
            <li>Advanced Search</li>
            <li>Add Data (Admin)</li>
            <li>Upload Documents (Admin)</li>
          </ul>
        </Col>

        {/* Main Content */}
        <Col md={9} className="p-4">
          <h2>Search</h2>
          <Form>
            <Form.Group controlId="search">
              <Form.Label>Search by Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Button variant="primary" type="submit">Search</Button>
          </Form>

          {/* Advanced Search */}
          <div className="mt-4">
            <h3>Advanced Search</h3>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Age Range</Form.Label>
                  <Form.Control type="text" placeholder="Enter age range" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Sex</Form.Label>
                  <Form.Control as="select">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Both</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">Filter</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

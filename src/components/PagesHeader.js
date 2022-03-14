import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PagesHeader = ({ title, cta }) => {
  const navigate = useNavigate();
  return (
    <div className="discover-header">
      <Container className="pt-5">
        <Row className="pt-5 pb-5">
          <Col md={10} className="offset-1">
            <h3>{title}</h3>
            <h4 className="mt-4">{cta}</h4>
            <Button
              variant="primary"
              size="lg"
              className="mt-2"
              onClick={() => navigate('/contact-us')}
            >
              Contact Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PagesHeader;

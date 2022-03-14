import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Play, PlayCircle } from 'react-bootstrap-icons';

const DiscoverHeader = () => {
  return (
    <div className="discover-header">
      <Container className="pt-5">
        <Row className="pt-5 pb-5">
          <Col md={10} className="offset-1">
            <h3>Browse fundraisers</h3>
            <h4 className="mt-4">
              People around the world are raising money for what they are
              passionate about.
            </h4>
            <Link to="/campaigns/create">
              <Button variant="primary" size="lg" className="mt-2">
                Start a FundMySite
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverHeader;

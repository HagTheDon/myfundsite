import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Speedometer, Key, Share } from 'react-bootstrap-icons';
const HowItWorks = () => {
  const navigate = useNavigate();
  return (
    <div className="discover-header">
      <Container className="pt-5">
        <Row className="pt-5 pb-5">
          <Col md={10} className="offset-1">
            <h3>How MyFundSite Works</h3>
            <h4 className="mt-4">
              MyFundSite is the best place to fundraise, whether you are an
              individual, group, or organization.
            </h4>
          </Col>
        </Row>
      </Container>
      <Container className="features colored-bg" fluid>
        <Row>
          <Col md={8} className="offset-md-2">
            <Row xs={1} md={3} className="g-4 mt-5">
              <Col>
                <Card className="border-0">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mx-2">
                        <Speedometer
                          className="mx-2"
                          size={25}
                          color="#0d6efd"
                        />
                      </div>
                      <div>
                        <Card.Title>1. Start your fundraiser</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>Set your fundraiser goal</li>
                            <li>Tell your story</li>
                            <li>Add a picture or video</li>
                          </ul>
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mx-2">
                        <Share className="mx-2" size={25} color="#0d6efd" />
                      </div>
                      <div>
                        <Card.Title>2. Share with friends</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>Send emails</li>
                            <li>Send text messages</li>
                            <li>Share on social media</li>
                          </ul>
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="border-0">
                  <Card.Body>
                    <div className="d-flex">
                      <div className="mx-2">
                        <Key className="mx-2" size={25} color="#0d6efd" />
                      </div>
                      <div>
                        <Card.Title>3. Manage donations</Card.Title>
                        <Card.Text>
                          <ul>
                            <li>Accept donations</li>
                            <li>Thank donors</li>
                            <li>Withdraw funds</li>
                          </ul>
                        </Card.Text>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="d-flex flex-column justify-content-center align-items-center py-5">
              <Button
                variant="primary"
                size="lg"
                className="my-4"
                type="button"
                onClick={() => navigate('/campaigns/create')}
              >
                Start a MyFundSite
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;

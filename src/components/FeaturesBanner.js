import React, { useState } from 'react';
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Speedometer,
  Key,
  Phone,
  Share,
  PersonCheckFill,
} from 'react-bootstrap-icons';
const FeaturesBanner = () => {
  const [features, setFeatures] = useState([
    {
      title: 'WorldWide Leader',
      details:
        'MyFundSite is trusted around the world for its simple, reliable fundraising platform.',
      icon: 'Globe2',
    },
    {
      title: 'Simple Setup',
      details:
        'MyFundSite is trusted around the world for its simple, reliable fundraising platform.You can personalize and share your MyFundSite in just a few minutes.',

      icon: 'Speedometer',
    },
    {
      title: 'Secure',
      details:
        'Our Trust & Safety team works around the clock to protect against fraud.',
      icon: 'Key',
    },
    {
      title: 'Mobile app',
      details:
        'The MyFundSite app makes it simple to launch and manage your fundraiser on the go.',
      icon: 'Phone',
    },
    {
      title: 'Social reach',
      details:
        'Harness the power of social media to spread your story and get more support.',
      icon: 'Share',
    },
    {
      title: 'Expert advice',
      details:
        'Our best-in-class Customer Care Specialists will answer your questions, day or night.',
      icon: 'PersonCheckFill',
    },
  ]);

  return (
    <Container className="features">
      <Row>
        <Col md={10} className="offset-md-1">
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <h3>The leader in online fundraising</h3>
          </div>

          <Row xs={1} md={3} className="g-4">
            {features.map((item, index) => {
              return (
                <Col key={item.title}>
                  <Card className="border-0">
                    <Card.Body>
                      <div className="d-flex">
                        <div className="mx-2">
                          {item.icon === 'Globe2' && (
                            <Globe2
                              className="mx-2"
                              size={25}
                              color="#0d6efd"
                            />
                          )}
                          {item.icon === 'Speedometer' && (
                            <Speedometer
                              className="mx-2"
                              size={25}
                              color="#0d6efd"
                            />
                          )}
                          {item.icon === 'Key' && (
                            <Key className="mx-2" size={25} color="#0d6efd" />
                          )}
                          {item.icon === 'Phone' && (
                            <Phone className="mx-2" size={25} color="#0d6efd" />
                          )}
                          {item.icon === 'Share' && (
                            <Share className="mx-2" size={25} color="#0d6efd" />
                          )}
                          {item.icon === 'PersonCheckFill' && (
                            <PersonCheckFill
                              className="mx-2"
                              size={25}
                              color="#0d6efd"
                            />
                          )}
                        </div>
                        <div>
                          <Card.Title>{item.title}</Card.Title>
                          <Card.Text>{item.details}</Card.Text>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <Link to="/campaigns/create">
              <Button variant="primary" size="lg" className="my-4">
                Start a MyFundSite
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default FeaturesBanner;

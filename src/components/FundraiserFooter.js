import React, { useState } from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Globe2, Speedometer, Key } from 'react-bootstrap-icons';
const FundraiserFooter = () => {
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
  ]);

  return (
    <Container className="features my-5">
      <Row>
        <Col md={10} className="offset-md-1">
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
        </Col>
      </Row>
    </Container>
  );
};
export default FundraiserFooter;

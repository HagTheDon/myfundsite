import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import { Play, PlayCircle } from 'react-bootstrap-icons';

const HomeHeader = () => {
  return (
    <div className="home-header">
      <Container className="d-flex pt-5 justify-content-center">
        <div className="pt-5 pb-5">
          <h3>Trusted fundraising for all of life's moments</h3>
          <h4 className="mt-4">
            Get help. Give kindness. Start in just 5 minutes.
          </h4>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Link to="/campaigns/create">
              <Button variant="primary" size="lg">
                Start a FundMySite
              </Button>
            </Link>
            <span> | </span>
            <span>
              <PlayCircle size={'30px'} /> See how FundMySite Works
            </span>
          </div>
        </div>
        <div className="pt-5 mx-5">
          <img
            src="./assets/bannerhome.svg"
            alt="Header banner"
            width="600px"
            height="auto"
          />
        </div>
      </Container>
    </div>
  );
};

export default HomeHeader;

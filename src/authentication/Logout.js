import React, { useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, setToken } from '../store/slices/authSlice';
import {
  removeLocalToken,
  removeLocalUser,
} from '../utilities/helperFunctions';

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    removeLocalToken();
    removeLocalUser();
    dispatch(setCredentials(null));
    dispatch(setToken(null));
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <Col md={8} className="offset-md-2">
          <h3>Logout Successful</h3>
          <p>Thanks for visiting us. We look forward to seeing you again.</p>
          <Link to="/">
            <Button variant="warning" className="my-3">
              Return to Homepage
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Logout;

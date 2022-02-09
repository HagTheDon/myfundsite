import React, {useEffect} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCredentials, setToken} from '../store/slices/authSlice';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCredentials(null));
     dispatch(setToken(null));
     console.log('user logout run');
    },[]);
    
  return (
    <Container>
    <Row className='mt-3'>
      <Col md={8} className='offset-md-2'>
        <h3>Logout Successful</h3>
        <p>Thanks for visiting us. We look forward to you continuing your learning.</p>
        <Link to='/'>
        <Button variant='warning'>Return to Homepage</Button>
        </Link>
        </Col>
    </Row>
    </Container>
  );
};
export default Logout;

import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Col md={8} className='offset-md-2'>
          <h3>Login</h3>
          <Form>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>Phone Number / Username</Form.Label>
              <Form.Control type='email' placeholder='Enter email' />
            </Form.Group>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Keep me logged in' />
            </Form.Group>
            <Button variant='warning' type='submit'>
              Login
            </Button>
          </Form>
          <p>
            Forgot your login credentials?{' '}
            <Link to='/recover-account'>
              <Button variant='outline-primary'>Recover your Account</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;

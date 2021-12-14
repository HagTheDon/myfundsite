import { Form, Button, Row, Col, Container } from 'react-bootstrap';
const Register = () => {
  return (
    <Container>
    <Row className='mt-3'>
        <Col md={8} className='offset-md-2'>
            <h3>Register</h3>
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type='email' placeholder='Enter phone number' />
        <Form.Text className='text-muted'>
          We'll never share your phone with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='By checking this box, I agree to BirdFlap terms and conditions.' />
      </Form.Group>
      <Button variant='warning' type='submit'>
        Register
      </Button>
    </Form>
    </Col>
    </Row>
    </Container>
  );
};
export default Register;

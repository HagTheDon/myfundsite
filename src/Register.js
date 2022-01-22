import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment} from './store/slices/counterSlice';
const Register = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Container>
       <Row>
       <Col md={8} className='offset-md-2'>
        <Button variant='danger'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button variant='danger'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        </Col>
      </Row>
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

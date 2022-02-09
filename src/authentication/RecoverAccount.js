import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const RecoverAccount = () => {
  return (
    <Container>
    <Row className='mt-3'>
      <Col md={8} className='offset-md-2'>
        <h3>Recover your Account</h3>
    <Form>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Phone Number </Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>
      <Button variant='warning' type='submit'>
        Send Recovery Code
      </Button>
    </Form>
        </Col>
    </Row>
    </Container>
  );
};
export default RecoverAccount;

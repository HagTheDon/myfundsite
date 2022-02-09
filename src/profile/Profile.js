import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const user =  useSelector((state) => state.auth.user);
  return (
    <Container>
    <Row className='mt-3'>
      <Col md={10} className='offset-md-1'>
        <h3>Profile</h3>
         <p>Name: {user.fullname}</p>
         <p>Email: {user.email}</p>
      </Col>
    </Row>
    </Container>
  );
};
export default Profile;

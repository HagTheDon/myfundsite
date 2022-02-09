import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useGetInstructorCoursesQuery } from '../store/services/birdflapApi';
import { useSelector, useDispatch } from 'react-redux';
import InstructorItem from './InstructorItem';
import {useParams, useNavigate} from 'react-router-dom';
const InstructorDashboard = () => {
  const token =  useSelector((state) => state.auth.token);
  const {data, error, isLoading, isError, isSuccess} = useGetInstructorCoursesQuery(token);
  const navigate = useNavigate();
  return (
    <Container>
    <Row className='mt-3'>
      <Col md={10} className='offset-md-1'>
        <h3>Instructor Dashboard</h3>
        <Button variant='warning' onClick={() => navigate('/instructor/create-course')}>
          Create Course
        </Button>
        <hr />
        {isError && <Alert variant='warning'>Unable to fetch courses at this time. Please try again later.</Alert>}
        <Row>
          {isSuccess && data.map((item) => (
          <InstructorItem item={item} key={item.id}/>      
          ))}
        </Row>
      </Col>
    </Row>
    </Container>
  );
};
export default InstructorDashboard;

import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useGetUserCoursesQuery } from '../store/services/birdflapApi';
import { useSelector, useDispatch } from 'react-redux';
import StudyItem from './StudyItem';
const Studies = () => {
  const token =  useSelector((state) => state.auth.token);
  const {data, error, isLoading, isError, isSuccess} = useGetUserCoursesQuery(token);
  return (
    <Container>
    <Row className='mt-3'>
      <Col md={10} className='offset-md-1'>
        <h3>Studies</h3>
        {isError && <Alert variant='warning'>Unable to fetch courses at this time. Please try again later.</Alert>}
        <Row>
          {isSuccess && data.map((item) => (
          <StudyItem item={item.course} key={item.course.id}/>      
          ))}
        </Row>
      </Col>
    </Row>
    </Container>
  );
};
export default Studies;

import React, {useEffect} from 'react';
import {
  Row,
  Col,
  Container,
  Card,
} from 'react-bootstrap';
import SliderBoard from './SliderBoard';
import QuestionBoard from './QuestionBoard';
import TableOfContents from './TableOfContents';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import { useGetCourseFullQuery } from '../store/services/birdflapApi';

const StudySingle = () => {
  const token =  useSelector((state) => state.auth.token);
  const sliders =  useSelector((state) => state.course.slides);
  const questions = useSelector((state) => state.course.questions);

  let { id } = useParams();
  const {data, error, isLoading, isError, isSuccess} = useGetCourseFullQuery({id:id, token:token});
  return (
    <Container>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Ooops!! Page load error.</p>}
      {isSuccess &&
      <Row className='justify-content-md-center pb-8 mt-3'>
        <TableOfContents material={data.course.material}/>
        <Col>
            <Row>
                <Col md={6}>
          <p>{data.course.title}</p>
          </Col>
            <Col md={6}>
                Share this course | Help
            </Col>
            </Row>
            {sliders && <SliderBoard sliders={sliders}/>}
            {questions && <QuestionBoard questions={questions}/>}
        </Col>
      </Row>}
    </Container>
  );
};

export default StudySingle;

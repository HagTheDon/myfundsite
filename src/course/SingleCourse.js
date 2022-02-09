import React, {useEffect, useState} from 'react';
import {
  Row,
  Col,
  Container,
  Card,
  Tabs,
  Tab,
  Accordion,
  Button,
  Image,
  Alert
} from 'react-bootstrap';
import { StarFill, StarHalf,Star, PlayCircle,
  Award,
  Calendar,
  CameraVideo,
  Clock,
  PatchCheckFill, } from 'react-bootstrap-icons';
import { useGetCourseQuery, useEnrollInCourseMutation } from '../store/services/birdflapApi';
import {useParams, useNavigate} from 'react-router-dom';
import Rating from 'react-rating';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';

const SingleCourse = () => {
  const navigate = useNavigate();
  const token =  useSelector((state) => state.auth.token);
  let { id } = useParams();
  const {data, error, isLoading, isError, isSuccess} = useGetCourseQuery(id);
  const [enrollInCourse, {data: enrollData, error: enrollError, isLoading: enrollIsLoading, isSuccess: enrollIsSuccess, isError: enrollIsError},] = useEnrollInCourseMutation();
  if (enrollIsSuccess) {
    navigate(`/studies/${data.id}`);
  };
  if (isError) console.log(error);
 

  return (
    <>
    {isLoading && <p>Loading..</p>}
    {isError && <p>An error occured..</p>}
    {isSuccess &&
    <>
      <div className='header-bg text-secondary px-4 py-5'>
        <Container>
          <Row className='py-2'>
            <Col md={10} className='offset-1'>
              <h1 className='display-5 fw-bold text-white'>
              {data.title}
              </h1>
              <div className='col-md-8'>
                <p className='text-white-50 mb-4 lead'>
                {data.description}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='justify-content-md-center pb-8'>
          <Col md={7} className='mt-3 course-content'>
            <Card>
              <Card.Body>
                <Tabs
                  defaultActiveKey='description'
                  id='uncontrolled-tab-example'
                  className='mb-3'
                >
                   <Tab eventKey='description' title='Description'>
                    <div>
                      <div className='mb-4'>
                        <p>{data.description}</p>
                      </div>
                    </div>
                  </Tab>
                  <Tab eventKey='requirements' title='Requirements'>
                  <div>
                      <div className='mb-4'>
                    <p>{data.requirements}</p>
                    </div>
                  </div>
                  </Tab>
                 
                  <Tab eventKey='reviews' title='Reviews'>
                    <div
                      className='tab-pane fade active show'
                      id='review'
                      role='tabpanel'
                      aria-labelledby='review-tab'
                    >
                      <div className='mb-1'>
                        <h5 className='mb-1'>
                          How students rated this courses
                        </h5>
                        <div className='row align-items-center'>
                          <div className='col-auto text-center'>
                            <h3 className='display-5'>{data.rating.average_rating}</h3>
                            
                          </div>
                          <div className='col pt-1 order-3 order-md-2'>
                          <Rating 
                              start={0} 
                              stop={5} 
                              fractions={2} 
                              placeholderRating={data.rating.average_rating} 
                              readonly={true}
                              emptySymbol={<Star color='#ffaa46' size={30} />}
                              fullSymbol={<StarFill color='#ffaa46' size={30} />}
                              placeholderSymbol={<StarFill color='#ffaa46' size={30} />} />
                              <p className='mb-0 fs-6'>(Based on {data.rating.reviews.length} reviews)</p>
                          </div>
                        </div>
                      </div>

                      <hr className='my-1' />
                      <div className='mb-1'>
                        <div className='d-lg-flex align-items-center justify-content-between mb-1'>
                          <div className='mb-2 mb-lg-0'>
                            <h4 className='mb-0'>Reviews</h4>
                          </div>
                        </div>
                        {isSuccess && data.rating.reviews.map((item) => {
                            return (                          
                              <div className='d-flex border-bottom pb-2 mb-1' key={item.id}>
                              
                              <div className=' ms-3'>
                                <p>
                                <Rating 
                              start={0} 
                              stop={5} 
                              fractions={2} 
                              placeholderRating={item.rating} 
                              readonly={true}
                              emptySymbol={<Star color='#ffaa46' size={20} />}
                              fullSymbol={<StarFill color='#ffaa46' size={20} />}
                              placeholderSymbol={<StarFill color='#ffaa46' size={20} />} />
                              ({item.rating})</p>
                                <p>
                                  {item.review}
                                </p>
                                <p>{item.date}</p>
                              </div>
                            </div>);
                          })}
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className='mt-3 course-sidebar'>
      <Card className='mb-3 mb-4'>
        <div className='p-1'>
          <div
            className='d-flex justify-content-center position-relative rounded py-10 border-white border rounded-3 bg-cover'
            style={{
              background: 'url(../assets/images/course/course-javascript.jpg);',
            }}
          >
            <a
              className='popup-youtube icon-shape rounded-circle btn-play icon-xl text-decoration-none'
              href='https://www.youtube.com/watch?v=JRzWRZahOVU'
            >
              <i className='fe fe-play'></i>
            </a>
          </div>
        </div>
        <Card.Body>
          <div className='mb-3'>
          {enrollIsSuccess && <Alert variant='success'>Success.</Alert>}
          {enrollIsError && <Alert variant='danger'>Failed.</Alert>}
          <span className='text-dark fw-bold h2'>
          <NumberFormat value={data.price} displayType={'text'} thousandSeparator={true} suffix='UGX' />
          </span>
            <br />
            <del className='fs-4 text-muted'>
            <NumberFormat value={data.price+5000} displayType={'text'} thousandSeparator={true} suffix='UGX' />
            </del>
          </div>
          <div className='d-grid'>
            <Button variant='warning' className='mb-2' onClick={() => enrollInCourse({body:{course_id: data.id}, token:token})}>
              Buy Course
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Card className='mb-4'>
        <div>
          <div className='card-header'>
            <h4 className='mb-0'>Summary</h4>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item bg-transparent'>
              <PlayCircle className='align-middle me-2 text-primary' />
              {data.language.title}
            </li>
            <li className='list-group-item bg-transparent'>
              <Award className='me-2 align-middle text-success' />
              {data.category.title}
            </li>
            <li className='list-group-item bg-transparent'>
              <Calendar className='fe fe-calendar align-middle me-2 text-info' />
              {data.level.title}
            </li>
            <li className='list-group-item bg-transparent'>
              <CameraVideo className='align-middle me-2 text-secondary' />
              <NumberFormat value={data.students} displayType={'text'} thousandSeparator={true} suffix=' students'/>
            </li>
            <li className='list-group-item bg-transparent border-bottom-0'>
              <Clock className='align-middle me-2 text-warning' />
              Lifetime access
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <Card.Header>
          <h4 className='mb-0'>Instructor</h4>
        </Card.Header>
        <Card.Body>
          <div className='d-flex align-items-center'>
            <div className='position-relative'>
              <Image
                src={`./assets/${data.user.picture_url}`}
                roundedCircle
                className='avatar-xl'
              />
              <a
                href='/'
                className='position-absolute mt-2 ms-n3'
                data-bs-toggle='tooltip'
                data-placement='top'
                title=''
                data-bs-original-title='Verifed'
              >
              </a>
            </div>
            <div className='ms-4'>
              <h5 className='mb-0'>{data.user.fullname}</h5>
              <p className='mb-1 fs-6'>Front-end Developer, Designer</p>
              <Button variant='outline-secondary'>View Details</Button>
            </div>
          </div>
         
        </Card.Body>
      </Card>
    </Col>
        </Row>
      </Container>
      </>
}
    </>
  );
};
export default SingleCourse;

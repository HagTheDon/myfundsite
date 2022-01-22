import { Col, Card, Image, Button } from 'react-bootstrap';
import {
  PlayCircle,
  Award,
  Calendar,
  CameraVideo,
  Clock,
  PatchCheckFill,
} from 'react-bootstrap-icons';

const CourseSidebar = () => {
  return (
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
            <span className='text-dark fw-bold h2'>10,000 UGX</span>
            <br />
            <del className='fs-4 text-muted'>15,000 UGX</del>
          </div>
          <div className='d-grid'>
            <a href='/' className='btn btn-primary mb-2'>
              Start Free Month
            </a>
            <a href='pricing.html' className='btn btn-outline-primary'>
              Get Full Access
            </a>
          </div>
        </Card.Body>
      </Card>
      <Card className='mb-4'>
        <div>
          <div className='card-header'>
            <h4 className='mb-0'>What’s included</h4>
          </div>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item bg-transparent'>
              <PlayCircle className='align-middle me-2 text-primary' />
              12 hours video
            </li>
            <li className='list-group-item bg-transparent'>
              <Award className='me-2 align-middle text-success' />
              Certificate
            </li>
            <li className='list-group-item bg-transparent'>
              <Calendar className='fe fe-calendar align-middle me-2 text-info' />
              12 Article
            </li>
            <li className='list-group-item bg-transparent'>
              <CameraVideo className='align-middle me-2 text-secondary' />
              Watch Offline
            </li>
            <li className='list-group-item bg-transparent border-bottom-0'>
              <Clock className='align-middle me-2 text-warning' />
              Lifetime access
            </li>
          </ul>
        </div>
      </Card>
      <Card>
        <Card.Body>
          <div className='d-flex align-items-center'>
            <div className='position-relative'>
              <Image
                src='./assets/avatar-3.jpeg'
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
                <PatchCheckFill height='30' width='30' />
              </a>
            </div>
            <div className='ms-4'>
              <h4 className='mb-0'>Jenny Wilson</h4>
              <p className='mb-1 fs-6'>Front-end Developer, Designer</p>
              <span className='fs-6'>
                <span className='text-warning'>4.5</span>
                <span className='mdi mdi-star text-warning me-2'></span>
                Instructor Rating
              </span>
            </div>
          </div>
          <div className='border-top row mt-3 border-bottom mb-3 g-0'>
            <Col>
              <div className='pe-1 ps-2 py-3'>
                <h5 className='mb-0'>11,604</h5>
                <span>Students</span>
              </div>
            </Col>
            <Col className='border-start'>
              <div className='pe-1 ps-3 py-3'>
                <h5 className='mb-0'>32</h5>
                <span>Courses</span>
              </div>
            </Col>
            <Col className='border-start'>
              <div className='pe-1 ps-3 py-3'>
                <h5 className='mb-0'>12,230</h5>
                <span>Reviews</span>
              </div>
            </Col>
          </div>
          <p>
            I am an Innovation designer focussing on UX/UI based in Berlin. As a
            creative resident at Figma explored the city of the future and how
            new technologies.
          </p>
          <Button variant='outline-secondary'>View Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseSidebar;

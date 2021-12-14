import {
  Card,
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import {
  ArrowRight,
  Star,
  StarFill,
  StarHalf,
  Clock,
  BrightnessAltLow,
  Bookmark,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const SingleTrending = () => {
  return (
    <Col md='3' className='mt-4'>
      <Link to='/course' className='link-unstyled'>
        <Card>
          <Card.Img variant='top' src='./assets/course.jpeg' />
          <Card.Body>
            <Card.Title className='fs-6'>
              Getting Started with JavaScript
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title.
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>
              <StarFill color='#ffaa46' size={14} />
              <StarFill color='#ffaa46' size={14} />
              <StarFill color='#ffaa46' size={14} />
              <StarFill color='#ffaa46' size={14} />
              <StarHalf color='#ffaa46' size={14} />
              <span className='rating-size rating-color'>4.6</span>{' '}
              <span className='text-muted rating-size'>(1,200)</span>
            </ListGroupItem>
            <ListGroupItem className='rating-size course-footer-color'>
              <Clock size={12} /> 2h 30m <BrightnessAltLow size={18} /> Beginner
            </ListGroupItem>
          </ListGroup>
          <Card.Footer className='rating-size course-footer-color'>
            <Row className='align-items-center g-0'>
              <Col md='auto'>
                <Image
                  src='./assets/avatar-3.jpeg'
                  roundedCircle
                  className='avatar-xs'
                />
              </Col>
              <Col className='ms-2'>
                <span>Juanita Bell</span>
              </Col>
              <Col md='auto'>
                <a href='#' className='text-muted bookmark'>
                  <Bookmark />
                </a>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleTrending;

import {
  Card,
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col,
} from 'react-bootstrap';
import {
  Star,
  StarFill,
  StarHalf,
  Clock,
  BrightnessAltLow,
  Bookmark,
} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import Rating from 'react-rating';
import LinesEllipsis from 'react-lines-ellipsis';

const CourseItem = ({item}) => {
  const profile_url = `./assets/${item.user.picture_url}`;
  const link_url = `/course/${item.id}`;
  return (
    <Col md='3' className='mt-4'>
      <Link to={link_url} className='link-unstyled'>
        <Card>
          <Card.Img variant='top' src='./assets/course.jpeg' />
          <Card.Body>
            <Card.Title className='fs-6'>
              {item.title}
            </Card.Title>
            <Card.Text>
              <LinesEllipsis
                text={item.summary}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
            </Card.Text>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>
              <Rating 
                start={0} 
                stop={5} 
                fractions={2} 
                placeholderRating={item.rating.average_rating} 
                readonly={true}
                emptySymbol={<Star color='#ffaa46' size={14} />}
                fullSymbol={<StarFill color='#ffaa46' size={14} />}
                placeholderSymbol={<StarFill color='#ffaa46' size={14} />} />
              <span className='rating-size rating-color'>{' ' + item.rating.average_rating}</span>{' '}
              <span className='text-muted rating-size'>
                (<NumberFormat value={item.rating.raters} displayType={'text'} thousandSeparator={true} />)
              </span>
            </ListGroupItem>
            <ListGroupItem className='rating-size course-footer-color'>
              <Clock size={12} /> 2h 30m <BrightnessAltLow size={18} /> Beginner
            </ListGroupItem>
          </ListGroup>
          <Card.Footer className='rating-size course-footer-color'>
            <Row className='align-items-center g-0'>
              <Col md='auto'>
                <Image
                  src={profile_url}
                  roundedCircle
                  className='avatar-xs'
                />
              </Col>
              <Col className='ms-2'>
                <span>{item.user.fullname}</span>
              </Col>
              <Col md='auto'>
                <a href='/' className='text-muted bookmark'>
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

export default CourseItem;

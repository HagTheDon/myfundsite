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
  
  const InstructorItem = ({item}) => {
    const link_url = `/instructor/${item.id}`;
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
                  {item.rating &&
                <Rating 
                  start={0} 
                  stop={5} 
                  fractions={2} 
                  placeholderRating={item.rating.average_rating} 
                  readonly={true}
                  emptySymbol={<Star color='#ffaa46' size={14} />}
                  fullSymbol={<StarFill color='#ffaa46' size={14} />}
                  placeholderSymbol={<StarFill color='#ffaa46' size={14} />} />
                }
                {item.rating ?
                (<>
                <span className='rating-size rating-color'>{' ' + item.rating.average_rating}</span>{' '}
                <span className='text-muted rating-size'>
                  (<NumberFormat value={item?.rating.raters} displayType={'text'} thousandSeparator={true} />)
                </span>
                </>):<span>No rating so far</span>
                }
              </ListGroupItem>
              <ListGroupItem className='rating-size course-footer-color'>
                <Clock size={12} /> 2h 30m <BrightnessAltLow size={18} /> Beginner
              </ListGroupItem>
            </ListGroup>
            <Card.Footer className='rating-size course-footer-color'>
              <Row className='align-items-center g-0'>
                
              </Row>
            </Card.Footer>
          </Card>
        </Link>
      </Col>
    );
  };
  
  export default InstructorItem;
  
import {
    Card,
    ListGroup,
    ListGroupItem,
    Image,
    Row,
    Col,
    Button,
    ProgressBar
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
  import ShareContent from '../components/ShareContent';
  
  const StudyItem = ({item}) => {
    const profile_url = `./assets/${item.user.picture_url}`;
    const link_url = `/studies/${item.id}`;
    return (
      <Col md='4' className='mt-4'>
        
          <Card>
            <Card.Body>
            <Link to={link_url} className='link-unstyled'>
            <Card.Title>{item.title}</Card.Title>
            </Link>
            </Card.Body>
            <ListGroup className='list-group-flush'>
            <ListGroupItem>
            <Card.Text>
            Course Progress
            </Card.Text>
            <ProgressBar variant="warning" now={60} label={`${60}%`} />
            </ListGroupItem>
          </ListGroup>
            <Card.Footer className='rating-size course-footer-color'>
              <Row className='align-items-center g-0'>
            
                <Col className='ms-2'>
                  <span>Share this Course</span>
                </Col>
                <Col md='auto'>
                    <ShareContent url={`https://birdflap.com/course/${item.id}`} title={item.title} content={item.description} tag={'birdflap'} />
                </Col>
              </Row>
            </Card.Footer>
          </Card>
       
      </Col>
    );
  };
  
  export default StudyItem;
  
import {
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { useGetUserFundraisersQuery } from '../store/services/myfundsiteAPI';
import { useSelector } from 'react-redux';
import { PencilSquare, Eye } from 'react-bootstrap-icons';
import LinesEllipsis from 'react-lines-ellipsis';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const YourFundraisers = () => {
  const token = useSelector((state) => state.auth.token);
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetUserFundraisersQuery(token);
  const navigate = useNavigate();
  return (
    <Container>
      <Row className="mt-3">
        <Col md={10} className="offset-md-1">
          <div className="d-flex justify-content-between">
            <h3>Your Fundraisers</h3>
            <Button
              variant="primary"
              onClick={() => navigate('/campaigns/create')}
            >
              Start a new fundraiser
            </Button>
          </div>

          <hr />
          {isError && (
            <Alert variant="warning">
              Unable to fetch fundraisers at this time. Please try again later.
            </Alert>
          )}
          <Row>
            {isSuccess &&
              data.map((item) => (
                <Col md="3" className="mt-2">
                  <Link
                    to={
                      item.approved
                        ? `/campaigns/manage/${item.id}`
                        : `/campaigns/edit/${item.id}`
                    }
                    className="link-unstyled"
                  >
                    <Card>
                      <Card.Img variant="top" src="./assets/course.jpeg" />
                      <Card.Body>
                        <Card.Title className="fs-6">
                          {item?.title || 'Add a fundraiser title'}
                        </Card.Title>
                        <Card.Text>
                          <LinesEllipsis
                            text={
                              item?.details ||
                              'Add fundraiser details like why you are fundraising? A brief story about your needs.'
                            }
                            maxLine="3"
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                          />
                        </Card.Text>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem className="rating-size course-footer-color">
                            {item.approved ? (
                              <>
                                <Eye size={12} />
                                Manage Fundraiser
                              </>
                            ) : (
                              <>
                                <PencilSquare size={12} /> Edit
                              </>
                            )}
                          </ListGroupItem>
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default YourFundraisers;

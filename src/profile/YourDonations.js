import { useGetUserDonationsQuery } from '../store/services/myfundsiteAPI';
import { useSelector } from 'react-redux';
import { formatDistance } from 'date-fns';
import NumberFormat from 'react-number-format';
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
import { PencilSquare, Eye } from 'react-bootstrap-icons';
import LinesEllipsis from 'react-lines-ellipsis';
import { useNavigate, Link } from 'react-router-dom';

const YourDonations = () => {
  const token = useSelector((state) => state.auth.token);
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetUserDonationsQuery({
    page: 0,
    token: token,
  });

  if (isError) console.log('an error occurred loading donations', error);
  if (isSuccess) console.log('donations fetched', data);

  const navigate = useNavigate();
  return (
    <Container>
      <Row className="mt-3">
        <Col md={10} className="offset-md-1">
          <div className="d-flex justify-content-between">
            <h3>Your Donations</h3>
            <Button variant="primary" onClick={() => navigate('/discover')}>
              Donate to Fundraiser
            </Button>
          </div>

          <hr />
          {isError && (
            <Alert variant="warning">
              Unable to fetch donations at this time. Please try again later.
            </Alert>
          )}
          <Row>
            {isSuccess &&
              data.map((item) => (
                <Col md="4">
                  <Link to={`/donations/${item.id}`} className="link-unstyled">
                    <Card>
                      <Card.Body>
                        <Card.Title className="fs-6">
                          Donated {item.amount} to {item.fundraiser.title}
                        </Card.Title>

                        <p>
                          {' '}
                          Words of encouragement
                          <LinesEllipsis
                            text={
                              item?.comment || 'No words of encouragement made.'
                            }
                            maxLine="3"
                            ellipsis="..."
                            trimRight
                            basedOn="letters"
                          />
                        </p>
                        <p>
                          Fundraiser Raised:{' '}
                          <NumberFormat
                            value={item.fundraiser.raised}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'$'}
                            className="bold-text"
                          />
                        </p>
                        <p>
                          Number of Donators:
                          <NumberFormat
                            value={item.fundraiser.raised_count}
                            displayType={'text'}
                            thousandSeparator={true}
                            className="bold-text"
                          />
                        </p>
                        <ListGroup className="list-group-flush">
                          <ListGroupItem className="rating-size course-footer-color">
                            {formatDistance(
                              new Date(item.created_at),
                              new Date(),
                              {
                                addSuffix: true,
                              }
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
export default YourDonations;

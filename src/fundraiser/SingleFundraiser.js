import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import FundraiserFooter from '../components/FundraiserFooter';
import ShareContent from '../components/ShareContent';
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  ProgressBar,
} from 'react-bootstrap';
import { SuitHeart, Tag, Flag } from 'react-bootstrap-icons';
import {
  useGetFundraiserQuery,
  useGetDonationsQuery,
} from '../store/services/myfundsiteAPI';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Rating from 'react-rating';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';

const SingleFundraiser = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  let { id } = useParams();
  const { data, error, isLoading, isError, isSuccess } = useGetFundraiserQuery(
    id
  );
  const {
    data: donations,
    error: errorDonations,
    isLoading: isLoadingDonations,
    isError: isErrorDonations,
    isSuccess: isSuccessDonations,
  } = useGetDonationsQuery({ page: 0, id: id, token: token });
  if (isErrorDonations)
    console.log('an error occurred loading donations', errorDonations);
  if (isSuccessDonations) console.log('donations fetched', donations);

  return (
    <>
      {isLoading && <p>Loading..</p>}
      {isError && <p>An error occured..</p>}
      {isSuccess && (
        <Container>
          <Row className="justify-content-md-center pb-8">
            <Col md={7} className="mt-3">
              <div className="me-5">
                <h3 className="display-6 fw-bold">{data.title}</h3>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-primary"
                    className="mx-2 btn-circle btn-sm"
                    disabled
                  >
                    <SuitHeart size={'18px'} />
                  </Button>
                  <span>
                    {' '}
                    {data.user.first_name + ' ' + data.user.last_name}
                  </span>
                </div>
                <hr />
                <div className="d-flex align-items-center">
                  <div>
                    Created{' '}
                    {formatDistance(new Date(data.updated_at), new Date(), {
                      addSuffix: true,
                    })}
                  </div>
                  <div className="mx-2 f4"> | </div>
                  <div>
                    <Tag size={'18px'} /> {data.category.title}
                  </div>
                </div>
                <hr />
                <p className="bold-text">
                  A few words from{' '}
                  {data.user.first_name + ' ' + data.user.last_name}
                </p>
                <Row>
                  <Col>
                    <p className="mb-4">{data.details}</p>
                  </Col>
                </Row>
                <Row className="my-5">
                  <Col>
                    <div className="d-grid gap-2">
                      <Button
                        variant="warning"
                        size="lg"
                        type="button"
                        onClick={() => navigate('donate')}
                      >
                        Donate Now
                      </Button>
                    </div>
                  </Col>
                  <Col>
                    <div className="d-grid gap-2">
                      <ShareContent
                        btnVariant="outline-warning"
                        btnSize="lg"
                        title={data.title}
                        content={data.details}
                        tag="Fundraiser"
                        url={`http://localhost:3000/f/${id}`}
                      />
                    </div>
                  </Col>
                </Row>
                <hr />
                <div>
                  <h2 className="text-dark h5 bold-text mb-3">Organizer</h2>
                  <div className="d-flex align-items-top">
                    <Button
                      variant="outline-primary"
                      className="mx-2 btn-circle btn-sm"
                      disabled
                    >
                      <SuitHeart size={'18px'} />
                    </Button>
                    <div>
                      <span className="bold-text">
                        {data.user.first_name + ' ' + data.user.last_name}
                      </span>
                      <br />
                      <span>Organizer</span>
                      <br />
                      <span>{data.city.name + ',' + data.city.state.code}</span>
                      <br />
                      <Button variant="outline-primary mt-3">Contact</Button>
                    </div>
                  </div>
                </div>
                <hr />
                <div>
                  <h2 className="text-dark h5 bold-text mb-3">
                    Words of support
                  </h2>
                  {isSuccessDonations && (
                    <div>
                      {donations.length > 0 &&
                        donations.map((item) => (
                          <div className="d-flex align-items-top mt-3">
                            <Button
                              variant="outline-primary"
                              className="mx-2 btn-circle btn-sm"
                              disabled
                            >
                              <SuitHeart size={'18px'} />
                            </Button>
                            <div>
                              <span className="bold-text">
                                {!item.anonymous ? item.name : 'Anonymous'}
                                {' donated '}
                                <NumberFormat
                                  value={item.amount}
                                  displayType={'text'}
                                  thousandSeparator={true}
                                  prefix={'$'}
                                  className="bold-text"
                                />
                              </span>
                              <br />
                              <span>{item.comment}</span>
                              <br />
                              <p className="text-muted small pt-2">
                                {formatDistance(
                                  new Date(item.created_at),
                                  new Date(),
                                  {
                                    addSuffix: true,
                                  }
                                )}
                              </p>
                            </div>
                          </div>
                        ))}
                      <Button variant="outline-primary mb-3">Show more</Button>
                    </div>
                  )}
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between my-5">
                  <p>Please donate to share words of encouragement.</p>
                  <Button variant="primary">Continue</Button>
                </div>
                <div className="my-5">
                  <Button variant="light">
                    <Flag size={'16px'} /> Report fundraiser
                  </Button>
                </div>
              </div>
            </Col>
            <Col md={3} className="mt-3">
              <Card className="mb-3 mb-4">
                <Card.Body>
                  <div className="mb-3">
                    <span className="text-dark h6">
                      <NumberFormat
                        value={data.raised}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        className="bold-text h4"
                      />
                      <span> USD raised of </span>
                      <NumberFormat
                        value={data.goal}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                      />
                    </span>
                    <ProgressBar
                      striped
                      variant="primary"
                      now={(parseInt(data.raised) / parseInt(data.goal)) * 100}
                      className="mt-1"
                    />
                    <span className="text-dark h6 mt-1">
                      <NumberFormat
                        value={data.raised_count}
                        displayType={'text'}
                        thousandSeparator={true}
                      />{' '}
                      donations
                    </span>
                  </div>
                  <div className="d-grid">
                    <ShareContent
                      btnVariant="warning"
                      btnSize="md"
                      title={data.title}
                      content={data.details}
                      tag="Fundraiser"
                      url={`http://localhost:3000/f/${id}`}
                      btnClass="mb-2"
                    />
                    <Button
                      variant="warning"
                      className="mb-2"
                      type="button"
                      onClick={() => navigate('donate')}
                    >
                      Donate Now
                    </Button>
                    {isSuccessDonations && (
                      <div>
                        {donations.length > 0 &&
                          donations.map((item) => (
                            <>
                              <div className="d-flex align-items-center">
                                <Button
                                  variant="outline-primary"
                                  className="mx-2 btn-circle btn-sm"
                                  disabled
                                >
                                  <SuitHeart size={'18px'} />
                                </Button>
                                <div>
                                  {item.anonymous === false ? (
                                    <span>{item.name}</span>
                                  ) : (
                                    <span>Anonymous</span>
                                  )}
                                  <br />
                                  <span className="bold-text">
                                    <NumberFormat
                                      value={item.amount}
                                      displayType={'text'}
                                      thousandSeparator={true}
                                      prefix={'$'}
                                      className="bold-text small"
                                    />
                                  </span>
                                </div>
                              </div>
                              <hr />
                            </>
                          ))}
                        <Button variant="outline-primary">
                          See all Donations
                        </Button>
                      </div>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
      <FundraiserFooter />
    </>
  );
};
export default SingleFundraiser;

import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  ProgressBar,
} from 'react-bootstrap';
import { SuitHeart, Tag } from 'react-bootstrap-icons';
import {
  useGetUserFundraiserSingleQuery,
  useGetDonationsQuery,
} from '../store/services/myfundsiteAPI';
import { useParams } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';

const ManageFundraiser = () => {
  const token = useSelector((state) => state.auth.token);
  let { id } = useParams();
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetUserFundraiserSingleQuery({ id: id, token: token });
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
                <p className="bold-text">A few words from you</p>
                <Row>
                  <Col>
                    <p className="mb-4">{data.details}</p>
                  </Col>
                </Row>

                <hr />
                <div>
                  <h2 className="text-dark h5 bold-text mb-3">
                    Words of support
                  </h2>
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
                            {item.name + ' donated '}
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
                    <Button variant="warning" className="mb-2">
                      Share
                    </Button>
                    <Button variant="warning" className="mb-2">
                      End Fundraiser
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
    </>
  );
};
export default ManageFundraiser;

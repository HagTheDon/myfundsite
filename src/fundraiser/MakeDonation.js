import React, { useEffect, useState } from 'react';
import { formatDistance } from 'date-fns';
import FundraiserFooter from '../components/FundraiserFooter';
import {
  Row,
  Col,
  Container,
  Card,
  Button,
  ProgressBar,
  Alert,
  Form,
} from 'react-bootstrap';
import { SuitHeart, Tag, Flag } from 'react-bootstrap-icons';
import {
  useGetFundraiserQuery,
  useMakeDonationMutation,
} from '../store/services/myfundsiteAPI';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Rating from 'react-rating';
import NumberFormat from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

//Form validation rules
const schema = Yup.object().shape({
  name: Yup.string().required(),
  comment: Yup.string(),
  amount: Yup.string().required(),
  tip: Yup.string(),
  anonymous: Yup.boolean(),
});

const MakeDonation = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  let { id } = useParams();
  const { data, error, isLoading, isError, isSuccess } = useGetFundraiserQuery(
    id
  );
  const [
    makeDonation,
    {
      data: dataDonation,
      error: errorDonation,
      isLoading: isLoadingDonation,
      isError: isErrorDonation,
      isSuccess: isSuccessDonation,
    },
  ] = useMakeDonationMutation();
  if (isSuccessDonation) {
    console.log('donation made succesfully', dataDonation);
    navigate(`/donations`);
  }
  if (isErrorDonation) console.log('Error making donation', errorDonation);

  return (
    <>
      {isLoading && <p>Loading..</p>}
      {isError && <p>An error occured..</p>}
      {isSuccess && (
        <Container>
          <Formik
            initialValues={{
              name: '',
              comment: '',
              amount: '',
              tip: '',
              anonymous: false,
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
              values.fundraiser_id = id;
              makeDonation({ body: values });
              resetForm();
            }}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldValue,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Row className="justify-content-md-center pb-8 my-5">
                <Col md={7}>
                  {isLoadingDonation && (
                    <Alert variant="success">Processing donation ...</Alert>
                  )}
                  <div className="px-3 shadow">
                    <Card.Body>
                      <Button
                        variant="light"
                        type="button"
                        onClick={() => navigate(`/f/${id}`)}
                        className="my-3"
                      >
                        Return to fundraiser
                      </Button>
                      <div className="d-flex">
                        <img
                          src="/assets/fundraiser.jpeg"
                          width="200"
                          height="auto"
                          alt="fundraiser image"
                          className="me-2"
                        />
                        <div>
                          <p>
                            You're supporting <strong>{data.title}</strong>
                            <br />
                            Your donation will benefit{' '}
                            <strong>
                              {data.user.first_name + ' ' + data.user.last_name}
                            </strong>
                          </p>
                        </div>
                      </div>
                      <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="amount">
                          <Form.Label>Enter your donation</Form.Label>
                          <Form.Control
                            type="text"
                            name="amount"
                            value={values.amount}
                            onChange={handleChange}
                            isInvalid={!!errors.amount}
                          />
                          <Form.Text className="text-danger">
                            {errors.amount}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="tip">
                          <Form.Label>Tip FundMySite Services</Form.Label>
                          <p className="small text-muted">
                            FundMySite has a 0% platform fee for organizers.
                            FundMySite will continue offering its services
                            thanks to donors who will leave an optional amount
                            here:
                          </p>
                          <Form.Control
                            type="text"
                            name="tip"
                            value={values.tip}
                            onChange={handleChange}
                            isInvalid={!!errors.tip}
                          />
                          <Form.Text className="text-danger">
                            {errors.tip}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="comment">
                          <Form.Label>
                            Send Fundraiser some words of encouragement
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="comment"
                            value={values.comment}
                            onChange={handleChange}
                            isInvalid={!!errors.comment}
                          />
                          <Form.Text className="text-danger">
                            {errors.comment}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                          <Form.Label>
                            Name of person or Organisation donating the funds
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!errors.name}
                          />
                          <Form.Text className="text-danger">
                            {errors.name}
                          </Form.Text>
                        </Form.Group>
                        <Form.Check
                          type="switch"
                          id="custom-switch"
                          label="Make this donation anonymously"
                          name="anonymous"
                          value={values.anonymous}
                          onChange={handleChange}
                        />

                        <Button
                          variant="primary"
                          type="submit"
                          className="my-3"
                        >
                          Make Donation
                        </Button>
                        <p className="small text-muted">
                          Certified Charity donations are made to PayPal Giving
                          Fund, minus processing fees and granted subject to its
                          terms within 90 days, since the charity has not
                          enrolled with PayPal Giving Fund and has not reviewed
                          or approved this campaign. In the unlikely event that
                          there is a problem funding your chosen charity, PayPal
                          Giving Fund will contact you before reassigning the
                          funds. Your donation is typically tax deductible in
                          the US
                        </p>
                      </Form>
                    </Card.Body>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="shadow">
                    <Card.Body>
                      <div className="d-flex justify-content-between">
                        <p>Your donation</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Your donation</p>
                        <p>${values.amount || '0.00'}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>FundMySite tip</p>
                        <p>${values.tip || '0.00'}</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p>Total due</p>
                        <p>
                          $
                          {parseInt(values.amount) + parseInt(values.tip) ||
                            values.amount ||
                            values.tip ||
                            '0.00'}
                        </p>
                      </div>
                    </Card.Body>
                  </div>
                  <div className="my-3">
                    <p className="text-strong text-center">
                      We protect your donation
                    </p>
                  </div>
                </Col>
              </Row>
            )}
          </Formik>
        </Container>
      )}
    </>
  );
};
export default MakeDonation;

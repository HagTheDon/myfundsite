import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  useGetCategoriesQuery,
  useGetCitiesQuery,
  useGetStatesQuery,
  useGetCountriesQuery,
  useGetUserFundraiserSingleQuery,
  useEditFundraiserMutation,
  useDeleteFundraiserMutation,
} from '../store/services/myfundsiteAPI';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

//Form validation rules
const schema = Yup.object().shape({
  category_id: Yup.string(),
  city_id: Yup.string(),
  title: Yup.string(),
  details: Yup.string(),
  goal: Yup.string(),
  cover_phoyo: Yup.string(),
});

const EditFundraiser = () => {
  //used to return to the fundraisers page
  const navigate = useNavigate();
  //State values to change select boxes
  let { id } = useParams();
  const {
    data: fundraiser,
    isSuccess: isSuccessFundraiser,
    isLoading: isLoadingFundraiser,
    isError: isErrorFundraiser,
  } = useGetUserFundraiserSingleQuery({ id: id });

  const [initialValues, setInitialValues] = useState({});
  useEffect(() => {
    if (isSuccessFundraiser) {
      const initials = {
        city_id: fundraiser.city_id,
        category_id: fundraiser.category_id,
        title: fundraiser.title,
        details: fundraiser.details,
        goal: fundraiser.goal,
        cover_photo: fundraiser.cover_photo,
      };
      setInitialValues(initials);
    }
  }, [fundraiser, isSuccessFundraiser]);

  const [country, setCountry] = useState('1');
  const [state, setState] = useState('2');

  const [
    editFundraiser,
    { data, error, isLoading, isSuccess, isError },
  ] = useEditFundraiserMutation();

  const [
    deleteFundraiser,
    {
      data: deleted,
      error: errorDelete,
      isLoading: isLoadingDelete,
      isSuccess: isSuccessDelete,
      isError: isErrorDelete,
    },
  ] = useDeleteFundraiserMutation();

  if (isSuccess || isSuccessDelete) {
    console.log('fundraiser edited data', data);
    navigate(`/campaigns`);
  }
  if (isError) console.log('Error adding course', error);

  const {
    data: categories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    isSuccess: isSuccessCategories,
  } = useGetCategoriesQuery();

  const {
    data: countries,
    isLoading: isLoadingCountries,
    isError: isErrorCountries,
    isSuccess: isSuccessCountries,
  } = useGetCountriesQuery();

  const {
    data: states,
    isLoading: isLoadingStates,
    isError: isErrorStates,
    isSuccess: isSuccessStates,
  } = useGetStatesQuery({ country_id: country });

  const {
    data: cities,
    isLoading: isLoadingCities,
    isError: isErrorCities,
    isSuccess: isSuccessCities,
  } = useGetCitiesQuery({ state_id: state });

  function handleStateChange(event) {
    setState(event.target.value);
    console.log(state);
  }

  function handleCountryChange(event) {
    setCountry(event.target.value);
    console.log(country);
  }

  return (
    <Container>
      <Row className="my-4">
        <Col md={6} className="offset-md-3">
          <h3>Start a Fundraiser</h3>
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validationSchema={schema}
            /*
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          
         */
            onSubmit={(values, { resetForm }) => {
              editFundraiser({ body: values, id: id });
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
              <Form noValidate onSubmit={handleSubmit}>
                <p>Where do you live?</p>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="country">
                      <Form.Select
                        name="country_id"
                        onChange={handleCountryChange}
                        value={country}
                      >
                        <option>Select Country</option>
                        {isSuccessCountries &&
                          countries.map((country) => {
                            return (
                              <option value={country.id} key={country.id}>
                                {country.name}
                              </option>
                            );
                          })}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="state">
                      <Form.Select
                        name="state_id"
                        onChange={handleStateChange}
                        value={state}
                      >
                        <option>Select State</option>
                        {isSuccessStates &&
                          states.map((state) => {
                            return (
                              <option value={state.id} key={state.id}>
                                {state.name}
                              </option>
                            );
                          })}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="city">
                      <Form.Select
                        name="city_id"
                        onChange={handleChange}
                        value={values.city_id}
                        isInvalid={!!errors.city_id}
                      >
                        <option>Select City</option>
                        {isSuccessCities &&
                          cities.map((city) => {
                            return (
                              <option value={city.id} key={city.id}>
                                {city.name}
                              </option>
                            );
                          })}
                      </Form.Select>
                      <Form.Text className="text-danger">
                        {errors.city_id}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="category">
                  <Form.Label>What are you fundraising for?</Form.Label>
                  <Form.Select
                    name="category_id"
                    onChange={handleChange}
                    value={values.category_id}
                    isInvalid={!!errors.category_id}
                  >
                    <option>Select Category</option>
                    {isSuccessCategories &&
                      categories.map((category) => {
                        return (
                          <option value={category.id} key={category.id}>
                            {category.title}
                          </option>
                        );
                      })}
                  </Form.Select>
                  <Form.Text className="text-danger">
                    {errors.category_id}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="goal">
                  <Form.Label>How much would you like to raise?</Form.Label>
                  <Form.Control
                    type="text"
                    name="goal"
                    value={values.goal}
                    onChange={handleChange}
                    isInvalid={!!errors.goal}
                  />
                  <Form.Text className="text-danger">{errors.goal}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="cover_photo">
                  <Form.Label>Add a cover photo</Form.Label>
                  <Form.Control
                    type="text"
                    name="cover_photo"
                    value={values.cover_photo}
                    onChange={handleChange}
                    isInvalid={!!errors.cover_photo}
                  />
                  <Form.Text className="text-danger">
                    {errors.cover_photo}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>What's your fundraiser title?</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    isInvalid={!!errors.title}
                  />
                  <Form.Text className="text-danger">{errors.title}</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="details">
                  <Form.Label>Why are you fundraising?</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={values.details}
                    onChange={(content) => {
                      setFieldValue('details', content);
                    }}
                    isInvalid={!!errors.details}
                  />
                  <Form.Text className="text-danger">
                    {errors.details}
                  </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit" className="me-2">
                  Save Changes
                </Button>
                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={() => deleteFundraiser({ id: id })}
                >
                  Delete Fundraiser
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};
export default EditFundraiser;

import React, { useState, useRef } from "react";
import {
  Card,
  Form,
  Alert,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  useGetCategoriesQuery,
  useGetLanguagesQuery,
  useGetLevelsQuery,
  useAddCourseMutation,
} from "../store/services/birdflapApi";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

//Form validation rules
const schema = Yup.object().shape({
  title: Yup.string()
    .required("Required")
    .max(200, "Must be 200 characters or less"),
  category_id: Yup.string().required("Required"),
  price: Yup.string(),
  language_id: Yup.string().required("Required"),
  level_id: Yup.string().required("Required"),
  summary: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  requirements: Yup.string().required("Required"),
  image_url: Yup.string()
    .required("Required")
    .max(200, "Must be 200 characters or less"),
});

const CreateCourse = () => {
  const {
    data: categories,
    error: errorCategories,
    isLoading: isLoadingCategories,
    isError: isErrorCategories,
    isSuccess: isSuccessCategories,
  } = useGetCategoriesQuery();
  const {
    data: levels,
    error: errorLevels,
    isLoading: isLoadingLevels,
    isError: isErrorLevels,
    isSuccess: isSuccessLevels,
  } = useGetLevelsQuery();
  const {
    data: languages,
    error: errorLanguages,
    isLoading: isLoadingLanguages,
    isError: isErrorLanguages,
    isSuccess: isSuccessLanguages,
  } = useGetLanguagesQuery();

  //add the course
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [
    addCourse,
    { data, error, isLoading, isSuccess, isError },
  ] = useAddCourseMutation();
  if (isSuccess) {
    console.log("course data", data);
    navigate(`/instructor/${data.id}`);
  }
  if (isError) console.log("Error adding course", error);

  const config = {
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };

  const Content = () => {
    if (isLoadingLevels || isLoadingLanguages || isLoadingCategories)
      return <Alert variant="warning">Loading ...</Alert>;
    else if (isErrorCategories || isErrorLanguages || isErrorLevels)
      return (
        <Alert variant="warning">Something went wrong with loading ...</Alert>
      );
    else
      return (
        <Container>
          <Row className="mt-3">
            <Col sm={8} className="offset-md-1">
              <Card>
                <Card.Header as="h5">Create a New Course</Card.Header>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    Add the initial information a user sees before subscribing
                    to a course.
                  </Card.Subtitle>
                  <Formik
                    initialValues={{
                      title: "",
                      category_id: "",
                      price: "",
                      language_id: "",
                      level_id: "",
                      summary: "",
                      description: "",
                      requirements: "",
                      image_url: "",
                    }}
                    validationSchema={schema}
                    onSubmit={(values, { resetForm }) => {
                      addCourse({ body: values, token: token });
                    }}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      setFieldValue,
                      values,
                      touched,
                      isValid,
                      errors,
                    }) => (
                      <Form noValidate onSubmit={handleSubmit}>
                        {isError && (
                          <Alert variant="info">
                            Something went wrong with adding course.
                          </Alert>
                        )}
                        <h5>Course Details</h5>
                        <Row>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="courseTitle"
                            >
                              <Form.Label>Course Title</Form.Label>
                              <Form.Control
                                type="text"
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isInvalid={!!errors.title}
                              />
                              <Form.Text className="text-danger">
                                {errors.title}
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="courseTitle"
                            >
                              <Form.Label>Course Price (UGX)</Form.Label>
                              <Form.Control
                                type="text"
                                name="price"
                                value={values.price}
                                onChange={handleChange}
                                isInvalid={!!errors.price}
                              />
                              <Form.Text className="text-danger">
                                {errors.price}
                              </Form.Text>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Course Category</Form.Label>
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
                                      <option
                                        value={category.id}
                                        key={category.id}
                                      >
                                        {category.title}
                                      </option>
                                    );
                                  })}
                              </Form.Select>
                              <Form.Text className="text-danger">
                                {errors.category_id}
                              </Form.Text>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Language of Instruction</Form.Label>
                              <Form.Select
                                name="language_id"
                                onChange={handleChange}
                                value={values.language_id}
                                isInvalid={!!errors.language_id}
                              >
                                <option>Select Language</option>
                                {isSuccessLanguages &&
                                  languages.map((language) => {
                                    return (
                                      <option
                                        value={language.id}
                                        key={language.id}
                                      >
                                        {language.title}
                                      </option>
                                    );
                                  })}
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Label>Course Level</Form.Label>
                              <Form.Select
                                name="level_id"
                                onChange={handleChange}
                                value={values.level_id}
                                isInvalid={!!errors.level_id}
                              >
                                <option>Select Level</option>
                                {isSuccessLevels &&
                                  levels.map((level) => {
                                    return (
                                      <option value={level.id} key={level.id}>
                                        {level.title}
                                      </option>
                                    );
                                  })}
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-3" controlId="courseTitle">
                          <Form.Label>Course Image</Form.Label>
                          <Form.Control
                            type="text"
                            name="image_url"
                            value={values.image_url}
                            onChange={handleChange}
                            isInvalid={!!errors.image_url}
                          />
                          <Form.Text className="text-danger">
                            {errors.image_url}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="summaryControl">
                          <Form.Label>Summary</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="summary"
                            value={values.summary}
                            onChange={handleChange}
                            isInvalid={!!errors.summary}
                          />
                          <Form.Text className="text-danger">
                            {errors.summary}
                          </Form.Text>
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Description</Form.Label>
                          <ReactQuill
                            theme="snow"
                            value={values.description}
                            onChange={(content) => {
                              setFieldValue("description", content);
                            }}
                            isInvalid={!!errors.description}
                          />
                          <Form.Text className="text-danger">
                            {errors.description}
                          </Form.Text>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>Requirements</Form.Label>
                          <ReactQuill
                            theme="snow"
                            value={values.requirements}
                            onChange={(content) => {
                              setFieldValue("requirements", content);
                            }}
                            isInvalid={!!errors.requirements}
                          />
                          <Form.Text className="text-danger">
                            {errors.requirements}
                          </Form.Text>
                        </Form.Group>

                        <Link to="/instructor">
                          <Button variant="outline-danger" className="mx-2">
                            Cancel
                          </Button>
                        </Link>
                        <Button variant="warning" type="submit">
                          Save and Proceed
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Card.Body>
              </Card>
            </Col>
            <Col md="2">
              <p>Help information goes here</p>
            </Col>
          </Row>
        </Container>
      );
  };
  return <Content />;
};
export default CreateCourse;

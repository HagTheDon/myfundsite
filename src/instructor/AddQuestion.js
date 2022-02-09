import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  addQuestion,
  removeQuestion,
  reArrangeQuestion,
} from "../store/slices/instructorSlice";
import { useSelector, useDispatch } from "react-redux";

const slideSchema = Yup.object().shape({
  question: Yup.string()
    .required("Required")
    .max(400, "Must be 400 characters or less"),
  answer: Yup.string().required("Required"),
  duration: Yup.string(),
});

const AddQuestion = ({ materialIndex }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <>
      <Button variant="outline-warning" className="mx-2" onClick={handleShow}>
        Add Question
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              question: "",
              answer: "",
              duration: "",
            }}
            validationSchema={slideSchema}
            onSubmit={(values, { resetForm }) => {
              dispatch(addQuestion(values));
              resetForm();
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
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Question</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={values.question}
                    onChange={(item) => {
                      setFieldValue("question", item);
                    }}
                    isInvalid={!!errors.question}
                  />
                  <Form.Text className="text-danger">
                    {errors.question}
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Answer</Form.Label>
                  <ReactQuill
                    theme="snow"
                    value={values.answer}
                    onChange={(item) => {
                      setFieldValue("answer", item);
                    }}
                    isInvalid={!!errors.answer}
                  />
                  <Form.Text className="text-danger">{errors.answer}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="courseTitle">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="text"
                    name="duration"
                    value={values.duration}
                    onChange={handleChange}
                    isInvalid={!!errors.duration}
                  />
                  <Form.Text className="text-danger">
                    {errors.duration}
                  </Form.Text>
                </Form.Group>
                <Button variant="warning" type="submit">
                  Add Question
                </Button>
              </Form>
            )}
          </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddQuestion;

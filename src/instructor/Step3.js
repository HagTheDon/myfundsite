import React, { useState } from "react";
import { Card, Accordion, Form, Row, Col, Button } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import {
  ChevronDown,
  XLg,
  ArrowsMove,
  Pencil,
  CardText,
  QuestionSquare,
} from "react-bootstrap-icons";

import AddQuestion from "./AddQuestion";
import AddSlide from "./AddSlide";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  addMaterial,
  removeMaterial,
  reArrangeMaterial,
  setMaterialIndex,
  removeSlide,
  reArrangeSlides,
  removeQuestion,
  reArrangeQuestions,
} from "../store/slices/instructorSlice";
import { useSelector, useDispatch } from "react-redux";

//Form validation rules
const materialSchema = Yup.object().shape({
  title: Yup.string()
    .required("Required")
    .max(400, "Must be 400 characters or less"),
});

const LessonControls = () => {
  return (
    <div>
      <Button variant="light">
        <Pencil size={15} />
      </Button>
      <Button variant="light" className="mx-2">
        <XLg size={15} />
      </Button>
    </div>
  );
};

const TestControls = () => {
  return (
    <div>
      <Button variant="light">
        <Pencil size={15} />
      </Button>
      <Button variant="light" className="mx-2">
        <XLg size={15} />
      </Button>
    </div>
  );
};

const Step3 = () => {
  const [addLessonVisible, setAddLessonVisible] = useState(false);
  const [addTestVisible, setAddTestVisible] = useState(false);
  const material = useSelector((state) => state.instructor.material);
  const dispatch = useDispatch();

  const TopicControls = ({ eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      dispatch(setMaterialIndex(eventKey));
    });

    return (
      <div>
        <Button variant="light" onClick={decoratedOnClick}>
          <ChevronDown size={15} />
        </Button>
        <Button
          variant="light"
          className="mx-2"
          onClick={() => {
            dispatch(removeMaterial(eventKey));
          }}
        >
          <XLg size={15} />
        </Button>
      </div>
    );
  };

  return (
    <>
      <Card>
        <Card.Header as="h5">Course Material</Card.Header>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">
            Add the Topics, Lessons and Tests.
          </Card.Subtitle>
          <Button
            variant={addLessonVisible ? "warning" : "outline-warning"}
            className="mx-2"
            onClick={() => {
              setAddLessonVisible(true);
              setAddTestVisible(false);
            }}
          >
            Add Lesson
          </Button>
          <Button
            variant={addTestVisible ? "warning" : "outline-warning"}
            className="mx-2"
            onClick={() => {
              setAddLessonVisible(false);
              setAddTestVisible(true);
            }}
          >
            Add Test
          </Button>
          <p className="my-4">
            {addLessonVisible && "Add Lesson"}
            {addTestVisible && "Add Test"}
          </p>
          {(addLessonVisible || addTestVisible) && (
            <Formik
              initialValues={{
                title: "",
              }}
              validationSchema={materialSchema}
              onSubmit={(values, { resetForm }) => {
                let contentType = "";
                if (addLessonVisible) {
                  contentType = "lesson";
                  values.slides = [];
                } else {
                  contentType = "test";
                  values.questions = [];
                }
                values.content_type = contentType;

                console.log("form values", values);
                dispatch(addMaterial(values));
                resetForm();
              }}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="topicTitle">
                        <Form.Control
                          type="text"
                          name="title"
                          placeholder={
                            addLessonVisible ? "Add Lesson" : "Add Test"
                          }
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
                      <Button variant="warning" type="submit">
                        {addLessonVisible && "Add Lesson"}
                        {addTestVisible && "Add Test"}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          )}

          <p className="my-4">Course Materials</p>
          <DragDropContext
            onDragEnd={(result) => {
              !result.destination
                ? console.log("dragged item out of view area")
                : dispatch(reArrangeMaterial(result));
            }}
          >
            <Droppable droppableId="topics">
              {(provided) => (
                <Accordion
                  className="topics"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {material.length > 0
                    ? material.map(
                        ({ content_id, title, content_type }, index) => {
                          return (
                            <Draggable
                              key={content_id}
                              draggableId={content_id}
                              index={index}
                            >
                              {(provided) => (
                                <Card
                                  className="my-2"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <Card.Header className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-between align-items-center">
                                      <Button variant="light" className="mx-2">
                                        <ArrowsMove size={15} />
                                      </Button>
                                      {index + 1}
                                      <Button variant="light" className="mx-1">
                                        {content_type === "lesson" && (
                                          <CardText color="#ffaa46" size={18} />
                                        )}
                                        {content_type === "test" && (
                                          <QuestionSquare
                                            color="#ffaa46"
                                            size={18}
                                          />
                                        )}
                                      </Button>
                                      <span>{title}</span>
                                    </div>
                                    <TopicControls eventKey={index} />
                                  </Card.Header>
                                  {content_type === "test" && (
                                    <Accordion.Collapse eventKey={index}>
                                      <Card.Body className="mx-5">
                                        <p className="my-4">Questions</p>
                                        <AddQuestion materialIndex={index} />
                                        <hr className="my-3" />
                                        <DragDropContext
                                          onDragEnd={(result) => {
                                            !result.destination
                                              ? console.log(
                                                  "dragged slide out of view area"
                                                )
                                              : dispatch(
                                                  reArrangeQuestions(result)
                                                );
                                          }}
                                        >
                                          <Droppable droppableId="questions">
                                            {(provided) => (
                                              <div
                                                className="questions"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                              >
                                                {material[index].questions
                                                  .length > 0
                                                  ? material[
                                                      index
                                                    ].questions.map(
                                                      (
                                                        {
                                                          id,
                                                          question,
                                                          answer,
                                                          duration,
                                                        },
                                                        index
                                                      ) => {
                                                        return (
                                                          <Draggable
                                                            key={id}
                                                            draggableId={id}
                                                            index={index}
                                                          >
                                                            {(provided) => (
                                                              <Card
                                                                className="my-2"
                                                                ref={
                                                                  provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                              >
                                                                <Card.Header className="d-flex justify-content-between align-items-center">
                                                                  <div className="d-flex justify-content-between align-items-center">
                                                                    <Button
                                                                      variant="light"
                                                                      className="mx-2"
                                                                    >
                                                                      <ArrowsMove
                                                                        size={
                                                                          15
                                                                        }
                                                                      />
                                                                    </Button>
                                                                    <span>
                                                                      {index +
                                                                        1}
                                                                      .{" "}
                                                                      {question}{" "}
                                                                      -{" "}
                                                                      {duration}
                                                                    </span>
                                                                  </div>
                                                                  <div>
                                                                    <Button variant="light">
                                                                      <Pencil
                                                                        size={
                                                                          15
                                                                        }
                                                                      />
                                                                    </Button>
                                                                    <Button
                                                                      variant="light"
                                                                      className="mx-2"
                                                                      onClick={() =>
                                                                        dispatch(
                                                                          removeQuestion(
                                                                            index
                                                                          )
                                                                        )
                                                                      }
                                                                    >
                                                                      <XLg
                                                                        size={
                                                                          15
                                                                        }
                                                                      />
                                                                    </Button>
                                                                  </div>
                                                                </Card.Header>
                                                              </Card>
                                                            )}
                                                          </Draggable>
                                                        );
                                                      }
                                                    )
                                                  : null}
                                                {provided.placeholder}
                                              </div>
                                            )}
                                          </Droppable>
                                        </DragDropContext>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  )}
                                  {content_type === "lesson" && (
                                    <Accordion.Collapse eventKey={index}>
                                      <Card.Body className="mx-5">
                                        <p className="my-4">Lesson Slides</p>
                                        <AddSlide materialIndex={index} />
                                        <hr className="my-3" />
                                        <DragDropContext
                                          onDragEnd={(result) => {
                                            !result.destination
                                              ? console.log(
                                                  "dragged slide out of view area"
                                                )
                                              : dispatch(
                                                  reArrangeSlides(result)
                                                );
                                          }}
                                        >
                                          <Droppable droppableId="slides">
                                            {(provided) => (
                                              <div
                                                className="slides"
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                              >
                                                {material[index].slides.length >
                                                0
                                                  ? material[index].slides.map(
                                                      (
                                                        {
                                                          id,
                                                          title,
                                                          content,
                                                          duration,
                                                        },
                                                        index
                                                      ) => {
                                                        return (
                                                          <Draggable
                                                            key={id}
                                                            draggableId={id}
                                                            index={index}
                                                          >
                                                            {(provided) => (
                                                              <Card
                                                                className="my-2"
                                                                ref={
                                                                  provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                              >
                                                                <Card.Header className="d-flex justify-content-between align-items-center">
                                                                  <div className="d-flex justify-content-between align-items-center">
                                                                    <Button
                                                                      variant="light"
                                                                      className="mx-2"
                                                                    >
                                                                      <ArrowsMove
                                                                        size={
                                                                          15
                                                                        }
                                                                      />
                                                                    </Button>
                                                                    <span>
                                                                      {index +
                                                                        1}
                                                                      . {title}{" "}
                                                                      -{" "}
                                                                      {duration}
                                                                    </span>
                                                                  </div>
                                                                  <div>
                                                                    <Button variant="light">
                                                                      <Pencil
                                                                        size={
                                                                          15
                                                                        }
                                                                      />
                                                                    </Button>
                                                                    <Button
                                                                      variant="light"
                                                                      className="mx-2"
                                                                      onClick={() =>
                                                                        dispatch(
                                                                          removeSlide(
                                                                            index
                                                                          )
                                                                        )
                                                                      }
                                                                    >
                                                                      <XLg
                                                                        size={
                                                                          15
                                                                        }
                                                                      />
                                                                    </Button>
                                                                  </div>
                                                                </Card.Header>
                                                              </Card>
                                                            )}
                                                          </Draggable>
                                                        );
                                                      }
                                                    )
                                                  : null}
                                                {provided.placeholder}
                                              </div>
                                            )}
                                          </Droppable>
                                        </DragDropContext>
                                        <p className="my-4">Lesson Audio</p>
                                        <hr className="my-3" />
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  )}
                                </Card>
                              )}
                            </Draggable>
                          );
                        }
                      )
                    : null}
                  {provided.placeholder}
                </Accordion>
              )}
            </Droppable>
          </DragDropContext>
        </Card.Body>
      </Card>
    </>
  );
};
export default Step3;

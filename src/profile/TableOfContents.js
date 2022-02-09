import { Col, ListGroup } from "react-bootstrap";
import { CardText, QuestionSquare } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setSlides, setQuestions } from "../store/slices/courseSlice";

const TableOfContents = ({ material }) => {
  const dispatch = useDispatch();
  return (
    <Col md={3}>
      <h3>Table of Contents</h3>
      <ListGroup>
        {material.map((item) => {
          return (
            <>
              {item.content_type === "lesson" && (
                <ListGroup.Item
                  key={item.content_id}
                  action
                  onClick={() => dispatch(setSlides(item.slides))}
                >
                  <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
                    <CardText color="#ffaa46" size={18} />
                  </span>
                  <span>{item.title}</span>
                </ListGroup.Item>
              )}
              {item.content_type === "test" && (
                <ListGroup.Item
                  key={item.content_id}
                  action
                  onClick={() => dispatch(setQuestions(item.questions))}
                >
                  <span className="icon-shape bg-light text-primary icon-sm rounded-circle me-2">
                    <QuestionSquare color="#ffaa46" size={18} />
                  </span>
                  <span>{item.title}</span>
                </ListGroup.Item>
              )}
            </>
          );
        })}
      </ListGroup>
    </Col>
  );
};

export default TableOfContents;

import {
  Card,
  ListGroup,
  ListGroupItem,
  Image,
  Row,
  Col,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import LinesEllipsis from "react-lines-ellipsis";

const FundraiserItem = ({ item }) => {
  const link_url = `/f/${item.id}`;
  const percentageRaised = (parseInt(item.raised) / parseInt(item.goal)) * 100;
  return (
    <Col>
      <Link to={link_url} className="link-unstyled">
        <Card className="shadow">
          <Card.Img variant="top" src="./assets/fundraiser.jpeg" />
          <Card.Body>
            <h4>
              {item.city.name}, {item.city.state.code},{" "}
              {item.city.state.country.code}
            </h4>
            <h5>{item.title}</h5>
            <Card.Text>
              <LinesEllipsis
                text={item.details}
                maxLine="3"
                ellipsis="..."
                trimRight
                basedOn="letters"
              />
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              <ProgressBar striped variant="primary" now={percentageRaised} />
            </ListGroupItem>
            <ListGroupItem>
              <NumberFormat
                value={item.raised}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <span> raised of </span>
              <NumberFormat
                value={item.goal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Link>
    </Col>
  );
};

export default FundraiserItem;

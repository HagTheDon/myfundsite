import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Col,
  NavDropdown,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../store/services/birdflapApi";
import { useSelector, useDispatch } from "react-redux";
import {
  PersonCircle,
  BoxArrowInRight,
  PersonLinesFill,
} from "react-bootstrap-icons";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetCategoriesQuery();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="light"
      className="navbar-menu"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            BirdFlap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="container-fluid">
            <InputGroup>
              <Col md={2}>
                <Form.Select aria-label="Categories">
                  <option value="all">All Categories</option>
                  {isSuccess &&
                    data.map((categories) => (
                      <option key={categories.id} value={categories.id}>
                        {categories.title}
                      </option>
                    ))}
                </Form.Select>
              </Col>
              <FormControl aria-label="Text input with 2 dropdown buttons" />
              <Button variant="warning" id="button-addon2">
                <Search />
              </Button>
            </InputGroup>
          </Nav>
          {user ? (
            <Nav>
              <NavDropdown
                eventKey={3}
                title={
                  <div style={{ display: "inline-block" }}>
                    <PersonCircle color="#754ffe" size={20} /> {user.fullname}
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/studies">Studies</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/instructor">Instructor</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/logout">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <Link to="login">Login</Link>
              </Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                <Link to="register">Register</Link>
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

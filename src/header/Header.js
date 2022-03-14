import {
  Navbar,
  Container,
  Nav,
  Form,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/services/myfundsiteAPI';
import { useSelector } from 'react-redux';
import { PersonCircle } from 'react-bootstrap-icons';

const Header = () => {
  const navigate = useNavigate();
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
            <img
              src="/logo.svg"
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/discover">Discover</Link>
            </Nav.Link>
            <NavDropdown title="Fundraise for" id="navbarScrollingDropdown">
              {isSuccess &&
                data.map((categories) => (
                  <NavDropdown.Item key={categories.id}>
                    {' '}
                    {categories.title}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
          {user ? (
            <Nav>
              <NavDropdown
                eventKey={3}
                title={
                  <div style={{ display: 'inline-block' }}>
                    <PersonCircle color="#754ffe" size={20} />{' '}
                    {user.first_name + ' ' + user.last_name}
                  </div>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/donations">Your Donations</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/campaigns">Your Fundraisers</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/logout">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <>
              <Nav>
                <Nav.Link>
                  <Link to="/how-it-works">How it works</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="login">Sign in</Link>
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Button
                  variant="outline-primary"
                  size="sm"
                  type="button"
                  onClick={() => navigate('/campaigns/create')}
                >
                  Start a MyFundSite
                </Button>
              </Form>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

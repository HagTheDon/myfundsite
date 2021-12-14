import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Col,
} from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      variant='light'
      className='navbar-menu'
    >
      <Container>
        <Navbar.Brand>
          <Link to='/' className='nav-link'>
            BirdFlap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='container-fluid'>
            <InputGroup>
              <Col md={2}>
                <Form.Select aria-label='Categories'>
                  <option>All Categories</option>
                  <option value='1'>Business</option>
                  <option value='2'>Marketing</option>
                  <option value='3'>Photography</option>
                </Form.Select>
              </Col>
              <FormControl aria-label='Text input with 2 dropdown buttons' />
              <Button variant='warning' id='button-addon2'>
                <Search />
              </Button>
            </InputGroup>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to='login'>Login</Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href='#memes'>
              <Link to='register'>Register</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

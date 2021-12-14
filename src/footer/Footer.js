import { Container, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row className='align-items-center g-0 border-top py-2 mt-5'>
          <Col md={6} xs={12} className='text-center text-md-start'>
            <span>© 2021 Geeks. All Rights Reserved.</span>
          </Col>
          <Col md={6} xs={12}>
            <nav className='nav nav-footer justify-content-center justify-content-md-end'>
              <NavLink
                to='/privacy'
                className={({ isActive }) =>
                  isActive ? 'nav-link active-footer' : 'nav-link ps-0'
                }
              >
                Privacy
              </NavLink>
              <NavLink to='/terms' className='nav-link'>
                Terms
              </NavLink>
              <NavLink to='/feedback' className='nav-link'>
                Feedback
              </NavLink>
              <NavLink to='/support' className='nav-link'>
                Support
              </NavLink>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;

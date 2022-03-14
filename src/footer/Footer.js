import { Container, Col, Row, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useGetCategoriesQuery } from '../store/services/myfundsiteAPI';
import {
  Facebook,
  Youtube,
  Twitter,
  Medium,
  Instagram,
} from 'react-bootstrap-icons';

const Footer = () => {
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetCategoriesQuery();

  return (
    <div className="footer">
      <div className=" g-0 border-top py-5">
        <Row>
          <Col md={2} className="offset-2">
            <img
              src="/logo.svg"
              width="200"
              height="50"
              className="d-inline-block align-top"
              alt="MyFundSite logo"
            />
          </Col>
          <Col md={2}>
            <p>FUNDRAISE FOR</p>
            <Nav className="flex-column">
              {isSuccess &&
                data.map((categories) => (
                  <Nav.Link key={categories.id}>{categories.title}</Nav.Link>
                ))}
            </Nav>
          </Col>
          <Col md={2}>
            <p>LEARN MORE</p>
            <Nav className="flex-column">
              <Nav.Link to="/how-it-works">How MyFundSite Works</Nav.Link>
              <Nav.Link eventKey="link-1">Common Questions</Nav.Link>
              <Nav.Link eventKey="link-2">Pricing</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </div>
      <div className=" g-0 border-top py-5 mt-5">
        <Row className="align-items-center">
          <Col
            md={4}
            xs={12}
            className=" offset-md-2 text-center text-md-start"
          >
            <nav className="nav nav-footer">
              <NavLink to="/" className="nav-link">
                © 2022 FundMySite
              </NavLink>
              <NavLink
                to="/terms"
                className={({ isActive }) =>
                  isActive ? 'nav-link active-footer' : 'nav-link ps-0'
                }
              >
                Terms
              </NavLink>
              <NavLink to="/privacy" className="nav-link">
                Privacy
              </NavLink>
              <NavLink to="/legal" className="nav-link">
                Legal
              </NavLink>
            </nav>
          </Col>
          <Col md={4} xs={12}>
            <span className="float-md-right">
              <a href="/">
                <Facebook className="mx-2" size={18} />
              </a>
              <a href="/">
                <Youtube className="mx-2" size={18} />
              </a>
              <a href="/">
                <Twitter className="mx-2" size={18} />
              </a>
              <a href="/">
                <Instagram className="mx-2" size={18} />
              </a>
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Footer;

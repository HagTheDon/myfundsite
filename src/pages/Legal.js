import PagesHeader from '../components/PagesHeader';
import FeaturesBanner from '../components/FeaturesBanner';
import { Row, Col, Container } from 'react-bootstrap';
const Legal = () => {
  return (
    <>
      <PagesHeader
        title="Legal Contact Info"
        cta="Contact information for law enforcement, legal counsel, compliance and regulatory bodies."
      />
      <Container className="pt-5 colored-bg" fluid>
        <Row className="pt-5 pb-5">
          <Col md={8} className="offset-2">
            <p className="heading-4 mb2x">Legal Contact Directory</p>
            <p>
              We take your legal questions and concerns very seriously at
              fundmysite. For a directory of who to contact for your specific
              inquiry, please review the sections below.
            </p>

            <p className="heading-4 mt2x mb2x">Site Issues</p>
            <p>
              If you have a problem concerning an account, how fundmysite works
              or any other general issue, please visit our{' '}
              <a href="https://support.fundmysite.com/hc/en-us">Help Center</a>.
            </p>
            <p>
              If you are looking to get a campaign removed for fraudulent or
              untrustworthy behavior, report the campaign{' '}
              <a href="/contact?t=donation_page_report">here</a>.
            </p>

            <p className="heading-4 mt2x mb2x">Legal Issues</p>
            <p className="heading-5 mt2x mb2x">
              Request for Records - United States
            </p>
            <p>
              If you have a valid U.S. civil or criminal request for records
              (such as a subpoena or court order) for fundmysite to review,
              please submit it via:
            </p>
            <ul>
              <li>
                <a
                  href="https://support.fundmysite.com/hc/requests/new?ticket_form_id=360001306451"
                  target="_blank"
                >
                  Civil - Request for Records Form
                </a>
              </li>
              <li>
                <a
                  href="https://support.fundmysite.com/hc/requests/new?ticket_form_id=360001294492"
                  target="_blank"
                >
                  Criminal - Request for Records Form
                </a>
              </li>
            </ul>
            <p>
              Alternatively, records requests may be served on fundmysite's
              registered agent:
            </p>
            <p>
              Cogency Global Inc.
              <br />
              1325 J Street, Suite 1550
              <br />
              Sacramento, CA 95814{' '}
            </p>

            <p className="heading-5 mt2x mb2x">
              Request for Records - International
            </p>
            <p>
              All international requests must be properly served on the correct
              fundmysite entity.
            </p>

            <p className="heading-5 mt2x mb2x">Other Law-Related Questions</p>
            <p>
              If you have other law-related questions, please send an email to{' '}
              <a href="mailto:Legal@fundmysite.com">legal@fundmysite.com</a>.
            </p>
          </Col>
        </Row>
      </Container>
      <FeaturesBanner />
    </>
  );
};
export default Legal;

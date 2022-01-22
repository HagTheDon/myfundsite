import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
const CreateCourse = () => {
  return (
    <Container>
      <Row className='mt-3'>
        <Tab.Container
          id='left-tabs-example'
          defaultActiveKey='step1-create-course'
        >
          <Row>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='step1-create-course'>
                  <Step1 />
                </Tab.Pane>
                <Tab.Pane eventKey='step2-create-course'>
                  <Step2 />
                </Tab.Pane>
                <Tab.Pane eventKey='step3-create-course'>
                  <Step3 />
                </Tab.Pane>
                <Tab.Pane eventKey='step4-create-course'>
                  <Step4 />
                </Tab.Pane>
                <Tab.Pane eventKey='step5-create-course'>
                  <Step5 />
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='step1-create-course'>
                    Get Started
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='step2-create-course'>
                    Introduction
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='step3-create-course'>
                    Course Material
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='step4-create-course'>Preview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='step5-create-course'>
                    Submit Course
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      </Row>
    </Container>
  );
};
export default CreateCourse;

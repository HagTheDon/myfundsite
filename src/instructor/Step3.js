import { Card, Accordion, Form, Row, Col, Button } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { ChevronDown, XLg, ArrowsMove, Pencil } from 'react-bootstrap-icons';
import AddTest from './AddTest';
import AddLesson from './AddLesson';

const TopicControls = ({ eventKey }) => {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  );

  return (
    <div>
      <Button variant='light' onClick={decoratedOnClick}>
        <ChevronDown size={15} />
      </Button>
      <Button variant='light' className='mx-2'>
        <XLg size={15} />
      </Button>
    </div>
  );
};

const LessonControls = () => {
  return (
    <div>
      <Button variant='light'>
        <Pencil size={15} />
      </Button>
      <Button variant='light' className='mx-2'>
        <XLg size={15} />
      </Button>
    </div>
  );
};

const TestControls = () => {
  return (
    <div>
      <Button variant='light'>
        <Pencil size={15} />
      </Button>
      <Button variant='light' className='mx-2'>
        <XLg size={15} />
      </Button>
    </div>
  );
};
const Step3 = () => {
  return (
    <Card>
      <Card.Header as='h5'>Course Material</Card.Header>
      <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>
          Add the Topics, Lessons and Tests.
        </Card.Subtitle>
        <p className='my-4'>Add Topic</p>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder='Topic Title' />
            </Col>
            <Col>
              <Button variant='warning' type='submit'>
                Add Topic
              </Button>
            </Col>
          </Row>
        </Form>
        <p className='my-4'>Topics</p>
        <Accordion defaultActiveKey='0'>
          <Card className='my-2'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant='light' className='mx-2'>
                  <ArrowsMove size={15} />
                </Button>
                <h6>Topic 1: Introduction to Javascript Programming</h6>
              </div>
              <TopicControls eventKey='0'/>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body className='mx-5'>
                <p className='my-4'>Add a Lesson or Test</p>
                <AddLesson />
                <AddTest />
                <hr className='my-3' />
                <p className='my-4'>Lessons & Tests</p>
                <Card className='my-2'>
                  <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant='light' className='mx-2'>
                        <ArrowsMove size={15} />
                      </Button>
                      <h6>01. History of Javascript</h6>
                    </div>
                    <LessonControls eventKey='0' />
                  </Card.Header>
                </Card>
                <Card className='my-2'>
                  <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant='light' className='mx-2'>
                        <ArrowsMove size={15} />
                      </Button>
                      <h6>02. Javascript History Test</h6>
                    </div>
                    <TestControls eventKey='0' />
                  </Card.Header>
                </Card>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className='my-2'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
              <div className='d-flex justify-content-between align-items-center'>
                <Button variant='light' className='mx-2'>
                  <ArrowsMove size={15} />
                </Button>
                <h6>Topic 2: Learning Javascript Syntax</h6>
              </div>
              <TopicControls eventKey='1'>Click me!</TopicControls>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body className='mx-5'>
                <p className='my-4'>Add a Lesson or Test</p>
                <AddLesson />
                <AddTest />
                <hr className='my-3' />
                <p className='my-4'>Lessons & Tests</p>
                <Card className='my-2'>
                  <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant='light' className='mx-2'>
                        <ArrowsMove size={15} />
                      </Button>
                      <h6>01. History of Javascript</h6>
                    </div>
                    <LessonControls eventKey='1' />
                  </Card.Header>
                </Card>
                <Card className='my-2'>
                  <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Button variant='light' className='mx-2'>
                        <ArrowsMove size={15} />
                      </Button>
                      <h6>02. Javascript History Test</h6>
                    </div>
                    <TestControls eventKey='1' />
                  </Card.Header>
                </Card>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Card.Body>
    </Card>
  );
};
export default Step3;

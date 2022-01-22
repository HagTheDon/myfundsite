import { Card, Accordion, Button } from 'react-bootstrap';

const Step1 = () => {
  return (
    <Card>
      <Card.Header as='h5'>Get Started</Card.Header>
      <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>
          Welcome Instructor
        </Card.Subtitle>
        <Card.Text>
          We have a variety of resources to help you get started as a course
          creator. We are with you every step of the way.
        </Card.Text>
        <Accordion defaultActiveKey='0' flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              Course creation recommendations.
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              How to breakdown your course into topics and lessons.
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <hr className='my-4' />
        <Button variant='warning'>Proceed to Introduction</Button>
      </Card.Body>
    </Card>
  );
};
export default Step1;

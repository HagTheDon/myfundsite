import {
  Row,
  Col,
  Container,
  Accordion,
  Card,
  Tabs,
  Tab,
} from 'react-bootstrap';

import { StarFill, StarHalf } from 'react-bootstrap-icons';
import AccordionTopic from './AccordionTopic';
import ReactPlayer from 'react-player';

const SingleCourseActive = () => {
  return (
    <Container>
      <Row className='justify-content-md-center pb-8 mt-3'>
        <Col md={3}>
          <h3>Table of Contents</h3>
          <Accordion defaultActiveKey='0' flush>
            <AccordionTopic
              id='1'
              title='Introduction to Javascript'
              lessons={[
                {
                  id: '1',
                  title: 'Javascript arrays',
                  duration: '1m 7s',
                },
                {
                  id: '2',
                  title: 'Data structures and algos',
                  duration: '5m 6s',
                },
                { id: '3', title: 'Good theory', duration: '10m 7s' },
              ]}
            />
            <AccordionTopic
              id='2'
              title='Javascript Syntax'
              lessons={[
                {
                  id: '1',
                  title: 'Javascript arrays',
                  duration: '1m 7s',
                },
                {
                  id: '2',
                  title: 'Data structures and algos',
                  duration: '5m 6s',
                },
                { id: '3', title: 'Good theory', duration: '10m 7s' },
              ]}
            />
            <AccordionTopic
              id='3'
              title='Algorithms in Javascript'
              lessons={[
                {
                  id: '1',
                  title: 'Javascript arrays',
                  duration: '1m 7s',
                },
                {
                  id: '2',
                  title: 'Data structures and algos',
                  duration: '5m 6s',
                },
                { id: '3', title: 'Good theory', duration: '10m 7s' },
              ]}
            />
          </Accordion>
        </Col>
        <Col className='py-5'>
            <Row>
                <Col md={6}>
          <p>Javascript Arrays</p>
          </Col>
            <Col md={6}>
                Share this course | Help
            </Col>
            </Row>
          <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
              width='100%'
              height='100%'
            />
          </div>
          <Card>
            <Card.Body>
              <Tabs
                defaultActiveKey='profile'
                id='uncontrolled-tab-example'
                className='mb-3'
              >
                <Tab eventKey='requirements' title='Requirements'></Tab>
                <Tab eventKey='transcript' title='Transcript'>
                  <div>
                    <div className='mb-4'>
                      <h3 className='mb-2'>Transcript</h3>
                      <p>
                        If you’re learning to program for the first time, or if
                        you’re coming from a different language, this course,
                        JavaScript: Getting Started, will give you the basics
                        for coding in JavaScript. First, you'll discover the
                        types of applications that can be built with JavaScript,
                        and the platforms they’ll run on.
                      </p>
                      <p>
                        Next, you’ll explore the basics of the language, giving
                        plenty of examples. Lastly, you’ll put your JavaScript
                        knowledge to work and modify a modern, responsive web
                        page. When you’re finished with this course, you’ll have
                        the skills and knowledge in JavaScript to create simple
                        programs, create simple web applications, and modify web
                        pages.
                      </p>
                    </div>
                    <h4 className='mb-3'>What you’ll learn</h4>
                    <div className='row mb-3'>
                      <div className='col-12 col-md-6'>
                        <ul className='list-unstyled'>
                          <li className='d-flex mb-2'>
                            <i className='far fa-check-circle text-success me-2 mt-2'></i>
                            <span>
                              Recognize the importance of understanding your
                              objectives when addressing an audience.
                            </span>
                          </li>
                          <li className='d-flex mb-2'>
                            <i className='far fa-check-circle text-success me-2 mt-2'></i>
                            <span>
                              Identify the fundaments of composing a successful
                              close.
                            </span>
                          </li>
                          <li className='d-flex mb-2'>
                            <i className='far fa-check-circle text-success me-2 mt-2'></i>
                            <span>
                              Explore how to connect with your audience through
                              crafting compelling stories.
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className='col-12 col-md-6'>
                        <ul className='list-unstyled'>
                          <li className='d-flex mb-2'>
                            <i className='far fa-check-circle text-success me-2 mt-2'></i>
                            <span>
                              Examine ways to connect with your audience by
                              personalizing your content.
                            </span>
                          </li>
                          <li className='d-flex mb-2'>
                            <i className='far fa-check-circle text-success me-2 mt-2'></i>
                            <span>
                              Break down the best ways to exude executive
                              presence.
                            </span>
                          </li>
                          <li className='d-flex mb-2'>
                            <i className='far fa-check-circle text-success me-2 mt-2'></i>
                            <span>
                              Explore how to communicate the unknown in an
                              impromptu communication.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Maecenas viverra condimentum nulla molestie condimentum.
                      Nunc ex libero, feugiat quis lectus vel, ornare euismod
                      ligula. Aenean sit amet arcu nulla.
                    </p>
                    <p>
                      Duis facilisis ex a urna blandit ultricies. Nullam
                      sagittis ligula non eros semper, nec mattis odio
                      ullamcorper. Phasellus feugiat sit amet leo eget
                      consectetur.
                    </p>
                  </div>
                </Tab>
                <Tab eventKey='discussion' title='Discussion'>
                  <div
                    className='tab-pane fade active show'
                    id='review'
                    role='tabpanel'
                    aria-labelledby='review-tab'
                  >
                    <div className='mb-3'>
                      <h3 className='mb-4'>Discussion Forum</h3>
                    </div>

                    <hr className='my-4' />
                    <div className='mb-3'>
                      <div className='d-flex border-bottom pb-4 mb-4'>
                        <img
                          src='../assets/images/avatar/avatar-2.jpg'
                          alt=''
                          className='rounded-circle avatar-lg'
                        />
                        <div className=' ms-3'>
                          <h4 className='mb-1'>
                            Max Hawkins
                            <span className='ms-1 fs-6 text-muted'>
                              2 Days ago
                            </span>
                          </h4>

                          <p>
                            Lectures were at a really good pace and I never felt
                            lost. The instructor was well informed and allowed
                            me to learn and navigate Figma easily.
                          </p>
                        </div>
                      </div>

                      <div className='d-flex border-bottom pb-4 mb-4'>
                        <img
                          src='../assets/images/avatar/avatar-3.jpg'
                          alt=''
                          className='rounded-circle avatar-lg'
                        />
                        <div className=' ms-3'>
                          <h4 className='mb-1'>
                            Arthur Williamson{' '}
                            <span className='ms-1 fs-6 text-muted'>
                              3 Days ago
                            </span>
                          </h4>

                          <p>
                            Its pretty good.Just a reminder that there are also
                            students with Windows, meaning Figma its a bit
                            different of yours. Thank you!
                          </p>
                        </div>
                      </div>
                      <div className='d-flex border-bottom pb-4 mb-4'>
                        <img
                          src='../assets/images/avatar/avatar-4.jpg'
                          alt=''
                          className='rounded-circle avatar-lg'
                        />
                        <div className=' ms-3'>
                          <h4 className='mb-1'>
                            Claire Jones{' '}
                            <span className='ms-1 fs-6 text-muted'>
                              4 Days ago
                            </span>
                          </h4>

                          <p>
                            Great course for learning Figma, the only bad detail
                            would be that some icons are not included in the
                            assets. But 90% of the icons needed are included,
                            and the voice of the instructor was very clear and
                            easy to understood.
                          </p>
                        </div>
                      </div>
                      <div className='d-flex'>
                        <img
                          src='../assets/images/avatar/avatar-5.jpg'
                          alt=''
                          className='rounded-circle avatar-lg'
                        />
                        <div className=' ms-3'>
                          <h4 className='mb-1'>
                            Bessie Pena
                            <span className='ms-1 fs-6 text-muted'>
                              5 Days ago
                            </span>
                          </h4>

                          <p>
                            I have really enjoyed this className and learned a
                            lot, found it very inspiring and helpful, thank you!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCourseActive;

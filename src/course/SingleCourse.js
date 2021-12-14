import {
  Row,
  Col,
  Container,
  Card,
  Tabs,
  Tab,
  Accordion,
} from 'react-bootstrap';
import { StarFill, StarHalf } from 'react-bootstrap-icons';
import AccordionTopic from './AccordionTopic';
import CourseSidebar from './CourseSidebar';

const SingleCourse = () => {
  return (
    <>
      <div className='header-bg text-secondary px-4 py-5'>
        <Container>
          <Row className='py-2'>
            <Col md={10} className='offset-1'>
              <h1 className='display-5 fw-bold text-white'>
                Getting Started with JavaScript
              </h1>
              <div className='col-md-8'>
                <p className='text-white-50 mb-4 lead'>
                  JavaScript is the popular programming language which powers
                  web pages and web applications. This course will get you
                  started coding in JavaScript.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className='justify-content-md-center pb-8'>
          <Col md={7} className='mt-3 course-content'>
            <Card>
              <Card.Body>
                <Tabs
                  defaultActiveKey='profile'
                  id='uncontrolled-tab-example'
                  className='mb-3'
                >
                  <Tab eventKey='content' title='Content'>
                    <Accordion defaultActiveKey='0'>
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
                  </Tab>
                  <Tab eventKey='description' title='Description'>
                    <div>
                      <div className='mb-4'>
                        <h3 className='mb-2'>Course Descriptions</h3>
                        <p>
                          If you’re learning to program for the first time, or
                          if you’re coming from a different language, this
                          course, JavaScript: Getting Started, will give you the
                          basics for coding in JavaScript. First, you'll
                          discover the types of applications that can be built
                          with JavaScript, and the platforms they’ll run on.
                        </p>
                        <p>
                          Next, you’ll explore the basics of the language,
                          giving plenty of examples. Lastly, you’ll put your
                          JavaScript knowledge to work and modify a modern,
                          responsive web page. When you’re finished with this
                          course, you’ll have the skills and knowledge in
                          JavaScript to create simple programs, create simple
                          web applications, and modify web pages.
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
                                Identify the fundaments of composing a
                                successful close.
                              </span>
                            </li>
                            <li className='d-flex mb-2'>
                              <i className='far fa-check-circle text-success me-2 mt-2'></i>
                              <span>
                                Explore how to connect with your audience
                                through crafting compelling stories.
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
                  <Tab eventKey='reviews' title='Reviews'>
                    <div
                      className='tab-pane fade active show'
                      id='review'
                      role='tabpanel'
                      aria-labelledby='review-tab'
                    >
                      <div className='mb-3'>
                        <h3 className='mb-4'>
                          How students rated this courses
                        </h3>
                        <div className='row align-items-center'>
                          <div className='col-auto text-center'>
                            <h3 className='display-2 fw-bold'>4.5</h3>
                            <i className='mdi mdi-star me-n1 text-warning'></i>
                            <i className='mdi mdi-star me-n1 text-warning'></i>
                            <i className='mdi mdi-star me-n1 text-warning'></i>
                            <i className='mdi mdi-star me-n1 text-warning'></i>
                            <i className='mdi mdi-star me-n1-half text-warning'></i>
                            <p className='mb-0 fs-6'>(Based on 27 reviews)</p>
                          </div>

                          <div className='col pt-3 order-3 order-md-2'>
                            <div
                              className='progress mb-3'
                              style={{ height: '6px' }}
                            >
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '90%' }}
                                aria-valuenow='90'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                            <div
                              className='progress mb-3'
                              style={{ height: '6px' }}
                            >
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '80%' }}
                                aria-valuenow='80'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                            <div
                              className='progress mb-3'
                              style={{ height: '6px' }}
                            >
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '70%' }}
                                aria-valuenow='70'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                            <div
                              className='progress mb-3'
                              style={{ height: '6px' }}
                            >
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '60%' }}
                                aria-valuenow='60'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                            <div
                              className='progress mb-0'
                              style={{ height: '6px' }}
                            >
                              <div
                                className='progress-bar bg-warning'
                                role='progressbar'
                                style={{ width: '50%' }}
                                aria-valuenow='50'
                                aria-valuemin='0'
                                aria-valuemax='100'
                              ></div>
                            </div>
                          </div>
                          <div className='col-md-auto col-6 order-2 order-md-3'>
                            <div>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                              <span className='ms-1'>53%</span>
                            </div>
                            <div>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                              <span className='ms-1'>36%</span>
                            </div>
                            <div>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                              <span className='ms-1'>9%</span>
                            </div>
                            <div>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                              <span className='ms-1'>3%</span>
                            </div>
                            <div>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                              <span className='ms-1'>2%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr className='my-5' />
                      <div className='mb-3'>
                        <div className='d-lg-flex align-items-center justify-content-between mb-5'>
                          <div className='mb-3 mb-lg-0'>
                            <h3 className='mb-0'>Reviews</h3>
                          </div>
                          <div>
                            <form className='form-inline'>
                              <div className='d-flex align-items-center me-2'>
                                <span className='position-absolute ps-3'>
                                  <i className='fe fe-search'></i>
                                </span>
                                <input
                                  type='search'
                                  className='form-control ps-6'
                                  placeholder='Search Review'
                                />
                              </div>
                            </form>
                          </div>
                        </div>

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
                            <div className='fs-6 mb-2'>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                            </div>
                            <p>
                              Lectures were at a really good pace and I never
                              felt lost. The instructor was well informed and
                              allowed me to learn and navigate Figma easily.
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
                            <div className='fs-6 mb-2'>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                            </div>
                            <p>
                              Its pretty good.Just a reminder that there are
                              also students with Windows, meaning Figma its a
                              bit different of yours. Thank you!
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
                            <div className='fs-6 mb-2'>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                            </div>
                            <p>
                              Great course for learning Figma, the only bad
                              detail would be that some icons are not included
                              in the assets. But 90% of the icons needed are
                              included, and the voice of the instructor was very
                              clear and easy to understood.
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
                            <div className='fs-6 mb-2'>
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarFill color='#ffaa46' size={14} />
                              <StarHalf color='#ffaa46' size={14} />
                            </div>
                            <p>
                              I have really enjoyed this className and learned a
                              lot, found it very inspiring and helpful, thank
                              you!
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
          <CourseSidebar />
        </Row>
      </Container>
    </>
  );
};
export default SingleCourse;

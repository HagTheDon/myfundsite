import {
  Row,
  Col,
  Container,
  Card,
} from 'react-bootstrap';
import Presentation from './Presentation';

import TableOfContents from './TableOfContents';

const SingleCourseActive = () => {
  return (
    <Container>
      <Row className='justify-content-md-center pb-8 mt-3'>
        <TableOfContents />
        <Col>
            <Row>
                <Col md={6}>
          <p>Javascript Arrays</p>
          </Col>
            <Col md={6}>
                Share this course | Help
            </Col>
            </Row>
            <Presentation />
          <Card>
            <Card.Body>
             
                    <div className='mb-3'>
                      <h3 className='mb-4'>Questions</h3>
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
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleCourseActive;

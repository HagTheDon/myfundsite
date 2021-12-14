import { Card, Form } from 'react-bootstrap';

const Step2 = () => {
  return (
    <Card>
      <Card.Header as='h5'>Introduction</Card.Header>
      <Card.Body>
        <Card.Subtitle className='mb-2 text-muted'>
          Add the initial information a user sees before subscribing to a
          course.
        </Card.Subtitle>
        <Form>
          <h5>Instructor Details</h5>
          <Form.Group className='mb-3' controlId='fullName'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control type='text' placeholder='John Doe' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Biography</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <h5>Course Details</h5>
          <Form.Group className='mb-3' controlId='courseTitle'>
            <Form.Label>Course Title</Form.Label>
            <Form.Control type='text' placeholder='Course Title' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Course Category</Form.Label>
            <Form.Select aria-label='Default select example'>
              <option>Select Category</option>
              <option value='1'>Farming</option>
              <option value='2'>Medical</option>
              <option value='3'>Entrepreneurship</option>
              <option value='3'>Information Technology</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='courseTitle'>
            <Form.Label>Course Price (UGX)</Form.Label>
            <Form.Control type='text' placeholder='Course Price' />
          </Form.Group>
          <Form.Group controlId='formFile' className='mb-3'>
            <Form.Label>Introduction Video</Form.Label>
            <Form.Control type='file' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Language of Instruction</Form.Label>
            <Form.Select aria-label='Default select example'>
              <option>Select Language</option>
              <option value='1'>English</option>
              <option value='2'>French</option>
              <option value='3'>Swahili</option>
              <option value='3'>Luganda</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Course Level</Form.Label>
            <Form.Select aria-label='Default select example'>
              <option>Select Level</option>
              <option value='1'>Beginner</option>
              <option value='2'>Intermediate</option>
              <option value='3'>Expert</option>
              <option value='3'>Master</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Course Introduction</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Course Requirements</Form.Label>
            <Form.Control as='textarea' rows={3} />
          </Form.Group>
       
        </Form>
      </Card.Body>
    </Card>
  );
};
export default Step2;

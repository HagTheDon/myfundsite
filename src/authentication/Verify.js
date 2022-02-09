import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useVerifyUserMutation } from '../store/services/birdflapApi';

//Form validation rules
const schema = Yup.object().shape({
    email: Yup.string().required().email('Invalid email address'),
    token: Yup.string().required(),
  });
const Verify = () => {
    //verify user call
    const [verifyUser, {data, error, isLoading, isSuccess, isError},] = useVerifyUserMutation();
    if (isSuccess) console.log(data);
    if (isError) console.log(error);

    return (

        <Container>
        <Row className='mt-3'>
            <Col md={6} className='offset-md-3'>
                <h3>Verification</h3>
                {isError && <Alert variant='danger'>{error.status === 400? error.data.message : 'Unable to verify account at this moment. Please check your internet connection and try again.'}</Alert>}
                {isLoading && <Alert variant='info'>Form submitted, verifying your account.</Alert>}
                {isSuccess && <Alert variant={data.status==='success'? 'success':'info'}>{data.message}</Alert>}
          <Formik
          initialValues = {{
            email: '',
            token: '',
          }}
          validationSchema = {schema}
          /*
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          */
          onSubmit={(values, { resetForm }) => {
              verifyUser(values);
              resetForm();
          }}
          
          >
             {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='emailAddress'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control 
              type='email' 
              name='email' 
              value={values.email} 
              onChange={handleChange} 
              isInvalid={!!errors.email} 
            />
            <Form.Text className="text-danger">
            {errors.email}
        </Form.Text>
          </Form.Group>
          
          <Form.Group className='mb-3' controlId='token'>
            <Form.Label>Token</Form.Label>
            <Form.Control 
              type='text'
              name='token'
              value={values.token}
              onChange={handleChange}
              isInvalid={!!errors.token}  
            />
            <Form.Text className="text-danger">
            {errors.token}
        </Form.Text>
          </Form.Group>
        
          <Button variant='warning' type='submit'>
            Verify Account
          </Button>
        </Form>
        )}
        </Formik>
        </Col>
        </Row>
        </Container>
      );
    };
export default Verify;

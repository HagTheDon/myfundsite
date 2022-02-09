import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useLoginUserMutation } from '../store/services/birdflapApi';
import {Link} from 'react-router-dom';
import { setCredentials, setToken} from '../store/slices/authSlice';
import { useNavigate, useLocation } from 'react-router-dom';


//Form validation rules
const schema = Yup.object().shape({
  email: Yup.string().required().email('Invalid email address'),
  password: Yup.string().required(),
});

const Login = () => {
  //used to return to restricted page before login or home
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //redux dispatch actions
  const user =  useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
   //login user call
   const [loginUser, {data, error, isLoading, isSuccess, isError},] = useLoginUserMutation();
   if (isSuccess) {
     dispatch(setCredentials(data));
     dispatch(setToken(data.token));
     navigate(from, { replace: true });
   };
   if (isError) console.log(error);

  return (
    <Container>
      <Row className='mt-3'>
        <Col md={6} className='offset-md-3'>
          <h3>Login</h3>
          {from!=='/'&& <Alert variant='info'>You must log in to view the page at {from}</Alert>}
          {isError && <Alert variant='danger'>{error.status === 400? error.data.message : 'Unable to login to account at this moment. Please check your internet connection and try again.'}</Alert>}
                {isLoading && <Alert variant='info'>Form submitted, login into your account.</Alert>}
                {isSuccess && <Alert variant='success'>Successfully logged in.</Alert>}
          <Formik
          initialValues = {{
            email: '',
            password: '',
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
              loginUser(values);
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
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type='password'
              name='password'
              value={values.password}
              onChange={handleChange}
              isInvalid={!!errors.password}  
            />
            <Form.Text className="text-danger">
            {errors.password}
        </Form.Text>
          </Form.Group>
        
          <Button variant='warning' type='submit'>
            Login
          </Button>
        </Form>
        )}
        </Formik>
          <p>
            Forgot your login credentials?{' '}
            <Link to='/recover-account'>
              <Button variant='outline-primary'>Recover your Account</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;

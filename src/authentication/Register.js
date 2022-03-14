import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRegisterUserMutation } from '../store/services/myfundsiteAPI';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Form validation rules
const schema = Yup.object().shape({
  email: Yup.string().required().email('Invalid email address'),
  first_name: Yup.string()
    .required('Required')
    .max(20, 'Must be 20 characters or less'),
  last_name: Yup.string()
    .required('Required')
    .max(20, 'Must be 20 characters or less'),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Password must be more than 8 characters and a combination of lowercase, uppercase, numeric and a special character.'
    ),
  repeatPassword: Yup.string()
    .required()
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  terms: Yup.bool()
    .required()
    .oneOf([true], 'Terms must be accepted to proceed.'),
});

const Register = () => {
  //Initialize registerUser trigger for Redux Toolkit
  const [
    registerUser,
    { data, error, isLoading, isSuccess, isError },
  ] = useRegisterUserMutation();

  const navigate = useNavigate();
  if (isSuccess) {
    navigate('/verify');
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col md={6} className="offset-md-3">
          <h3>Register</h3>
          {isError && (
            <Alert variant="danger">
              {error.status === 400
                ? error.data.message
                : 'Unable to register users at this moment. Please check your internet connection and try again.'}
            </Alert>
          )}
          {isLoading && (
            <Alert variant="info">
              Form submitted, preparing your account.
            </Alert>
          )}
          {isSuccess && (
            <Alert variant={data.status === 'success' ? 'success' : 'info'}>
              {data.message}
            </Alert>
          )}
          <Formik
            initialValues={{
              email: '',
              first_name: '',
              last_name: '',
              password: '',
              repeatPassword: '',
              terms: false,
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
              registerUser(values);
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
                <Form.Group className="mb-3" controlId="emailAddress">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Text className="text-danger">{errors.email}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    isInvalid={!!errors.first_name}
                  />
                  <Form.Text className="text-danger">
                    {errors.first_name}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="fullName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    isInvalid={!!errors.last_name}
                  />
                  <Form.Text className="text-danger">
                    {errors.last_name}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                  />
                  <Form.Text className="text-danger">
                    {errors.password}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordRepeat">
                  <Form.Label>Repeat Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="repeatPassword"
                    value={values.repeatPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.repeatPassword}
                  />
                  <Form.Text className="text-danger">
                    {errors.repeatPassword}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="termsAndConditions">
                  <Form.Check
                    type="checkbox"
                    label="By checking this box, I agree to BirdFlap terms and conditions."
                    required
                    name="terms"
                    onChange={handleChange}
                    isInvalid={!!errors.terms}
                    id="validationFormik106"
                  />
                  <Form.Text className="text-danger">{errors.terms}</Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <p>
            Already have an account?{' '}
            <Link to="/login">
              <Button variant="link">Sign In</Button>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Register;

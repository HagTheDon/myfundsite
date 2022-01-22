import TrendingCourses from './TrendingCourses';
import { Button } from 'react-bootstrap';
import { Row, Container } from 'react-bootstrap';
import { useGetCategoriesQuery } from '../store/services/staticDataApi';
import { Link } from 'react-router-dom';
const Home = () => {
  const { data, error, isLoading, isError } = useGetCategoriesQuery();

  if (isError) return <div>An error has occurred!</div>

  if (isLoading) return <div>Loading</div>

  return (
    <>
    {data.map((categories) => (
        <div
          key={categories.id}
          id={categories.id}
        >
          <p>Title: {categories.title}</p>
          <p>Description: {categories.description}</p>
       </div>
      ))}
      <div className='header-bg text-secondary px-4 py-5 text-center'>
        <div className='py-5'>
          <h1 className='display-5 fw-bold text-white'>
            Where learning happens
          </h1>
          <div className='col-lg-8 mx-auto'>
            <p className='text-white-50 mb-4 lead'>
              We provide highly informative and practical courses that can get
              you started in a new career or advance your knowledge in your
              field of choice. Level up with us.
            </p>

            <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
              <Button
                variant='outline-warning'
                size='lg'
                className='px-4 me-sm-3 fw-bold'
              >
                Learn More
              </Button>
              <Link to='/create-course'>
                <Button
                  variant='light'
                  size='lg'
                  className='px-4 me-sm-3 fw-bold'
                >
                  Create a Course
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <Row className='justify-content-md-center pb-8'>
          <TrendingCourses />
        </Row>
      </Container>
    </>
  );
};

export default Home;

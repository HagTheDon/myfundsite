import Fundraisers from './Fundraisers';
import { Button } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { useGetFundraisersQuery } from '../store/services/myfundsiteAPI';
import { Link } from 'react-router-dom';
import DiscoverHeader from '../components/DiscoverHeader';
const Home = () => {
  const params = { category: '', city: '', search: '', top: '' };
  const { data, error, isLoading, isError, isSuccess } = useGetFundraisersQuery(
    params
  );

  return (
    <>
      <DiscoverHeader />
      <div>
        {isLoading && <p>Loading..</p>}
        {isError && <p>An error occured..</p>}
      </div>
      <div>
        <Container className="justify-content-md-center pb-8 discover" fluid>
          <Row className="top-fundraisers">
            <Col md={8} className="offset-2 mt-5">
              {isSuccess && <Fundraisers data={data} />}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;

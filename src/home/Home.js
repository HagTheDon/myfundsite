import Fundraisers from './Fundraisers';
import { Button } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import { useGetFundraisersQuery } from '../store/services/myfundsiteAPI';
import { Link } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import FundraiserBanner from '../components/FundraiserBanner';
import FeaturesBanner from '../components/FeaturesBanner';
const Home = () => {
  const params = { category: '', city: '', search: '', top: 'true' };
  const { data, error, isLoading, isError, isSuccess } = useGetFundraisersQuery(
    params
  );

  return (
    <>
      <HomeHeader />
      <div>
        {isLoading && <p>Loading..</p>}
        {isError && <p>An error occured..</p>}
      </div>
      <div>
        <Container className="justify-content-md-center pb-8">
          <Row className="top-fundraisers">
            <Col md={10} className="offset-1">
              <h3 className="mt-5">Top fundraisers</h3>
              {isSuccess && <Fundraisers data={data} />}
            </Col>
          </Row>
        </Container>
      </div>
      <FeaturesBanner />
      <FundraiserBanner />
    </>
  );
};

export default Home;

import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FundraiserBanner = () => {
  return (
    <div className="fundraiser d-flex flex-column justify-content-center align-items-center py-5">
      <h3 className="my-4">Ready to start fundraising?</h3>
      <Link to="/campaigns/create">
        <Button variant="primary" size="lg" className="my-4">
          Start a MyFundSite
        </Button>
      </Link>
    </div>
  );
};
export default FundraiserBanner;

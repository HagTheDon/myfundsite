import FundraiserItem from "./FundraiserItem";
import { Row } from "react-bootstrap";
const Fundraisers = ({ data }) => {
  return (
    <Row xs={1} md={3} className="g-4">
      {data.map((fundraiser) => (
        <FundraiserItem item={fundraiser} key={fundraiser.id} />
      ))}
    </Row>
  );
};

export default Fundraisers;

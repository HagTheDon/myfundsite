import CourseUnderReview from "./CourseUnderReview";
import EditCourse from "./EditCourse";
import ManageCourse from "./ManageCourse";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetInstructorCourseSingleQuery } from "../store/services/birdflapApi";

const InstructorSingle = () => {
  const token = useSelector((state) => state.auth.token);
  let { id } = useParams();
  const {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
  } = useGetInstructorCourseSingleQuery({ id: id, token: token });
  const Content = () => {
    if (data.submitted === true)
      if (data.approved) return <ManageCourse course={data} />;
      else return <CourseUnderReview course={data} />;
    else return <EditCourse course={data} />;
  };

  return (
    <Container>
      {isLoading && <p>Loading ...</p>}
      {isError && <p>Ooops!! Page load error.</p>}
      {isSuccess && <Content />}
    </Container>
  );
};

export default InstructorSingle;

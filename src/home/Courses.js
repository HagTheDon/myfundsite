import CourseItem from './CourseItem';
const Courses = ({data}) => {
  return (
    <>
    {data.map((course) => (
      <CourseItem item={course} key={course.id}/>      
      ))}
    </>
  );
};

export default Courses;

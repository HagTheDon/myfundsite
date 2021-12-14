import { PlayCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
const AccordionLesson = ({ id, title, duration }) => {
  return (
    <Link
      to='/single-course-active'
      className='mb-2 d-flex justify-content-between align-items-center text-inherit text-decoration-none'
      key={id}
    >
      <div className='text-truncate'>
        <span className='icon-shape bg-light text-primary icon-sm rounded-circle me-2'>
          <PlayCircle color='#ffaa46' size={18} />
        </span>
        <span>{title}</span>
      </div>
      <div className='text-truncate'>
        <span>{duration}</span>
      </div>
    </Link>
  );
};

export default AccordionLesson;

import { Accordion } from 'react-bootstrap';
import AccordionLesson from './AccordionLesson';
const AccordionTopic = ({ id, title, lessons }) => {
  // eslint-disable-next-line array-callback-return
  const lessonShow = lessons.map((item) => {
    return (
      <AccordionLesson
        id={item.id}
        duration={item.duration}
        title={item.title}
      />
    );
  });
  return (
    <Accordion.Item eventKey={id} key={id}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>{lessonShow}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionTopic;

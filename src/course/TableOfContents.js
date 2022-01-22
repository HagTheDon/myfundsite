import AccordionTopic from './AccordionTopic';
import {Col, Accordion} from 'react-bootstrap';
const TableOfContents = () => {
    return (
<Col md={3}>
          <h3>Table of Contents</h3>
          <Accordion defaultActiveKey='0' flush>
            <AccordionTopic
              id='1'
              title='Introduction to Javascript'
              lessons={[
                {
                  id: '1',
                  title: 'Javascript arrays',
                  duration: '1m 7s',
                },
                {
                  id: '2',
                  title: 'Data structures and algos',
                  duration: '5m 6s',
                },
                { id: '3', title: 'Good theory', duration: '10m 7s' },
              ]}
            />
            <AccordionTopic
              id='2'
              title='Javascript Syntax'
              lessons={[
                {
                  id: '1',
                  title: 'Javascript arrays',
                  duration: '1m 7s',
                },
                {
                  id: '2',
                  title: 'Data structures and algos',
                  duration: '5m 6s',
                },
                { id: '3', title: 'Good theory', duration: '10m 7s' },
              ]}
            />
            <AccordionTopic
              id='3'
              title='Algorithms in Javascript'
              lessons={[
                {
                  id: '1',
                  title: 'Javascript arrays',
                  duration: '1m 7s',
                },
                {
                  id: '2',
                  title: 'Data structures and algos',
                  duration: '5m 6s',
                },
                { id: '3', title: 'Good theory', duration: '10m 7s' },
              ]}
            />
          </Accordion>
        </Col>)}

        export default TableOfContents;
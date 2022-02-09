import React, {useState, useEffect} from 'react';
import {
    Row,
    Col,
    Container,
    Card,
    Form
  } from 'react-bootstrap';
import { useSelector} from 'react-redux';

const QuestionBoard = ({questions}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [currentOptions, setCurrentOptions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(0);
  const [pauseQuestion, setPauseQuestion] = useState(true);
  const [autoQuestion, setAutoQuestion] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  
  //Count number of slides
  useEffect(() => {
    setNumberOfQuestions(questions.length);
    setQuestionIndex(0);   
  },[questions]);

  //Move to next or previous slide item
  useEffect(() => {
    var question = questions[questionIndex];
         //Set the current sound to play
    setCurrentQuestion(question);
    setCurrentOptions(questions[questionIndex].options);
    //play sound on change slide.
  },[questionIndex, questions]);

  
  //Set the time left everytime slide changes
  useEffect(() => {
    setTimeLeft(currentQuestion.duration);
  },[currentQuestion]);

  //Run a countdown timer to reduce time left by 1 second till zero.
  //Move to next slide if slides still exist.
  useEffect(()=> {
   const countDownTimer = setTimeout(() => {
     if (!pauseQuestion) {
     if (timeLeft > 0) {
     setTimeLeft(timeLeft - 1);
     }
     else {
       setTimeLeft(0);
       if ((questionIndex < (numberOfQuestions -1)) && autoQuestion) {
        setQuestionIndex(questionIndex+1);
       }
     }
    }
   }, 1000);
   console.log('time left: ', timeLeft, ' pause slide: ', pauseQuestion);
   return () => clearTimeout(countDownTimer)
  },[timeLeft, pauseQuestion]);

  //Show Next or Complete
  const Next = () => {
    if (questionIndex === (numberOfQuestions-1))
      return <button onClick={()=> setQuestionIndex(questionIndex+1)}>Complete Lesson</button>;
    else return <button onClick={()=> setQuestionIndex(questionIndex+1)}>Next</button>;
  }

  //Show or hide previous button
  const Previous = () => {
    if (questionIndex === 0) {
      return null;
    }
    else return <button onClick={()=> setQuestionIndex(questionIndex-1)}>Previous</button>
  }

  //Pause or play slide
  const PauseSlideButton = () => {
    if (pauseQuestion)
      return <button onClick={()=> {setPauseQuestion(false);}}>Play</button>;
    else return <button onClick={()=> {setPauseQuestion(true);}}>Pause</button>
  }

  const EnableAutoSlide = () => {
    if (autoQuestion)
      return <button onClick={()=> setAutoQuestion(false)}>Disable AutoSlide</button>;
    else return <button onClick={()=> setAutoQuestion(true)}>Enable AutoSlide</button>
  }

  const EnableFullscreen = () => {
    if (fullscreen)
      return <button onClick={()=> setFullscreen(false)}>Disable Fullscreen</button>;
    else return <button onClick={()=> setFullscreen(true)}>Enable Fullscreen</button>
  }

    return (
      <>
        <div className="shade">
            <div className="blackboard">
              <p>{currentQuestion.question}</p>
              <p>{timeLeft}</p>
              <Form>
              <p key='radios' className="mb-3">
                {currentOptions.map((item) => {
                  return (
                    <Form.Check
                        label={item.content}
                        name="answer"
                        type='radio'
                        id={`${item.pos}`}
                    />
                    )})}
                </p>
                </Form>
        </div>
        </div>
        <div className='mt-1 p-1'>
          <Previous />
          <Next />
          <PauseSlideButton />
          <EnableAutoSlide />
          <EnableFullscreen />
        </div>
        <div>
          <p>{questionIndex + 1}/{numberOfQuestions}</p>
        </div>
      </>       
    );
      }

  export default QuestionBoard;
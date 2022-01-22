import React, {useState, useEffect} from 'react';
import useSound from 'use-sound';

const sliders = [
  {
    'title': 'How it got started',
    'id': '1',
    'content':'<h1>How it got started</h1><p>Now we see</p>',
    'slide_audio':'creativeminds.mp3',
    'duration': '10'
  },
  {
    'title': 'Part 2',
    'id': '2',
    'content':'<h1>Part 2</h1><p>Now we see</p>',
    'slide_audio':'LessonTest.m4a',
    'duration': '15'
  },
  {
    'title': 'Part 3',
    'id': '3',
    'content':'<h1>Part 3</h1><p>Now we see</p>',
    'slide_audio':'creativeminds.mp3',
    'duration': '5'
  }
];

const Presentation = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [numberOfSlides, setNumberOfSlides] = useState(0);
  const [currentSlide, setCurrentSlide] = useState({});
  const [timeLeft, setTimeLeft] = useState(0);
  const [pauseSlide, setPauseSlide] = useState(true);
  const [autoSlide, setAutoSlide] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  
  const [play, { stop, pause }] = useSound("./assets/courses/"+ currentSlide.slide_audio + '"');
  //Count number of slides
  useEffect(() => {
    setNumberOfSlides(sliders.length);   
  },[]);

  //Move to next or previous slide item
  useEffect(() => {
    var slide = sliders[slideIndex];
         //Set the current sound to play
    stop();
    setCurrentSlide(slide);
    //play sound on change slide.
  },[slideIndex]);

  
  //Set the time left everytime slide changes
  useEffect(() => {
    play();
    setTimeLeft(currentSlide.duration);
  },[currentSlide]);

  //Run a countdown timer to reduce time left by 1 second till zero.
  //Move to next slide if slides still exist.
  useEffect(()=> {
   const countDownTimer = setTimeout(() => {
     if (!pauseSlide) {
     if (timeLeft > 0) {
     setTimeLeft(timeLeft - 1);
     }
     else {
       setTimeLeft(0);
       if ((slideIndex < (numberOfSlides -1)) && autoSlide) {
        setSlideIndex(slideIndex+1);
       }
     }
    }
   }, 1000);
   console.log('time left: ', timeLeft, ' pause slide: ', pauseSlide);
   return () => clearTimeout(countDownTimer)
  },[timeLeft, pauseSlide]);

  //Show Next or Complete
  const Next = () => {
    if (slideIndex === (numberOfSlides-1))
      return <button onClick={()=> setSlideIndex(slideIndex+1)}>Complete Lesson</button>;
    else return <button onClick={()=> setSlideIndex(slideIndex+1)}>Next</button>;
  }

  //Show or hide previous button
  const Previous = () => {
    if (slideIndex === 0) {
      return null;
    }
    else return <button onClick={()=> setSlideIndex(slideIndex-1)}>Previous</button>
  }

  //Pause or play slide
  const PauseSlideButton = () => {
    if (pauseSlide)
      return <button onClick={()=> {setPauseSlide(false); play();}}>Play</button>;
    else return <button onClick={()=> {setPauseSlide(true); pause();}}>Pause</button>
  }

  const EnableAutoSlide = () => {
    if (autoSlide)
      return <button onClick={()=> setAutoSlide(false)}>Disable AutoSlide</button>;
    else return <button onClick={()=> setAutoSlide(true)}>Enable AutoSlide</button>
  }

  const EnableFullscreen = () => {
    if (fullscreen)
      return <button onClick={()=> setFullscreen(false)}>Disable Fullscreen</button>;
    else return <button onClick={()=> setFullscreen(true)}>Enable Fullscreen</button>
  }

    return (
      <>
        <div>
          <p>{currentSlide.title}</p>
          <p>{timeLeft}</p>
          <section
          dangerouslySetInnerHTML={{__html: currentSlide.content}}
          />
        </div>
        <div>
          <Previous />
          <Next />
          <PauseSlideButton />
          <EnableAutoSlide />
          <EnableFullscreen />
        </div>
        <div>
          <p>{slideIndex + 1}/{numberOfSlides}</p>
        </div>
        </>
    );
  }

  export default Presentation;
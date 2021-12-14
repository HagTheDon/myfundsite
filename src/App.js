import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header/Header';
import { Container } from 'react-bootstrap';
import Home from './home/Home';
import Login from './Login';
import Register from './Register';
import CreateCourse from './instructor/CreateCourse';
import RecoverAccount from './RecoverAccount';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';
import Feedback from './pages/Feedback';
import SingleCourse from './course/SingleCourse';
import SingleCourseActive from './course/SingleCourseActive';
import Footer from './footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='course' element={<SingleCourse />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='recover-account' element={<RecoverAccount />} />
        <Route path='create-course' element={<CreateCourse />} />
        <Route path='single-course-active' element={<SingleCourseActive />} />
        <Route path='privacy' element={<Privacy />} />
        <Route path='terms' element={<Terms />} />
        <Route path='support' element={<Support />} />
        <Route path='feedback' element={<Feedback />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

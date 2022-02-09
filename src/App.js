import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Verify from "./authentication/Verify";
import CreateCourse from "./instructor/CreateCourse";
import RecoverAccount from "./authentication/RecoverAccount";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";
import SingleCourse from "./course/SingleCourse";
import StudySingle from "./profile/StudySingle";
import Footer from "./footer/Footer";
import InstructorDashboard from "./instructor/InstructorDashboard";
import InstructorSingle from "./instructor/InstructorSingle";
import Profile from "./profile/Profile";
import Studies from "./profile/Studies";
import Logout from "./authentication/Logout";
import RequireAuth from "./authentication/RequireAuth";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="course/:id" element={<SingleCourse />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="verify" element={<Verify />} />
        <Route path="logout" element={<Logout />} />
        <Route path="recover-account" element={<RecoverAccount />} />
        <Route
          path="/instructor"
          element={
            <RequireAuth>
              <InstructorDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/instructor/:id"
          element={
            <RequireAuth>
              <InstructorSingle />
            </RequireAuth>
          }
        />
        <Route
          path="/instructor/create-course"
          element={
            <RequireAuth>
              <CreateCourse />
            </RequireAuth>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/studies"
          element={
            <RequireAuth>
              <Studies />
            </RequireAuth>
          }
        />
        <Route
          path="/studies/:id"
          element={
            <RequireAuth>
              <StudySingle />
            </RequireAuth>
          }
        />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="support" element={<Support />} />
        <Route path="feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

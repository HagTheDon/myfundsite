import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './header/Header';
import Home from './home/Home';
import Discover from './home/Discover';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Verify from './authentication/Verify';
import AddFundraiser from './fundraiser/AddFundraiser';
import HowItWorks from './pages/HowItWorks';
import EditFundraiser from './fundraiser/EditFundraiser';
import ManageFundraiser from './fundraiser/ManageFundraiser';
import RecoverAccount from './authentication/RecoverAccount';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Legal from './pages/Legal';
import Feedback from './pages/Feedback';
import SingleFundraiser from './fundraiser/SingleFundraiser';
import Footer from './footer/Footer';
import Profile from './profile/Profile';
import YourFundraisers from './profile/YourFundraisers';
import YourDonations from './profile/YourDonations';
import MakeDonation from './fundraiser/MakeDonation';
import Logout from './authentication/Logout';
import RequireAuth from './authentication/RequireAuth';
import { Row, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setCredentials, setToken } from './store/slices/authSlice';
import { getLocalToken, getLocalUser } from './utilities/helperFunctions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getLocalToken() || null;
    const user = getLocalUser() || null;
    dispatch(setCredentials(user));
    dispatch(setToken(token));
  }, []);

  return (
    <>
      <Header />
      <Container fluid>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="f/:id" element={<SingleFundraiser />} />
          <Route path="f/:id/donate" element={<MakeDonation />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="verify" element={<Verify />} />
          <Route path="logout" element={<Logout />} />
          <Route path="recover-account" element={<RecoverAccount />} />
          <Route
            path="/campaigns"
            element={
              <RequireAuth>
                <YourFundraisers />
              </RequireAuth>
            }
          />
          <Route
            path="/campaigns/create"
            element={
              <RequireAuth>
                <AddFundraiser />
              </RequireAuth>
            }
          />
          <Route
            path="/campaigns/edit/:id"
            element={
              <RequireAuth>
                <EditFundraiser />
              </RequireAuth>
            }
          />
          <Route
            path="/campaigns/manage/:id"
            element={
              <RequireAuth>
                <ManageFundraiser />
              </RequireAuth>
            }
          />
          <Route
            path="/donations"
            element={
              <RequireAuth>
                <YourDonations />
              </RequireAuth>
            }
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';
import CounselorPortal from './pages/CounselorPortal';
import PartnerDashboard from './pages/PartnerDashboard';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import CounselorLogin from './pages/auth/CounselorLogin';
import CounselorSignup from './pages/auth/CounselorSignup';
import CategorySelection from './pages/booking/CategorySelection';
import ConsultantList from './pages/booking/ConsultantList';
import BookingConfirmation from './pages/booking/BookingConfirmation';
import SessionRoom from './pages/session/SessionRoom';
import FeedbackForm from './pages/session/FeedbackForm';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Counselor Auth */}
        <Route path="/counselor/login" element={<CounselorLogin />} />
        <Route path="/counselor/signup" element={<CounselorSignup />} />

        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/counselor" element={<CounselorPortal />} />
        <Route path="/partner" element={<PartnerDashboard />} />

        {/* Booking Flow */}
        <Route path="/book/category" element={<CategorySelection />} />
        <Route path="/book/consultants" element={<ConsultantList />} />
        <Route path="/book/confirm" element={<BookingConfirmation />} />

        {/* Session & Feedback (No Layout for Session Room) */}
        <Route path="/session/:id" element={<SessionRoom />} />
        <Route path="/feedback/:id" element={<FeedbackForm />} />
      </Routes>
    </Layout>
  );
}

export default App;

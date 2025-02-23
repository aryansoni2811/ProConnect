import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import LoginClient from './pages/Login/Loginclient';
import LoginFreelancer from './pages/Login/Loginfreelancer';
import SignUp from './pages/SignUp/SignUpForm';
import JobPosting from './components/JobPosting/JobPosting';
import JobPostingForm from './components/JobPosting/JobPostingForm';
import JobListing from './components/JobListing/JobListing';
import RoleSelection from './components/RoleSelection/RoleSelection'
import FreelancerDashboard from './components/FreelancerDashboard/FreelancerDashboard';
import FreelancerOnboarding from './components/FreelancerOnboarding/FreelancerOnboarding';
import './App.css';
import ClientForm from "./components/JobPosting/ClientForm.jsx";
import ClientProfile from "./components/JobPosting/ClientProfile.jsx";
import UserDetailsForm from "./components/JobPosting/UserDetailsForm.jsx";

function App() {
  return (
    <Router>
      <div className="app">

        
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<LoginClient />} />
            <Route path="/loginfreelancer" element={<LoginFreelancer />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/post-job" element={<JobPosting />} />
            <Route path="/jobs" element={<JobListing />} />
            <Route path="/roleselection" element={<RoleSelection />} />
            <Route path="/JobPostingForm" element={<JobPostingForm />} />
            <Route path="/freelancerdashboard" element={<FreelancerDashboard />} />
            <Route path="/freelanceronboarding" element={<FreelancerOnboarding />} />
            <Route path="/ClientForm" element={<ClientForm />} />
            <Route path="/ClientProfile" element={<ClientProfile />} />
            <Route path="/UserDetailsForm" element={<UserDetailsForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

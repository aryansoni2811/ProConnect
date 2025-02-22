import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUpForm';
import JobPosting from './components/JobPosting/JobPosting';
import JobPostingForm from './components/JobPosting/JobPostingForm';
import JobListing from './components/JobListing/JobListing';
import RoleSelection from './components/RoleSelection/RoleSelection'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/post-job" element={<JobPosting />} />
            <Route path="/jobs" element={<JobListing />} />
            <Route path="/roleselection" element={<RoleSelection />} />
            <Route path="/JobPostingForm" element={<JobPostingForm />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
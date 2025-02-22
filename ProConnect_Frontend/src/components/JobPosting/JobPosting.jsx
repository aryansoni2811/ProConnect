import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./JobPosting.css";
import {Button} from "@mui/material";

const JobPosting = () => {
  const navigate = useNavigate();

  const handleUserSelection = () => {
    navigate('/JobPostingForm');
  };

  return (
      <div className="page-container">
        <div className="job-postingform" onClick={handleUserSelection}>
          <Button className="newReq" >New Request</Button>
        </div>
      </div>
  );
};

export default JobPosting;
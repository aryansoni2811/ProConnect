import React from "react";
import "./ClientProfile.css";
import { Button } from "@mui/material";
import { FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaGlobe } from "react-icons/fa";

const ClientProfile = () => {
    return (
        <div className="full-profile-container">
        <div className="profile-container">
            <h1 className="profile-name">Soni Aryan KinJalkumar</h1>

            <div className="profile-grid">
                {/* Professional Info */}
                <div className="profile-card-Professional">
                    <h2>Professional Info</h2>
                    <p><FaBriefcase /> Web Developer</p>
                    <p>$45/Hour</p>
                    <p>24 years of experience</p>
                </div>

                {/* Find Project */}
                <div className="project-card-Find">
                    <h2>Find Your Next Project</h2>
                    <p>Browse through hundreds of projects matching your skills.</p>
                    <Button variant="contained" color="success">Browse Projects</Button>
                </div>

                {/* Location */}
                <div className="profile-card-Location">
                    <h2>Location</h2>
                    <p><FaMapMarkerAlt /> Based in Vadodara, India</p>
                </div>

                {/* Education & Certifications */}
                <div className="profile-card-Education">
                    <h2>Education & Certifications</h2>
                    <p><FaGraduationCap /> B.Tech in Computer Science</p>
                    <p>Certified React Developer</p>
                </div>

                {/* About Me */}
                <div className="profile-card-About">
                    <h2>About Me</h2>
                    <p>Enthusiastic developer with a passion for coding.</p>
                </div>

                {/* Portfolio */}
                <div className="profile-card-Portfolio">
                    <h2>Portfolio</h2>
                    <p><FaGlobe /> <a href="#">View Projects</a></p>
                </div>

                {/* Skills */}
                <div className="profile-card-Skills">
                    <h2>Skills</h2>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">JavaScript</span>
                </div>

            </div>
        </div>
        </div>
    );
};

export default ClientProfile;

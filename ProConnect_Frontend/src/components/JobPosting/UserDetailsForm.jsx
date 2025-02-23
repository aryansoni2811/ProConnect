import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./UserDetailsForm.css";

const UserDetailsForm = () => {
    const navigate = useNavigate();

    // Hardcoded user details
    const hardcodedUser = {
        client_name: "Jane Doe",
        company: "Tech Solutions Inc.",
        address: "123 Main Street, New York, USA",
        phone: "2345678902",
    };

    const [formData, setFormData] = useState(hardcodedUser); // Use hardcoded data

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userDetails", JSON.stringify(formData));
        navigate('/post-job'); // Redirect to Job Posting page after submission
    };

    return (
        <div className="form-container-bord">
            <form className="client-form" onSubmit={handleSubmit}>
                <h2>Enter Your Details</h2>
                <input type="text" name="name" placeholder="Your Name" value={formData.client_name} onChange={handleChange} required />
                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserDetailsForm;

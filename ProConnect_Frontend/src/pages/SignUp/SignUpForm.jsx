import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        userType: 'freelancer',
        skills: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.fullName) tempErrors.fullName = 'Name is required';
        if (!formData.email) {
            tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            tempErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            tempErrors.password = 'Password must be at least 6 characters';
        }
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = 'Passwords do not match';
        }
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            console.log('Form submitted:', formData);
           
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div class="signup-container">
            <div class="form-card1">
                <form class="signup-form">
                    <h2 class="signup-heading">Create Account</h2>

                    <div class="form-field">
                        <input type="text" placeholder="Username" />
                    </div>

                    <div class="form-field">
                        <input type="email" placeholder="Email" />
                    </div>

                    <div class="form-field">
                        <input type="password" placeholder="Password" />
                    </div>

                    <div class="form-field">
                        <select>
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            
                            <option value="freelancer">Freelancer</option>
                        </select>
                    </div>

                    <button type="submit" class="submit-btn">Sign Up</button>

                    <div class="login-link">
                        Already have an account? <a href="/login">Login</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
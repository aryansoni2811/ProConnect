import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import Select from "react-select";
import "./JobPostingForm.css";

const JobPostingForm = ({ onSubmit }) => {
    const navigate = useNavigate(); // ✅ Initialize navigate

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        budgetMin: "",
        budgetMax: "",
        skills: [],
        deadline: "",
        postedDate: new Date().toISOString().split("T")[0],
        clientName: "",
        experience: "",
        location: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const createJobPosting = async (jobData) => {
        try {
            const response = await fetch("http://localhost:8080/api/jobs/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jobData),
            });

            if (!response.ok) {
                throw new Error("Failed to create job posting");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error creating job posting:", error);
            throw error;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "deadline") {
            const dateParts = value.split("-");

            // Check if the input is in "dd-mm-yyyy" format
            if (dateParts.length === 3 && dateParts[0].length === 2 && dateParts[1].length === 2 && dateParts[2].length === 4) {
                const [day, month, year] = dateParts;
                const formattedDate = `${year}-${month}-${day}`; // Convert to YYYY-MM-DD
                setFormData({ ...formData, [name]: formattedDate });
            } else {
                setFormData({ ...formData, [name]: value }); // Store as it is if not in expected format
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSkillsChange = (selectedOptions) => {
        setFormData({ ...formData, skills: selectedOptions.map((option) => option.value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const { budgetMin, budgetMax } = formData;
            if (budgetMin <= 0 || budgetMax <= 0) {
                alert("Budget values must be positive numbers.");
                return;
            }

            await createJobPosting(formData);
            setSuccess("Job posting created successfully!");

            // ✅ Navigate to success page after successful submission
            setTimeout(() => {
                navigate("/post-job");
            }, 2000); // Optional delay for user to see success message

            // Reset form
            setFormData({
                title: "",
                description: "",
                category: "",
                budgetMin: "",
                budgetMax: "",
                skills: [],
                deadline: "",
                postedDate: new Date().toISOString().split("T")[0],
                clientName: "",
                experience: "",
                location: "",
            });
        } catch (err) {
            setError("Failed to create job posting. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "#171717",
            color: "#ccd6f6",
            borderRadius: "10px",
            boxShadow: "inset 2px 5px 10px rgb(5, 5, 5)",
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#171717",
            color: "#ccd6f6",
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#64ffda",
            color: "#000",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#000",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#000",
            ':hover': {
                backgroundColor: "#64ffda",
                color: "#000",
            },
        }),
    };
    return (
        <div className="clientForm">
            <div className="form-container">
                <h2>Project Request Form</h2>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <form onSubmit={handleSubmit}>
                    <input type="text" name="title" placeholder="Project Title" value={formData.title} onChange={handleChange} required />
                    <textarea name="description" placeholder="Project Description" value={formData.description} onChange={handleChange} required />
                    <select name="category" value={formData.category} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        {["Web Development", "Mobile Development", "Data Science", "Machine Learning", "DevOps", "UI/UX Design"].map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <div className="budget-range">
                        <input type="number" name="budgetMin" placeholder="Minimum Budget" value={formData.budgetMin} onChange={handleChange} required />
                        <input type="number" name="budgetMax" placeholder="Maximum Budget" value={formData.budgetMax} onChange={handleChange} required />
                    </div>

                    <Select
                        isMulti
                        name="skills"
                        options={[
                            { value: "React", label: "React" },
                            { value: "Node.js", label: "Node.js" },
                            { value: "Python", label: "Python" },
                        ]}
                        className="basic-multi-select select-margin"
                        classNamePrefix="select"
                        styles={customStyles}
                        onChange={handleSkillsChange}
                    />

                    <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
                    <input type="text" name="clientName" placeholder="Client Name" value={formData.clientName} onChange={handleChange} required />
                    <input type="text" name="experience" placeholder="Experience (e.g., 2-5 years)" value={formData.experience} onChange={handleChange} required />
                    <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
                    <button type="submit" disabled={loading}>{loading ? "Submitting..." : "Submit"}</button>
                </form>
            </div>
        </div>
    );
};

export default JobPostingForm;

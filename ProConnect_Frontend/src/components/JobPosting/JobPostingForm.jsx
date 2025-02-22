import React, { useState } from "react";
import Select from "react-select";
import "./JobPostingForm.css";

const JobPostingForm = ({ onSubmit }) => {
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

    const categories = [
        "Web Development",
        "Mobile Development",
        "Data Science",
        "Machine Learning",
        "DevOps",
        "UI/UX Design",
        "Project Management",
        "Content Writing",
        "Digital Marketing",
        "SEO",
    ];

    const skillsOptions = [
        { value: "React", label: "React" },
        { value: "JavaScript", label: "JavaScript" },
        { value: "CSS", label: "CSS" },
        { value: "TypeScript", label: "TypeScript" },
        { value: "HTML", label: "HTML" },
        { value: "Node.js", label: "Node.js" },
        { value: "Express.js", label: "Express.js" },
        { value: "MongoDB", label: "MongoDB" },
        { value: "SQL", label: "SQL" },
        { value: "PostgreSQL", label: "PostgreSQL" },
        { value: "MySQL", label: "MySQL" },
        { value: "Python", label: "Python" },
        { value: "Django", label: "Django" },
        { value: "Flask", label: "Flask" },
        { value: "Java", label: "Java" },
        { value: "Spring Boot", label: "Spring Boot" },
        { value: "Kotlin", label: "Kotlin" },
        { value: "Swift", label: "Swift" },
        { value: "Android Development", label: "Android Development" },
        { value: "iOS Development", label: "iOS Development" },
        { value: "C++", label: "C++" },
        { value: "C#", label: "C#" },
        { value: "PHP", label: "PHP" },
        { value: "Laravel", label: "Laravel" },
        { value: "GraphQL", label: "GraphQL" },
        { value: "REST API", label: "REST API" },
        { value: "Redux", label: "Redux" },
        { value: "Next.js", label: "Next.js" },
        { value: "Vue.js", label: "Vue.js" },
        { value: "Angular", label: "Angular" },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSkillsChange = (selectedOptions) => {
        setFormData({ ...formData, skills: selectedOptions });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { budgetMin, budgetMax } = formData;
        if (budgetMin <= 0 || budgetMax <= 0) {
            alert("Budget values must be positive numbers.");
            return;
        }
        onSubmit(formData);
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
        <div className="form-container">
            <h2>Project Request Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Project Title" onChange={handleChange} required />
                <textarea name="description" placeholder="Project Description" onChange={handleChange} required />
                <select name="category" onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                <div className="budget-range">
                    <input type="number" name="budgetMin" placeholder="Minimum Budget" onChange={handleChange} required />
                    <input type="number" name="budgetMax" placeholder="Maximum Budget" onChange={handleChange} required />
                </div>

                <Select
                    isMulti
                    name="skills"
                    options={skillsOptions}
                    className="basic-multi-select select-margin"
                    classNamePrefix="select"
                    styles={customStyles}
                    onChange={handleSkillsChange}
                />

                <input type="date" name="deadline" placeholder="Deadline" onChange={handleChange} onFocus={(e) => e.target.showPicker()} required />
                <input type="text" name="clientName" placeholder="Client Name" onChange={handleChange} required />
                <input type="text" name="experience" placeholder="Experience (e.g., 2-5 years)" onChange={handleChange} required />
                <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default JobPostingForm;
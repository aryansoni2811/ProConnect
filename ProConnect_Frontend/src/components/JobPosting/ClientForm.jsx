import React, { useState } from 'react';

function ClientForm() {
    const [formData, setFormData] = useState({
        clientName: '',
        companyName: '',
        address: '',
        phoneNumber: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Process formData here, e.g., send it to an API or display it
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="clientName">Client Name:</label>
            <input
                type="text"
                id="clientName"
                name="clientName"
                value={formData.clientName}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="companyName">Company Name:</label>
            <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="address">Address:</label>
            <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
            />
            <br />

            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
            />
            <br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default ClientForm;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'rider' // Default role
    });

    const navigate = useNavigate();

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // Sending registration data to backend
            // await axios.post('http://localhost:5000/api/auth/register', formData);
            // alert("Registration Successful! Please Login.");
            navigate('/Booking'); // Redirect to login page after success
        } catch (err) {
            // console.error(err);
    // Error check karne ka safe tareeka
    // const errorMsg = err.response?.data?.msg || "Registration Failed. Please try again.";
    // alert(errorMsg);
    navigate('/booking');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5 card p-4 shadow">
                    <h3 className="text-center mb-4 text-primary">Create Account</h3>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Full Name</label>
                            <input type="text" name="name" value={formData.name} className="form-control" onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" onChange={onChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">I am a:</label>
                            <select name="role" value={formData.role} className="form-select" onChange={onChange}>
                                <option value="rider">Rider (Customer)</option>
                                <option value="driver">Driver</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
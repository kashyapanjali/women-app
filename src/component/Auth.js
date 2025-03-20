import React, { useState } from 'react';
import './Auth.css';

function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isSignUp && formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Here you would typically make an API call to your backend
        // For now, we'll just log the data
        console.log('Form submitted:', formData);
        
        // Reset form
        setFormData({
            email: '',
            password: '',
            confirmPassword: '',
            name: ''
        });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    {isSignUp && (
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {isSignUp && (
                        <div className="form-group">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="auth-button">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <div className="auth-switch">
                    <p>
                        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button
                            className="switch-button"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp ? 'Sign In' : 'Sign Up'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Auth;

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Inject custom CSS into the document head
        const style = document.createElement('style');
        style.innerHTML = `
            .register-bg {
                background: linear-gradient(to right, #6a11cb, #2575fc);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .register-container {
                max-width: 400px;
                width: 100%;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .register-container h2 {
                font-weight: bold;
                margin-bottom: 1.5rem;
            }
            .btn-primary {
                background-color: #6a11cb;
                border-color: #6a11cb;
            }
            .btn-secondary {
                background-color: #2575fc;
                border-color: #2575fc;
            }
            .btn-primary:hover, .btn-primary:focus {
                background-color: #5b0eb7;
                border-color: #5b0eb7;
            }
            .btn-secondary:hover, .btn-secondary:focus {
                background-color: #2064e2;
                border-color: #2064e2;
            }
        `;
        document.head.appendChild(style);
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:5555/register', { name, email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="register-bg">
            <div className="bg-white register-container">
                <h2 className="text-center text-primary">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputName" className="form-label">
                            <strong>Name</strong>
                        </label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control" 
                            id="exampleInputName" 
                            onChange={(event) => setName(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            <strong>Email Id</strong>
                        </label>
                        <input 
                            type="email" 
                            placeholder="Enter Email"
                            className="form-control" 
                            id="exampleInputEmail1" 
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        /> 
                    </div>
                    <div className="mb-3 text-start">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            <strong>Password</strong>
                        </label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="form-control" 
                            id="exampleInputPassword1" 
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="text-center mt-3">Already have an account?</p>
                <Link to='/login' className="btn btn-secondary w-100">Login</Link>
            </div>
        </div>
    );
}

export default Register;

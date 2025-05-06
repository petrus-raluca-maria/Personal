import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Inject custom CSS into the document head
        const style = document.createElement('style');
        style.innerHTML = `
            .login-bg {
                background: linear-gradient(to right, #6a11cb, #2575fc);
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .login-container {
                max-width: 400px;
                width: 100%;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .login-container h2 {
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
        
        axios.post('http://localhost:5555/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    console.log("Login Success");
                    alert('Login successful!')
                    navigate('/home');
                } else {
                    alert('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="login-bg">
            <div className="bg-white login-container">
                <h2 className="text-center text-primary">Login</h2>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <p className="text-center mt-3">Don't have an account?</p>
                <Link to='/register' className="btn btn-secondary w-100">Register</Link>
            </div>
        </div>
    );
}

export default Login;

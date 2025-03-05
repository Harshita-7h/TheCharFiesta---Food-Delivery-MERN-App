import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'


const Login = () => {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({ email: "", password: "" })

    const handleSubmit = async (e) => {
        e.preventDefault()   //Synthetic event
        const response = fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            })
        })
            .then((res) => res.json())  // parse response as JSON
            .then((data) => {
                console.log('Response from backend:', data);  // console the data
                // set the data into state
                if (data.success) {
                    localStorage.setItem("authToken", data.authToken)
                    console.log(localStorage.getItem("authToken"))
                    navigate('/');
                }
                else {
                    alert('Enter valid credentials')
                }
            })
    }

    const onChange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>

            <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/signup2.jpg)`, backgroundSize: 'cover', height: '100vh' }}>
            <div>
                <Navbar />
            </div>

            <div className='container' style={{ paddingTop: '100px' }}>
                <form className='w-50 m-auto border bg-dark border-success rounded' onSubmit={handleSubmit}>
                    <span className='text-white mt-2' style={{ fontSize: '32px', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Login</span>
                    
                    <div className="m-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                    </div>
                    
                    <div className="m-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <button type="submit" className="m-3 btn btn-success">Login</button>
                        <Link to="/createuser" className="m-3 mx-1 btn btn-danger">New user ??</Link>
                    </div>
                </form>
            </div>
        </div>
        </>

        
    )
}

export default Login






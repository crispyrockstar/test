import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({
        empno: "",
        password: ""
    })
    const [buttonValid, setButtonValid] = useState(false)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginData({ ...loginData, [name]: value })
        console.log(Object.values(loginData).every(value => value !== ""));
        if (Object.values(loginData).every(value => value)) {
            setButtonValid(true)
        } else {
            setButtonValid(false)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(loginData, "logindata");
    }
    return (
        <div className="main-login">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className='input-field'>
                        <label htmlFor='empno'>Emp Number : </label>
                        <input type='text' id='empno' name='empno' value={loginData.empno} onChange={handleChange} />
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password : </label>
                        <input type='password' id='password' name='password' value={loginData.password} onChange={handleChange} />
                    </div>
                    <button type='submit' disabled={!buttonValid}>Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Login
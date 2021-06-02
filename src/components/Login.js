import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {

    const initialValues = { username: '', password: '' }
    const [formData, setFormData] = useState(initialValues)
    const [err, setError] = useState(false)

    const handleChange = e => {
        const key = e.target.id
        const value = e.target.value
        setFormData(prevValues => ({ ...prevValues, [key]: value }))
    }

    const encode = () => {
        const result = window.btoa(`${formData.username}:${formData.password}`)
        const url = 'https://quintana.wazo.community/api/auth/0.1/token'
        axios.post(url, {
        }, {
            headers: {
                'Authorization': `Basic ${result}`
            }
        })
            .then(res => localStorage.setItem('X-Auth-Token', res.data.data.token))
            .catch(err => {
                setFormData(initialValues)
                setError(true)
            })
    }

    const fetchData = () => {
        const url = 'https://quintana.wazo.community/api/auth/0.1/users'
        axios
            .get(url, {
                headers: {
                    'X-Auth-Token': localStorage.getItem('X-Auth-Token')
                }
            })
            .then(res => {
                console.log(res.data.items[0])
            })
    }

    return (
        <>
            <input id='username' type='text' value={formData.username} onChange={handleChange} />
            <input id='password' type='text' value={formData.password} onChange={handleChange} />
            <button onClick={encode}>CODE</button>
            <p>Le combo à convertir est {formData.username}:{formData.password}</p>
            <br />
            <button onClick={fetchData}>GET DATA</button>
            {err &&
                <div>
                    Authorization failed
        </div>}
        </>
    );
}

export default Login;

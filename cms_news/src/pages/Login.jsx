import { useState } from "react"

export const Login = ({ setAuth }) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        if(username === 'admin123' && password === 'admin123'){
            setAuth(true)
        }else{
            setError('Username atau Password salah!')
        }
    }

    return (
        <div className="login-parent">
            <div className="login-container">
                <h2>LOGIN</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="login-form-list">
                        <label>Username</label>
                        <input 
                        type="text" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="login-form-list">
                        <label>Password</label>
                        <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    )
}

export default Login

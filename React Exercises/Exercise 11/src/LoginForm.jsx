import {useState} from 'react'
 function LoginForm() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false)

 const handleLogin = (e) => {
    e.preventDefault()
    username && password ? setIsLoggedIn(true) : alert('Please enter both username and password')
setIsLoggedIn(true);
    
 }
 const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setPassword('')
  }

    return (       

        <div>

            {isLoggedIn ? (
                <div>
                    <h2>Welcome, {username}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                        required
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            )}

        </div>

    )

}

export default LoginForm
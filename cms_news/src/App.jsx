import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { useState } from 'react'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
      <Routes>
        <Route path='/' element={isAuthenticated ? <Navigate to="/home" replace/> : <Login setAuth={setIsAuthenticated}/> }/>
        <Route path='/home' element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />
      </Routes>
    </>
  )
}

export default App

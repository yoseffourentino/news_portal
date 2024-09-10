import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import NewsDetails from './pages/NewsDetails'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<NewsDetails/>}/>
      </Routes>
    </>
  )
}

export default App

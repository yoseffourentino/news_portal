import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import NewsDetails from './pages/NewsDetails'
import SearchPage from './pages/SearchPage'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<NewsDetails/>}/>
        <Route path='/search/:id' element={<SearchPage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App

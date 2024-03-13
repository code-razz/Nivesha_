import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>   NOTE: All react components should be 1st letter in uppercase or error will be there */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;

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
import Login from './pages/login/Login.jsx';
import Feed from './pages/feed/Feed.jsx';
import Signup from './pages/login/Signup.jsx';
import CompanyReg from './pages/allRegister/CompanyReg.jsx';
import InvestorReg from './pages/allRegister/InvestorReg.jsx';
import FProfile from './pages/profile/FProfile.jsx';
import About from './pages/about/About.jsx';
import InvestorPage from './pages/investorCompany/Investorp.jsx';
import CompanyPage from './pages/investorCompany/Companyp.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        {/* <Route path="/hotels/:id" element={<Hotel/>}/> */}
        <Route path="/login" element={<Login/>}/>   {/*NOTE: All react components should be 1st letter in uppercase or error will be there */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/companyreg" element={<CompanyReg/>}/>
        <Route path="/investorreg" element={<InvestorReg/>}/>
        <Route path="/fprofile" element={<FProfile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/investorp" element={<InvestorPage/>}/>
        <Route path="/companyp" element={<CompanyPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

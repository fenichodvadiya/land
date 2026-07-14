import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar'
import Form from './Component/Form'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import Gallary from './Component/Gallary'
import NavTab from './Component/NavTab'
import Dashboard from './Admin/Dashboard'
import GallaryForm from './Admin/GallaryForm'
import CarouselGal from './Component/CarouselGal'
import CarouselAdd from './Admin/CarouselAdd'
import Home from './Component/Home'
import About from './Component/About'
import Advertisement from './Admin/Advertisement'
import ServicesPage from './Component/Service'
import Register from './Component/Register'
import Login from './Component/Login'
import ScrollToTop from "./Component/ScrollToTop"
import AdminLogin from './Admin/AdminLogin'
import ResetPassword from './Admin/ResetPassword'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/Gallary' element={<Gallary />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route path='/navtab' element={<NavTab />}></Route>
            {/* <Route path='/crousel' element={<CarouselGal/>}></Route> */}
            <Route path='/carouseladd' element={<CarouselAdd />}></Route>
            <Route path='/gallery' element={<GallaryForm />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/service' element={<ServicesPage />}></Route>
            <Route path='/Advertisement' element={<Advertisement />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/adminlogin' element={<AdminLogin />}></Route>
            <Route
              path="/resetpassword/:token"
              element={<ResetPassword />}
            />
          </Routes>
        </Router>
        {/* <Form/>
        <Footer/> */}
        {/* <Gallary/> */}
        {/* <NavBar/> */}
        {/* <NavTab/> */}
        {/* <GallaryForm/> */}
      </div>
    </>
  )
}

export default App

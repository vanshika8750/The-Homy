import './App.css'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import ScrollToTop from './Components/ScrollToTop'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Aboutus from './Pages/Aboutus/Aboutus'
import Footer from './Components/Footer/Footer'
import Services from './Pages/Services/Services'
import Contactus from './Pages/Contactus/Contactus'
import Signup from './Pages/Signup/Signup'
import Login from './Pages/Login/Login'
import KitchenKing from './Pages/KitchenKing/KitchenKing'
import Customize from './Pages/Customize/Customize'
import Otp from './Pages/Otp/Otp'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword'
import Dashboard from './Pages/Dashboard/Dashboard'
import Cart from './Pages/Cart/Cart'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import Homy from './Pages/Homy/Homy'
import { CustomizationProvider } from './Components/Context/CustomizationContext'
import Homypro from './Pages/HomyPro/HomyPro'
import Homypromax from './Pages/HomyProMax/HomyProMax'
import Dustguard from './Pages/Dustguard/Dustguard'
import Hygiene from './Pages/Hygiene/Hygiene'
import Maintenance from './Pages/Maintenance/Maintenance'
import DustGuardHomy from './Pages/Homy/DustGuardHomy'
import DustguardHomypro from './Pages/HomyPro/DustGuardHomyPro'
import DustguardHomypromax from './Pages/HomyProMax/DustGuardHomyProMax'
import HygieneHomy from './Pages/Homy/HygieneHomy'
import HygieneHomypro from './Pages/HomyPro/HygieneHomyPro'
import HygieneHomypromax from './Pages/HomyProMax/HygieneHomyProMax'
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy'
import RefundPolicy from './Pages/Policies/RefundPolicy'
import TermAndConditions from './Pages/Policies/TermAndConditions'
import CustomizePro from './Pages/Customize/CustomizePro'
function App() {

  return (

    <div style={{overflowX:'hidden',overflowY:'hidden'}}>
      <CustomizationProvider >
          <Router>
          <ScrollToTop /> 
    <Navbar/>
       <Routes>

         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/aboutus' element={<Aboutus/>}/>
         <Route exact path='/services' element={<Services/>}/>
         <Route exact path='/contactus' element={<Contactus/>}/>
         <Route exact path='/signup' element={<Signup/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/kitchenking' element={<KitchenKing/>}/>
         <Route exact path='/kitchenking/customize' element={<Customize/>}/>
         <Route exact path='/otp' element={<Otp/>}/>
         <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
         <Route exact path='/dashboard' element={<Dashboard/>}/>
         <Route exact path='/cart' element={<Cart/>}/>
         <Route exact path='/admin' element={<AdminDashboard/>}/>
         <Route exact path='/kitchenking/homy' element={<Homy/>}/>
         <Route exact path='/kitchenking/homypro' element={<Homypro/>}/>
         <Route exact path='/kitchenking/homypromax' element={<Homypromax/>}/>
         <Route exact path='/dustguard' element={<Dustguard/>}/>
         <Route exact path='/hygiene' element={<Hygiene/>}/>
         <Route exact path='/maintenance' element={<Maintenance/>}/>
         <Route exact path='/dustguard/homy' element={<DustGuardHomy/>}/>
         <Route exact path='/dustguard/homypro' element={<DustguardHomypro/>}/>
         <Route exact path='/dustguard/homypromax' element={<DustguardHomypromax/>}/>
          <Route exact path='/hygiene/homy' element={<HygieneHomy/>}/>
          <Route exact path='/hygiene/homypro' element={<HygieneHomypro/>}/>
        <Route exact path='/hygiene/homypromax' element={<HygieneHomypromax/>}/>
        <Route exact path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route exact path='/refundpolicy' element={<RefundPolicy/>}/>
        <Route exact path='/termsandconditions' element={<TermAndConditions/>}/>
        <Route exact path='/customizePro' element={<CustomizePro/>}/>


       </Routes>    
       <Footer/>
    </Router>
    </CustomizationProvider>
    </div>

  )
}

export default App

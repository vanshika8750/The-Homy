import './App.css'

import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
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

function App() {

  return (

    <div style={{overflowX:'hidden'}}>
      <CustomizationProvider >
          <Router>
    <Navbar/>
       <Routes>

         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/aboutus' element={<Aboutus/>}/>
         <Route exact path='/services' element={<Services/>}/>
         <Route exact path='/contactus' element={<Contactus/>}/>
         <Route exact path='/signup' element={<Signup/>}/>
         <Route exact path='/login' element={<Login/>}/>
         <Route exact path='/kitchenking' element={<KitchenKing/>}/>
         <Route exact path='/customize' element={<Customize/>}/>
         <Route exact path='/otp' element={<Otp/>}/>
         <Route exact path='/forgotPassword' element={<ForgotPassword/>}/>
         <Route exact path='/dashboard' element={<Dashboard/>}/>
         <Route exact path='/cart' element={<Cart/>}/>
         <Route exact path='/admin' element={<AdminDashboard/>}/>
         <Route exact path='/homy' element={<Homy/>}/>
         <Route exact path='/homypro' element={<Homypro/>}/>
         <Route exact path='/homypromax' element={<Homypromax/>}/>
         


       </Routes>    
       <Footer/>
    </Router>
    </CustomizationProvider>
    </div>

  )
}

export default App

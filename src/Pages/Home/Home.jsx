import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Description from '../../Components/Description/Description'
import FeatureBanner from '../../Components/FeatureBanner/FeatureBanner'
import Ourservices from '../../Components/Ourservices/Ourservices'
import Why from '../../Components/Why/Why'
import Pricing from '../../Components/Pricing/Pricing'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <>
    
    
    
        <Banner/>
        <Description/>
        <FeatureBanner/>
        <Why/>
        {/* <Ourservices/> */}
        <Pricing/>
       

        

    
    
    </>
  )
}

export default Home
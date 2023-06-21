import React from 'react'
import Copywrite from './components/Copywrite'
import Enquire from './components/Enquire'
import FloorPlan from './components/FloorPlan'
import Footer from './components/Footer'
import ImageGallery from './components/ImageGallery'
import Navbar from './components/Navbar'
import Promo from './components/Promo'
import Promo2 from './components/Promo2'
import Promo3 from './components/Promo3'
import Promo4 from './components/Promo4'
import Promo5 from './components/Promo5'
import Promo6 from './components/Promo6'
import Promo7 from './components/Promo7'

const page = () => {
  return (
    <div>
      <Navbar />  
      <Promo />
      <Promo2 />
      <Promo3 />
      <Promo4 />
      <Promo5 />
      <Promo6 />
      <Promo7 />
      <FloorPlan />
      <ImageGallery />
      <Enquire />
      <Footer />
      <Copywrite />
    </div>
  )
}

export default page
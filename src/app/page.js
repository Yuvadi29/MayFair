import React from 'react'
import Copywrite from './components/Copywrite'
import Enquire from './components/Enquire'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Promo from './components/Promo'
import Promo2 from './components/Promo2'
import Promo3 from './components/Promo3'
import Promo4 from './components/Promo4'

const page = () => {
  return (
    <div>
      <Navbar />  
      <Promo />
      <Promo2 />
      <Promo3 />
      <Promo4 />
      <Enquire />
      <Footer />
      <Copywrite />
    </div>
  )
}

export default page
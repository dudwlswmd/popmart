import React from 'react'
import ContactVisual from '../components/Contact/ContactVisual'
import ContactSection1 from '../components/Contact/ContactSection1'
import Footer from '../components/Footer'
import ContactSection2 from '../components/Contact/ContactSection2'

const Contact = () => {

     return (
          <div className='Contact'>
               <ContactVisual />
               <ContactSection1 />
               <ContactSection2 />
               <Footer />
          </div>
     )
}

export default Contact
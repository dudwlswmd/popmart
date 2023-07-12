import React from 'react'
import AboutVisual from '../components/Abount/AboutVisual'
import AboutSection1 from '../components/Abount/AboutSection1'
import AboutSection2 from '../components/Abount/AboutSection2'
import AboutSection3 from '../components/Abount/AboutSection3'
import Footer from '../components/Footer'


const About = () => {
     const isAboutPage = true; // About 페이지 여부를 나타내는 변수 (임시로 true로 설정)

     return (
          <div className='About'>
               <AboutVisual />
               <AboutSection1 />
               <AboutSection2 />
               <AboutSection3 />
               {isAboutPage ? <Footer className='Footer black' /> : <Footer />}
          </div>
     )
}

export default About
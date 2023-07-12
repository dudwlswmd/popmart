import React from 'react'
import SwiperComponent from './SwiperComponent'
import '../components/swiperHome.scss';
import '../components/careerList.scss';
import CareerList from './CareerList';

const MainSection3 = () => {
     return (
          <div className='MainSection3'>
               <div className='center'>
                    <div className="glitch" data-text="SERVICE">SERVICE</div>
                    <div className="glow">SERVICE</div>
                    <p className="tape_img left three"><img src="/img/tape_left2.webp" alt="테이프이미지" /></p>
                    <p className="tape_img right three"><img src="/img/tape_right2.webp" alt="테이프이미지" /></p>
               </div>
               <div className='MainSection3_swiper'>
                    <SwiperComponent />
               </div>
               <img className='MainSection1BG' src="/img/bg02B.webp" alt="붓배경" />
               <CareerList />
          </div>
     )
}

export default MainSection3
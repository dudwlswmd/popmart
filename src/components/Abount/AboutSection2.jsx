import React from 'react'
import './AboutSection2.scss'
import CustomSwiper from './CustomSwiper'



const AboutSection2 = () => {
     return (
          <div className='AboutSection2'>
               <CustomSwiper />
               <div className='subText aboutsection2Con'>
                    <p className="subtitle">
                    더 나은 가치로<br />
                    공감하다
                    <span className='span one'>SYMPATHY</span>
                    <span className='span two'>THINKING</span>
                    <span className='span three'>IMAGINATION</span>
                    </p>
                    <p className='tex'>
                    더 좋은 가치를 만들기 위하여 나는 끝없이 <span>고민합니다.</span><br />
                    나의 시선이 아닌 타인의 시선이 되어 고민하고 <span>생각하려 노력합니다.</span><br />
                    그렇게 형성 된 크고 작은 다양한 <span>공감을</span> 바탕으로 <br />
                    보다 더 나은 프로젝트를 제공하려 해봅니다.
                    </p>
               </div>
               <div className="container aboutsection2Con">
                    <div className="glitch" data-text="SYMPATHY">SYMPATHY</div>
                    <div className="glow">SYMPATHY</div>
                    <p className='tape_img left'><img src="/img/tape_left.webp" alt="테이프이미지" /></p>
                    <p className='tape_img right'><img src="/img/tape_right.webp" alt="테이프이미지" /></p>
               </div>
               <p className='boxLine'></p>
               <p className='boxLine two bg'></p>
               <img className='AboutSection2BG' src="/img/bg03.webp" alt="붓배경" />
          </div>
     )
}

export default AboutSection2
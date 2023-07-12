import React from 'react'
import './AboutSection1.scss'
import TypewriterApi from '../TypewriterApi'


const AboutSection1 = () => {
     return (
          <div className="AboutSection1 nextSection" id="nextSection">
               
               <div className='center'>
                    <div className='p'>
                         <p>
                              개발과 디자인 모두 열정을 가진 창의적인 개발자입니다.<br />
                              저의 전문성은 퍼블리셔로서의 경력과 높은 커뮤니케이션 이지만
                              피드백이 빠르고 수용을 원할하게 할수있는 장점이 있습니다.
                         </p>
                         <p>
                              UI/UX대한 이해도와 새로운 코드에 대한 높은 호기심이 많아서
                              계속해서 자기 발전 하는 개발자를 목표로!! 
                         </p>
                         <strong>
                              <TypewriterApi />
                         </strong>
                    </div>
                    <img className='logo' src="/img/logo-brush-light2.svg" alt="로고" />
                    <img className='logoBg' src="/img/brush6blackt.webp" alt="로고뒤배경브러시" />
                    <img className='flower' src="/img/apple.png" alt="꽃" />

               </div>
               
               <img className='AboutBg' src="/img/bg01B.webp" alt="붓배경" />
          </div>
     )
}

export default AboutSection1
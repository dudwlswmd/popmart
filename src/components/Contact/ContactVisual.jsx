import React from 'react'
import './ContactVisual.scss'
import { Link } from 'react-scroll';

const ContactVisual = () => {
     return (
          <div className='ContactVisual'>
               {/* <div class="glitch" data-text="GLITCH">CREATIVE</div>  */}
               <div className="container">
                    <div className="glitch" data-text="CONTACT">CONTACT</div>
                    <div className="glow">CONTACT</div>
                    <p className='tape_img left'><img src="/img/tape_left.webp" alt="테이프이미지" /></p>
                    <p className='tape_img right'><img src="/img/tape_right.webp" alt="테이프이미지" /></p>
               </div>
               <div className='subText'>
                    <p className="subtitle">ME & LET'S<br/>HAVE A TALK</p>
                    <p className='tex'>"나만의 언어로 코딩하고,<br /> 
                    나의 캔버스에 디자인을 그리며, <br />
                    웹을 통해 만든 <span>나만의 세계에</span> 연락해주세요"</p>
               </div>
               <p className='boxLine'></p>
               <p className='boxLine two bg'></p>
               <p className='img_h'><img src="/img/phone.webp" alt="전화기 사진" /></p>
               {/* <p className='img_h two'><img src="img/jjjjjj.png" alt="노트북사진" /></p> */}
               <Link to="nextSection" smooth={true} duration={500}>
               <div className="section threee">
                    <div id="button">
                         <span>LEARN MORE</span>
                         <div className="ring one"></div>
                         <div className="ring two"></div>
                         <div className="ring three"></div>
                         <div className="ring four"></div>
                    </div>
               </div>
               </Link>
               <img className='AboutBg' src="/img/bg01.webp" alt="붓배경" />
          </div>
     )
}

export default ContactVisual
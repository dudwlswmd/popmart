import React from 'react'
import { Link } from 'react-scroll';

const Visual = () => {
     return (
          <div className='visual'>
               {/* <div class="glitch" data-text="GLITCH">CREATIVE</div>  */}
               <div className="container">
                    <div className="glitch" data-text="CREATIVE">CREATIVE</div>
                    <div className="glow">CREATIVE</div>
                    <p className='tape_img left'><img src="/img/tape_left.webp" alt="테이프이미지" /></p>
                    <p className='tape_img right'><img src="/img/tape_right.webp" alt="테이프이미지" /></p>
               </div>
               <div className='subText'>
                    <p className="subtitle">Website Indeed</p>
                    <p className='tex'>"나만의 언어로 코딩하고,<br /> 나의 캔버스에 디자인을 그리며, <br />웹을 통해 만든 <span>나만의 세계에</span> 오신 걸 환영합니다"</p>
               </div>
               <p className='boxLine'></p>
               <p className='boxLine two bg'></p>
               <p className='img_h'><img src="img/head4t.webp" alt="아그리파사진" /></p>
               {/* <p className='img_h two'><img src="img/jjjjjj.png" alt="노트북사진" /></p> */}
               <Link to="nextSection" smooth={true} duration={500}>
                    <div className="section threee">
                         <div id="button">
                              <span>ABOUT</span>
                              <div className="ring one"></div>
                              <div className="ring two"></div>
                              <div className="ring three"></div>
                              <div className="ring four"></div>
                         </div>
                    </div>
               </Link>
               {/* section : END */}
          </div>
     )
}

export default Visual

import React from 'react'
import '../components/MainSection4.scss';
// import { Link } from 'react-router-dom';
import { Link  } from 'react-router-dom';

const MainSection4 = () => {

          const handleLinkClick = () => {
               window.scrollTo(0, 0);
               document.body.classList.add('fadeOut'); // 페이드 아웃 효과
               setTimeout(() => {
                    // 0.3초 후에 실행
                    document.body.classList.remove('fadeOut'); // 페이드 아웃 클래스 제거
                    // history.push('/Contact'); // 링크로 이동
               }, 500);
          };
     return (
          <div className='MainSection4'>
               <div className="container">
                    <div className="glitch" data-text="CONTACT">CONTACT</div>
                    <div className="glow">CONTACT</div>
                    <p className='tape_img left'><img src="/img/tape_left.webp" alt="테이프이미지" /></p>
                    <p className='tape_img right'><img src="/img/tape_right.webp" alt="테이프이미지" /></p>
               </div>
               <div className='subText'>
                    <p className="subtitle">I CAN HELP YOU</p>
                    <p className='tex'>
                         "언제든지 <span>저의 세계에</span> 연락해주세요."" <br />
                         협업 기회를 논의하거나 궁금한 점에 대해 답변드릴게요.<br />
                         아래의 <span>연락처로</span> 연락해주세요. 기다리고 있겠습니다.    
                    </p>
               </div>
               <p className='boxLine'></p>
               <p className='boxLine two bg'></p>
               <p className='img_h'><img src="img/phone.webp" alt="전화기사진" /></p>
               <Link to="/Contact" onClick={handleLinkClick}>
                    <div className="section threee">
                         <div id="button">
                              <span>CONTACT</span>
                              <div className="ring one"></div>
                              <div className="ring two"></div>
                              <div className="ring three"></div>
                              <div className="ring four"></div>
                         </div>
                    </div>
               </Link>
               {/* section : END */}
               <img className='MainSection4Bg' src="/img/bg03.webp" alt="붓배경" />
               {/* {showGlitchImg && <img className='glitchImg' src="img/glitch.gif" alt="글리치이미지" />}           */}

          </div>
     )
}

export default MainSection4
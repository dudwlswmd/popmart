import React, { useState } from 'react';

const MainSection2 = () => {


          const [isHovered, setIsHovered] = useState(false);
     
          const handleHover = () => {
               setIsHovered(true);
          };
     
          const handleMouseLeave = () => {
               setIsHovered(false);
          };


     return (
          <div className='MainSection2'>
               <div className='center'>
                    <div className="glitch" data-text="PROJECT">PROJECT</div>
                    <div className="glow">PROJECT</div>
                    <p className="tape_img left three"><img src="/img/tape_left2.webp" alt="테이프이미지" /></p>
                    <p className="tape_img right three"><img src="/img/tape_right2.webp" alt="테이프이미지" /></p>
               </div>
               <ul className='projectList'>
                         <li>
                              <div className='cucle'>
                                   <img className='bvbLogo bvbLogoLeft' src="/img/bvblogoLeft.png" alt="로고왼쪽" />
                                   <img className='bvbLogo bvbLogoRight' src="/img/bvblogoRight.png" alt="로고오른쪽" />
                              </div>
                              <img className='cloud con1' src="/img/cloud2.png" alt="구름사진1" />
                              <img className='cloud con2' src="/img/cloud1.png" alt="구름사진2" />
                              <h3>DORTMUND<span>WEB SITE</span></h3>
                         </li>
                         <li>
                              <div className='cucle'>
                                   <img className='bvbLogo bvbLogoLeft' src="/img/yglogoLeft.png" alt="로고왼쪽" />
                                   <img className='bvbLogo bvbLogoRight' src="/img/yglogoRight.png" alt="로고오른쪽" />
                              </div>
                              <h3><b>YG FA</b>MILY<span>WEB SITE</span></h3>
                         </li>
                         <li
                              className={`projectItem ${isHovered ? 'hovered' : ''}`}
                              onMouseEnter={handleHover}
                              onMouseLeave={handleMouseLeave}
                         >
                              <div className='cucle'>
                                   <p className='popmartCitys'>
                                        <img src="/img/moon.webp" alt="달" />
                                        <img src="/img/city2.webp" alt="도시밝은배경" />
                                        <img src="/img/cityBg.webp" alt="도시어두운배경" />
                                        <img src="/img/city.png" alt="도시불빛" />
                                   </p>
                                   <img className='bvbLogo bvbLogoLeft' src="/img/poplogoLeft.png" alt="로고왼쪽" />
                                   <img className='bvbLogo bvbLogoRight' src="/img/poplogoRight.png" alt="로고오른쪽" />
                              </div>
                              <img
                                   className='superMen'
                                   src="/img/popUp.png"
                                   alt="popmart슈퍼걸 피규어"
                                   style={{
                                        opacity: isHovered ? 0 : 1,
                                        transform: isHovered ? 'translate(-50%, -150%)' : 'translate(-50%, -50%)',
                                        transition: 'opacity 0.5s, transform 0.5s',
                                   }}
                              />
                              <h3><b>POP </b> MART<span>WEB APP</span></h3>
                         </li>
                    </ul>
               <img className='MainSection4Bg' src="/img/bg03.webp" alt="붓배경" />
          </div>
     )
}

export default MainSection2
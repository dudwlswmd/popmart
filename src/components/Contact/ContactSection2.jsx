import React, { useState } from 'react'
import './ContactSection2.scss';

const ContactSection2 = () => {
     const [isLampOn, setIsLampOn] = useState(false);

     const handleLampHover = () => {
          setIsLampOn(true);
     };

     const handleLampLeave = () => {
          setIsLampOn(false);
     };
     return (
          <div className='ContactSection2'>
               <div className='center'>
                    <div className='imgs'>
                              <img className='lamp' src="/img/lamp.png" alt="램프" onMouseOver={handleLampHover} onMouseLeave={handleLampLeave} />
                              <img className={`lampOn ${isLampOn ? 'on' : ''}`} src="/img/lamp-on.png" alt="램프ON" />
                              <img className='logoBg' src="/img/flower39t.webp" alt="흰색꽃" />
                              <img className='flower' src="/img/flower43t.webp" alt="검정꽃" />
                              <img className='arrow left' src="/img/arrow.webp" alt="화살표" />
                              {/* <img className='arrow right' src="/img/arrow.webp" alt="화살표" /> */}
                         <div className="new_Bottom_Move_Text">
                              <div className="text text2">
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                              </div>
                         </div>

                         <div className="new_Bottom_Move_Text move2">
                              <div className="text text1">
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                                   <p>I DEA I DEA I DEA I DEA I DEA I DEA</p>
                              </div>
                         </div>

                    </div>
                    <div className='p'>
                         <p>
                              번뜩이는 <span>아이디어로</span> 구현하겠습니다.
                         </p>
                         <p>
                         팀원들에게 긍정적인 영향을 주는 나의 파장으로,<br />
                         밝고 흥미로운 프로젝트 경험을 만들고자 합니다. <br />
                         긍정의 파장이 어우러져 좋은 결과물을 이끌어낼 수 있기를 기대합니다. <br />
                         좋은 에너지가 팀 내에 전해져 모두가 동기부여를 받을 수 있기를 바랍니다.
                         </p>
                         <p>
                         저는 팀원들과의 협업을 중요시하며, <br />
                         업무를 즐기고 긍정적인 마인드로 일을 처리합니다. <br />
                         어려운 상황에서도 긍정적인 해결책을 모색하고, <br />
                         프로젝트에서는 긍정의 에너지가 창의성과 협업을 촉진하며, <br />
                         모든 팀원들이 자신의 역량을 발휘할 수 있는 환경을 만들고자 합니다. <br />
                         함께하는 모든 부분에서 긍정의 영향을 주어 좋은 프로젝트를 완성하기 위해 노력하겠습니다.
                         </p>

                    </div>
               </div>
               <img className='ContactSection2Bg' src='/img/bg03.webp' alt='붓배경' />
          </div>
     )
}

export default ContactSection2
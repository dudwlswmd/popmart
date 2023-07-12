import React, { useState } from 'react'
import { Swiper as SwiperReact, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swiperHome.scss';

// import './styles.css';

import { Navigation } from 'swiper/modules';

const SwiperComponent  = () => {
     const [isSwiperHovered, setIsSwiperHovered] = useState(false);

     const handleSwiperMouseEnter = () => {
          setIsSwiperHovered(true);
     };

     const handleSwiperMouseLeave = () => {
          setIsSwiperHovered(false);
     };
     
     return (
          <div
          className={`swiper-container ${isSwiperHovered ? 'swiper-container-hovered' : ''}`}
          onMouseEnter={handleSwiperMouseEnter}
          onMouseLeave={handleSwiperMouseLeave}
          >
          <SwiperReact
          slidesPerView={'auto'}
          centeredSlides={true}
          navigation={true}
          spaceBetween={100}
          speed={900}
          modules={[Navigation  ]}
          className="mySwiper"
          >

               <SwiperSlide>
                    <p className='imgs'></p>
                    <dl>
                         <dt>DESIGN</dt>
                         <dd>
                              디자인과 퍼블리싱 경험을 바탕으로, 
                              저는 프로젝트를 진행할 때 높은 수준의 디자인 이해력을 활용하여 개발을 진행합니다. 
                              효율적인 업무 협업을 위해 최고 수준의 도구를 사용합니다. 
                              저와 함께 일하면 이러한 장점을 경험하실 수 있습니다
                         </dd>
                    </dl>
               </SwiperSlide>
               <SwiperSlide>
                    <p className='imgs'>
                         <img className='mainImg' src="/img/creative/creative.png" alt='이미지' />
                         <img className='subnImg' src="/img/creative/part-2.png" alt='이미지' />
                         <img className='subnImg con2' src="/img/creative/part-6.png" alt='이미지' />
                         <img className='subnImg con3' src="/img/creative/part-5.png" alt='이미지' />
                         <img className='subnImg con4' src="/img/creative/part-7.png" alt='이미지' />
                         <img className='subnImg con5' src="/img/creative/part-9.png" alt='이미지' />
                         <img className='subnImg con6' src="/img/creative/part-10.png" alt='이미지' />
                         <img className='subnImg con7' src="/img/creative/part-13.png" alt='이미지' />
                         <img className='subnImg con8' src="/img/creative/part-14.png" alt='이미지' />
                         <img className='subnImg con9' src="/img/creative/part-15.png" alt='이미지' />
                         <img className='subnImg con10' src="/img/creative/part-16.png" alt='이미지' />
                         <img className='subnImg con11' src="/img/creative/part-22.png" alt='이미지' />
                         <img className='subnImg con12' src="/img/creative/part-18.png" alt='이미지' />
                         <img className='subnImg con13' src="/img/creative/part-28.png" alt='이미지' />
                         <img className='subnImg con14' src="/img/creative/part-27.png" alt='이미지' />
                    </p>
                    <dl>
                         <dt>CREATIVE</dt>
                         <dd>
                              저는 창의적이고 열정적이고 모험적이며 기발한 사람입니다. 
                              함께 프로젝트에 참여하며 환상적인 사람들과 협력면서 함께 도전하기에
                              좋은 인재 입니다. 귀사분들이 찾는 특별한 사람이 저였으면 좋겠습니다.
                         </dd>
                    </dl>
               </SwiperSlide>
               <SwiperSlide>
                    <p className='imgs'>
                         <img className="lampon" src="/img/lamp-on.png" alt="램프 온" />
                    </p>
                    <dl>
                         <dt>I DEA</dt>
                         <dd>
                              저는 행복하고, 거칠고, 활기차고, 수줍음이 많고, 괴짜이고, 예술적이고, 재미있는 사람입니다.
                              감성적이지 않고 의미 있는 웹앱을 만들기 위해 노력하며 좋은 경험을 위해 항상 도전하는 사람입니다.
                         </dd>
                    </dl>
               </SwiperSlide>
               <SwiperSlide>
                    <p className='imgs'>
                    <img src="/img/slide01.webp" alt='이미지' />
                    </p>
                    <dl>
                         <dt>IMAGINATION</dt>
                         <dd>
                              디자인과 퍼블리싱 경험을 바탕으로, 
                              저는 프로젝트를 진행할 때 높은 수준의 디자인 이해력을 활용하여 개발을 진행합니다. 
                              효율적인 업무 협업을 위해 최고 수준의 도구를 사용합니다. 
                              저와 함께 일하면 이러한 장점을 경험하실 수 있습니다
                         </dd>
                    </dl>
                    <div className="new_Bottom_Move_Text">
                         <div className="text text2">
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                         </div>
                    </div>

                    <div className="new_Bottom_Move_Text move2">
                         <div className="text text1">
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                         </div>
                    </div>

                    <div className="new_Bottom_Move_Text move3">
                         <div className="text text1">
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                              <p> A CONSTANTLY EVOLVING DEVELOPER TO</p>
                              <p> PRESENT A NEW VISION FOR THE WEB</p>
                         </div>
                    </div>
                    
               </SwiperSlide>


          </SwiperReact>
          </div>
     )
}

export default SwiperComponent

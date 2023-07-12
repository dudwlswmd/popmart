import React, { useState, useEffect, useRef } from 'react';


const MainSection1 = () => {
     const [isHovered, setIsHovered] = useState(false);
     const [isSectionVisible, setIsSectionVisible] = useState(false);
     const triggerRef = useRef(null);

          const handleHover = () => {
               setIsHovered(!isHovered);
          };

     useEffect(() => {
          const handleScroll = () => {
               const triggerTop = triggerRef.current.offsetTop;
               const triggerBottom = triggerTop + triggerRef.current.offsetHeight;
               const scrollY = window.scrollY || window.pageYOffset;
               if (scrollY + 38 >= triggerTop && scrollY <= triggerBottom) {
                    if (!isSectionVisible) {
                    setIsSectionVisible(true);
                    }
               } else {
                    setIsSectionVisible(false);
               }
          };
     
          const onClassHandler = () => {
               if (isHovered || isSectionVisible) {
                    return 'on';
               } else {
                    return '';
               }
          };
     
          onClassHandler();
     
          window.addEventListener('scroll', handleScroll);
          return () => {
          window.removeEventListener('scroll', handleScroll);
          };
     }, [isHovered, isSectionVisible]);

     // const handleScroll = () => {
     //      if (sectionRef.current) {
     //           const sectionTop = sectionRef.current.offsetTop;
     //           // const sectionHeight = sectionRef.current.offsetHeight;
     //           // const windowHeight = window.innerHeight;
     //           const scrollY = window.scrollY || window.pageYOffset;
     //           console.log(scrollY, sectionTop, isSectionVisible)
     //           if (scrollY == sectionTop) {
     //                console.log('good')
     //                setIsSectionVisible(true);
     //                setTimeout(()=>{
     //                     setIsSectionVisible(false)
     //                },2000)
     //           } else {
     //                setIsSectionVisible(false);
     //                console.log('bad')
     //           }
     //      }
     // };



     const onClassHandler = () => {
               if(isHovered || isSectionVisible){
                    return 'on'
               } else {
                    return ''
               }
     }


     return (
     <div className="MainSection1 nextSection" ref={triggerRef}  id="nextSection">
          <p className="txtRotate one">A CONSTANTLY EVOLVING</p>
          <p className="txtRotate two">DEVELOPER TO</p>
          <p className="txtRotate three">PRESENT A NEW</p>
          <p className="txtRotate for">VISION FOR THE WEB</p>
          <div className="aboutBtn">
               <div className="button_w">
                    <div className={`all ${onClassHandler()}`}>
                    <h2>ABOUT PAGE</h2>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="circle"></div>
                    </div>
               </div>
          </div>
          <div className="aboutTitle">
               <div className="glitch" data-text="ABOUT">
                    ABOUT
               </div>
               <div className="glow">ABOUT</div>
               <p className="tape_img left two"><img src="/img/tape_left2.webp" alt="테이프이미지" /></p>
               <p className="tape_img right two"><img src="/img/tape_right2.webp" alt="테이프이미지" /></p>
               <p className="txt">
                    <span className="my" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                    나의 세상과
                    </span>{' '}
                    개발을 조화롭게 결합해 사용자들에게 최상의 웹 경험을 제공하는 것이 목표인 저는 개발 동향을 꾸준히 연구하려 노력하고 개발뿐 아니라 시각적으로 아름다운
                    인터페이스와 효율적인 사용자 경험을 구현하기 위해 최선을 다하고 있습니다. 이러한 노력이 빛을 바라기 위해 끊임없이 노력하고 성장하는{' '}
                    <span onMouseEnter={handleHover} onMouseLeave={handleHover}>송영진</span> 입니다.
               </p>
          </div>
          <img className="MainSection1BG" src="/img/bg01B.webp" alt="붓배경" />
     </div>
     );
};

export default MainSection1;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
     const [showGlitchImg, setShowGlitchImg] = useState(false);

     const handleMenuClick = () => {
          setIsMenuOpen(!isMenuOpen);
          setShowGlitchImg(!showGlitchImg)
     };

     useEffect(() => {
          if (isMenuOpen) {
               setShowGlitchImg(true);
               const timer = setTimeout(() => {
                    setShowGlitchImg(false);
               }, 800);
               return () => clearTimeout(timer);
          } else {
               const timer = setTimeout(() => {
                    setShowGlitchImg(false);
               }, 500);
               return () => clearTimeout(timer);
          }
     }, [isMenuOpen]);
     
     const handleLinkClick = () => {
          window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
          handleMenuClick(); // 메뉴 닫기
     };
return (
     <header>
          <h1>
          <Link to="/">
               <img src="/img/logo.png" alt="로고" />
          </Link>
          </h1>
          <div className={`menu ${isMenuOpen ? 'on' : ''}`}  onClick={handleMenuClick}>
               <span></span>
               <ul className="gnb" data-text="TRHACKER">
                    <li data-text="HOME"><Link to="/" onClick={handleLinkClick}>HOME</Link></li>
                    <li data-text="ABOUT"><Link to="/About" onClick={handleLinkClick}>ABOUT</Link></li>
                    <li data-text="WORK"><Link to="/Work" onClick={handleLinkClick}>WORK</Link></li>
                    <li data-text="CONTACT"><Link to="/Contact" onClick={handleLinkClick}>CONTACT</Link></li>
               </ul>
          </div>
          {showGlitchImg && <img className='glitchImg' src="img/glitch.gif" alt="글리치이미지" />}          
     </header>
     );
};

export default Header;

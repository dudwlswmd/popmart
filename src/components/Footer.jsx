import React, { useState, useEffect } from 'react';
import '../components/Footer.scss';

const Footer = ({className}) => {
  const [showTopButton, setShowTopButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }
  };

  const scrollToTop = () => {
    const scrollStep = window.scrollY / 30;

    const scrollAnimation = () => {
      if (window.scrollY > 0) {
        window.scrollBy(0, -scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };

    scrollAnimation();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div className={`Footer ${className}`}>
            <ul>
                <li>
                    <dl>
                        <dt>SERVICES</dt>
                        <dd>DESIGN</dd>
                        <dd>CREATIVE</dd>
                        <dd>I DEA</dd>
                        <dd>IMAGINATION</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>PROJECT</dt>
                        <dd>DORTMUND</dd>
                        <dd>YG FAMILY</dd>
                        <dd>POP MART</dd>
                    </dl>
                </li>
                <li>
                    <dl>
                        <dt>CONTACT</dt>
                        <dd>010 0000 1330</dd>
                        <dd>경기도 시흥시 도창동 <span>184</span>번지</dd>
                        <dd>dudwlswmd@gmail.com</dd>
                        <dd>sksmsrhtn113@naver.com</dd>
                    </dl>
                </li>
            </ul>
                {showTopButton && (
                    <div className="topBtn" onClick={scrollToTop}>
                    TOP
                    </div>
                )}
        </div>
    )
}

export default Footer
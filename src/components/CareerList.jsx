import React, { useEffect, useState } from 'react';

const CareerList = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('content1');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      // 메뉴가 열려있을 때 스크롤 막기
      body.style.overflow = 'hidden';
    } else {
      // 메뉴가 닫혔을 때 스크롤 가능하게 설정
      body.style.overflow = 'auto';
    }

    // 컴포넌트가 언마운트될 때 스크롤 가능하게 설정
    return () => {
      body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <div className='careerList'>
      <button onClick={toggleMenu}>CAREER</button>
      <div className={`careerMenu ${isMenuOpen ? 'on' : ''}`}>
        <ul className='tabMenu'>
          <li className={activeTab === 'content1' ? 'active' : ''} onClick={() => handleTabClick('content1')}>
            SI COMPANY
          </li>
          <li className={activeTab === 'content2' ? 'active' : ''} onClick={() => handleTabClick('content2')}>
            IN HOUSE
          </li>
          <li className={activeTab === 'content3' ? 'active' : ''} onClick={() => handleTabClick('content3')}>
            STUDY
          </li>
        </ul>
        <div className='tabContent'>
          <ul>
            <li className={`content1 ${activeTab === 'content1' ? 'on' : ''}`}>
              <p><a href='www.d' onClick={(e)=>{e.preventDefault()}}>수원시청<span>SITE CHANGED</span><strong>2017.11 ~ 2018.01 </strong></a></p>
              <p><a href='https://www.ayf.or.kr/index.do'target="_blank" rel="noopener noreferrer" >안양시 청소년 재단<strong>2017.12 ~ 2018.02 </strong></a></p>
              <p><a href='https://www.arex.or.kr/main.do'target="_blank" rel="noopener noreferrer" >공항철도<strong>2017.10 ~ 2018.02  </strong></a></p>
              <p><a href='https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index.xml'target="_blank" rel="noopener noreferrer" >국세청 모바일<strong>2018.02 ~ 2018.06 </strong><span className='on'>하이브리드</span></a></p>
              <p><a href='www.d' onClick={(e)=>{e.preventDefault()}}>노원구청<span>SITE CHANGED</span><strong>2018.04 ~ 2018.05 </strong></a></p>
              <p><a href='www.d' onClick={(e)=>{e.preventDefault()}}>원포인트 어학원<span>SITE CLOSED</span><strong>2018.04 ~ 2018.05  </strong></a></p>
              <p><a href='https://swrd.seoulwomanup.or.kr/wrd/main/main.do'target="_blank" rel="noopener noreferrer" >서울 여성능력 개발<strong>2018.04 ~ 2018.07 </strong></a></p>
              <p><a href='www.d' onClick={(e)=>{e.preventDefault()}}>스타 BOX<span className='on'>하이브리드</span><strong>2018.18 ~ 2018.09 </strong></a></p>
            </li>
            <li className={`content2 ${activeTab === 'content2' ? 'on' : ''}`}>
                <p><a href='http://choirock.com/'target="_blank" rel="noopener noreferrer">초이락컨텐츠팩토리<span className='on'>01</span><strong>2018.10 ~ 2018.12</strong></a></p>
                <p><a href='http://as.choirock.com/'target="_blank" rel="noopener noreferrer">초이락 AS센터<span className='on'>02</span><strong>2018.10 ~ 2019.02 </strong></a></p>
                <p><a href='http://myfriendkoriri.choirock.com/'target="_blank" rel="noopener noreferrer">코리리<span className='on'>03</span><strong>2018.10 ~ 2019.04 </strong></a></p>
                <p><a href='http://hellocarbot.choirock.com/'target="_blank" rel="noopener noreferrer">헬로 카봇<span className='on'>04</span><strong>2019.01 ~ 2019.05 </strong></a></p>
                <p><a href='http://bbashamecard.choirock.com/'target="_blank" rel="noopener noreferrer">빠샤 메카드<span className='on'>05</span><strong>2019.06 ~ 2019.07 </strong></a></p>
                <p><a href='http://ghostmecard.choirock.com/'target="_blank" rel="noopener noreferrer">요괴 메카드<span className='on'>06</span><strong>2019.08 ~ 2019.09  </strong></a></p>
                <p><a href='http://movie.choirock.com/'target="_blank" rel="noopener noreferrer">초이락 무비<span className='on'>07</span><strong>2019.08 ~ 2019.09  </strong></a></p>
            </li>
            <li className={`content3 ${activeTab === 'content3' ? 'on' : ''}`}>
            <p>
                <a href='www.s.com'>
                  리스트1 <span>01</span>
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <p className={`bg ${isMenuOpen ? 'on' : ''}`} onClick={closeMenu}></p>
    </div>
  );
};

export default CareerList;

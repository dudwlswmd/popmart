import React, { useEffect,useRef } from 'react'
import classes from '../components/Loder.module.scss';


const Loder = () => {

     const stickerWrapRef = useRef(null);
     const bgFillRef = useRef(null);
     const loaderRef = useRef(null);

     const dropStickers = () => {
          const stickers = stickerWrapRef.current.querySelectorAll(`.${classes.sticker}`);
          const bgFill = bgFillRef.current;
          const loader = loaderRef.current;

          setTimeout(() => {
          stickers.forEach((sticker) => {
               const order = parseInt(sticker.getAttribute('data-order'));
               const delay = order * 45;
     
               setTimeout(() => {
               sticker.style.opacity = 1;
               sticker.classList.add(classes.on);
               }, delay);
          });
     
          // 페이드 아웃 효과를 적용하고, 페이드 아웃이 완료된 후에 디스플레이를 'none'으로 변경
          setTimeout(() => {
               bgFill.style.transition = 'opacity 0.5s';
               bgFill.style.opacity = 0;
               
               setTimeout(() => {
               bgFill.style.display = 'none';
               loader.style.display = 'none';
               }, 500); // 페이드 아웃이 완료되기 위한 대기 시간
          }, 1500); // 스티커가 떨어진 후 대기 시간
          }, 500); // 0.5초 대기
          
          return () => {
               stickers.forEach((sticker) => {
                    sticker.style.opacity = '0';
                    sticker.classList.remove(classes.on);
                    
               });
          };
          
     };

     useEffect(() => {
          const cleanup = dropStickers();
          return () => {
          clearTimeout(cleanup);
          
          };
     }, []);

     return (
          <div className={`${classes.loader}`} ref={loaderRef}>
               <div className={classes.bgfill} ref={bgFillRef}></div>
               <div className={classes.stickerWrap} ref={stickerWrapRef}>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num01} `} data-type="1" data-num="1" data-order="17"><img src="/img/loader01.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num02} `} data-type="1" data-num="2" data-order="16"><img src="/img/loader01.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num03} `} data-type="1" data-num="3" data-order="14"><img src="/img/loader01.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num04} `} data-type="1" data-num="4" data-order="15"><img src="/img/loader01.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num05} `} data-type="1" data-num="5" data-order="13"><img src="/img/loader01.png" alt='img'/></div>

                    <div className={`${classes.sticker} ${classes.part} ${classes.num06} `} data-type="2" data-num="1" data-order="20"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num07} `} data-type="2" data-num="2" data-order="24"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num08} `} data-type="2" data-num="3" data-order="22"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num09} `} data-type="2" data-num="4" data-order="18"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num10} `} data-type="2" data-num="5" data-order="23"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num11} `} data-type="2" data-num="6" data-order="26"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num12} `} data-type="2" data-num="7" data-order="21"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num13} `} data-type="2" data-num="8" data-order="25"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num14} `} data-type="2" data-num="9" data-order="19"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker2@2x.png" alt='img' /></div>

                    <div className={`${classes.sticker} ${classes.part} ${classes.num15} `} data-type="3" data-num="1" data-order="11"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker3@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num16} `} data-type="3" data-num="2" data-order="9"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker3@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num17} `} data-type="3" data-num="3" data-order="10"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker3@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num18} `} data-type="3" data-num="4" data-order="12"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker3@2x.png" alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num19} `} data-type="3" data-num="5" data-order="8"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker3@2x.png" alt='img'/></div>
                    
                    <div className={`${classes.sticker} ${classes.part} ${classes.num20} `} data-type="4" data-num="1" data-order="1"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker4@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num21} `} data-type="4" data-num="2" data-order="5"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker4@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num22} `} data-type="4" data-num="3" data-order="28"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker4@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num23} `} data-type="4" data-num="4" data-order="7"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker4@2x.png"alt='img' /></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num24} `} data-type="4" data-num="5" data-order="27"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker4@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num25} `} data-type="4" data-num="6" data-order="6"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker4@2x.png" alt='img'/></div>

                    <div className={`${classes.sticker} ${classes.part} ${classes.num26} `} data-type="5" data-num="1" data-order="4"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker5@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num27} `} data-type="5" data-num="2" data-order="29"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker5@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num28} `} data-type="5" data-num="3" data-order="3"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker5@2x.png" alt='img'/></div>
                    <div className={`${classes.sticker} ${classes.part} ${classes.num29} `} data-type="5" data-num="4" data-order="2"><img src="https://www.griflan.com/wp-content/themes/griflan22-spa/images/loader-sticker5@2x.png" alt='img'/></div>
               </div>{/* <!--sticker-wrap : END--> */}
          </div> 
     )
}

export default Loder
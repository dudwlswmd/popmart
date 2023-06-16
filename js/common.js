




const header = document.querySelector('header');
const bottomMenu = document.querySelector('.bottomMenu');

window.addEventListener('scroll', () => {
     const scrollPosition = window.scrollY;

     if (scrollPosition > 95) {
          header.classList.add('on');
          bottomMenu.classList.add('on');
     } else {
          header.classList.remove('on');
          bottomMenu.classList.remove('on');

     }
});



// const topBtn = document.querySelector('.topBtn');
// console.log(topBtn)
// //top 탑버튼
// topBtn.addEventListener('click',()=>{
//      window.scrollTo({
//      top:0, behavior:"smooth" });
// })








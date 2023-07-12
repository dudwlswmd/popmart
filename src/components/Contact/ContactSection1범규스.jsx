import React, { useEffect, useState } from 'react';
import './ContactSection1.scss';
import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";
import { getDatabase, ref, push } from 'firebase/database';

import 'firebase/firestore';

// Firebase 구성
const firebaseConfig = {
  // Firebase 구성 정보 입력
     apiKey: "AIzaSyCDOOgOV0Svg1q-a0SfymQp5uszIKFHYYo",
     authDomain: "portfolio-8fb52.firebaseapp.com",
     databaseURL: "https://portfolio-8fb52-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "portfolio-8fb52",
     storageBucket: "portfolio-8fb52.appspot.com",
     messagingSenderId: "900785899474",
     appId: "1:900785899474:web:5d26d876b93a86a9d82a0b"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);
console.log(db);

const ContactSection1 = () => {
     const [inputValue, setInputValue] = useState({
          name : null,
          number : null,
          memo : null
     });
     const onChangeValue = (e) => {
          const {id, value} = e.target
          //상태 STATE <- 얘가 전부..
          //useState, useEffect ....
          
          switch(id){
               case 'name' :
                    setInputValue((prevParam) => ({...prevParam, name : value}));
               break;
               case 'number' :
                    setInputValue((prevParam) => ({...prevParam, number : value}));
               break;
               case 'memo' :
                    setInputValue((prevParam) => ({...prevParam, memo : value}));
               break;
          }
     }

     useEffect(()=> {
          console.log(inputValue);
     },[inputValue])
     const handleSubmit = async (event) => {
          event.preventdefault()

    // 양식 데이터에 접근
    // Firebase Realtime Database에 데이터 저장
     try {
          const contactsRef = ref(db, 'contacts');
          await push(contactsRef, {onChangeValue
               // name,
               // number,
               // memo,
          });
          console.log('양식 데이터가 성공적으로 저장되었습니다!');
     } catch (error) {
          console.error('양식 데이터 저장 오류:', error);
     }


    // 양식 초기화
};

return (
     <div className='ContactSection1 nextSection' id='nextSection'>
          <div className='center'>
               <div className='left'>
                    <h3>CONTACT US</h3>
                    <form onSubmit={handleSubmit}>
                    {/* 양식 입력 요소 */}
                    <div className='flex'>
                         <input type='text' placeholder='이름을 써주세요' id='name' className='name' onChange={onChangeValue} />
                         <input type='text' placeholder='연락처' id='number' className='number' onChange={onChangeValue} />
                    </div>
                    <textarea type='text' placeholder='문의 사항을 남겨주세요' id='memo' className='memo' onChange={onChangeValue} />
                    <button type='submit'>
                         문의하기 <span>File Base Go!</span>
                    </button>
                    </form>
               </div>
               <div className='right'>
                    <h3>연락을 기다리겠습니다.</h3>
               </div>
          </div>
          <img className='ContactSection1Bg' src='/img/bg01.webp' alt='붓배경' />
     </div>
);
};

export default ContactSection1;

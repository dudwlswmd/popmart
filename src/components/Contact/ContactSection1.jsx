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
          name: '',
          number: '',
          memo: '',
     });

     const onChangeValue = (e) => {
          const { id, value } = e.target;
          
          setInputValue((prevInputValue) => ({
               ...prevInputValue,
               [id]: value,
          }));
     };

     useEffect(() => {
          console.log(inputValue);
     }, [inputValue]);

     const handleSubmit = async (event) => {
          event.preventDefault();

          const { name, number, memo } = inputValue;

          if (!name) {
               alert('이름을 입력해주세요!');
               return;
          }
          
          if (!number) {
               alert('연락처를 입력해주세요!');
               return;
          }
          
          if (!memo) {
               alert('문의 사항을 입력해주세요!');
               return;
          }
          // Firebase Realtime Database에 데이터 저장
          try {
               const contactsRef = ref(db, 'contacts');
               await push(contactsRef, {
                    name,
                    number,
                    memo,
               });
               alert('데이터가 성공적으로 저장되었습니다! 빠른시일내 연락 드리겠습니다.');
               // 양식 초기화
               setInputValue({
                    name: '',
                    number: '',
                    memo: '',
               });
               
          } catch (error) {
               alert('데이터 저장에 실패했습니다.')
          }


     };

return (
     <div className='ContactSection1 nextSection' id='nextSection'>
          <div className='center'>
               <div className='left'>
                    <h3>CONTACT US</h3>
                    <form onSubmit={handleSubmit}>
                    {/* 양식 입력 요소 */}
                    <div className='flex'>
                         <input type='text' placeholder='이름을 써주세요' id='name' className='name' onChange={onChangeValue} value={inputValue.name}/>
                         <input type='number' placeholder='연락처' id='number' className='number' onChange={onChangeValue} value={inputValue.number}/>
                    </div>
                    <textarea type='text' placeholder='문의 사항을 남겨주세요' id='memo' className='memo' onChange={onChangeValue} value={inputValue.memo}/>
                    <button type='submit'>
                         문의하기 <span>File Base Go!</span>
                    </button>
                    </form>
               </div>
               <div className='right'>
                    <div>
                         <h3>
                              <span>&lt;h1&gt;</span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;쓸모 있는 코드를 제공 합니다.
                              <span>&lt;/h1&gt;</span>
                         </h3>
                         <p>
                              <span>&lt;div&gt;기본에 충실하고 본질에서 벗어나지 않는 단순하고 명쾌함을 지향합니다.&lt;/div&gt;</span>
                              <span>&lt;div&gt;새로운 기술을 항상 공부하며 유용하게 활용해 성장함을 지향합니다.&lt;/div&gt; </span>
                              <span>&lt;div&gt;문서화를 철저히 하여 코드의 가독성과 유지보수성을 높입니다.&lt;/div&gt; </span>
                              <span>&lt;div&gt;코드 품질을 유지하기 위해 귀사의 코드 스타일 가이드를 준수합니다.&lt;/div&gt; </span>
                         </p>
                    </div>
               </div>
          </div>
          <img className='ContactSection1Bg' src='/img/bg01B.webp' alt='붓배경' />
     </div>
);
};

export default ContactSection1;

import React from 'react';
import Typewriter from 'typewriter-effect';


const TypewriterApi = () => {
     return (
          <>
               <Typewriter
                    options={{
                    strings: ['안녕하세요!!', '송영진 입니다!'],
                    autoStart: true,
                    loop: true,
                    }}
               />
          </>
     )
}

export default TypewriterApi
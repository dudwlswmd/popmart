


            // 이메일 확인
            const emailValue = document.querySelector('.emailValue'); // 이메일 입력 필드 요소 선택
            const emailError = document.querySelector('.emailError'); // 이메일 에러 메시지 요소 선택

            emailValue.addEventListener('input', function() {
                const email = emailValue.value; // 입력된 이메일 값 가져오기
                const filteredEmail = email.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''); // 한글 제거한 이메일 값 생성

                if (email !== filteredEmail) { // 한글이 포함된 경우
                    emailValue.value = filteredEmail; // 입력 필드에 한글을 제외한 값 설정
                    emailError.textContent = '이메일에는 한글을 포함할 수 없습니다.'; // 한글 포함 에러 메시지 설정
                    emailError.style.display = 'block'; // 에러 메시지 표시
                    disableNameInput();
                } else { // 한글이 포함되지 않은 경우
                    emailError.textContent = ''; // 에러 메시지 초기화
                    emailError.style.display = 'none'; // 에러 메시지 숨김
                    enableNameInput();
                }
            });

            emailValue.addEventListener('blur', function() {
                const email = emailValue.value; // 입력된 이메일 값 가져오기
                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 유효성 검사용 정규표현식 패턴

                if (!emailRegex.test(email)) { // 이메일 유효성 검사 실패한 경우
                    emailError.textContent = '유효한 이메일 주소를 입력해 주세요. (예:dignsa@gmail.com)'; // 유효성 에러 메시지 설정
                    emailError.style.display = 'block'; // 에러 메시지 표시
                    disableNameInput();
                } else { // 이메일 유효성 검사 통과한 경우
                    emailError.textContent = ''; // 에러 메시지 초기화
                    emailError.style.display = 'none'; // 에러 메시지 숨김
                    enableNameInput();
                }
            });

            //이름 확인

            const nameValue = document.querySelector('.nameValue');
            const nameError = document.querySelector('.nameError');

            nameValue.addEventListener('input', function() {
                const name = nameValue.value;
                const filteredName = name.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣]/g, ''); // 한글을 제외한 문자 제거

                if (name !== filteredName) { // 한글이 포함된 경우
                    nameValue.value = filteredName; // 입력 필드에 한글을 제외한 값 설정
                    nameError.textContent = '이름은 한글만 입력할 수 있습니다.'; // 한글 입력 에러 메시지 설정
                    nameError.style.display = 'block'; // 에러 메시지 표시
                } else if (name.length <= 1) { // 이름이 2글자 이하인 경우
                    nameError.textContent = '이름은 2글자 이상으로 입력해주세요.'; // 글자 수 에러 메시지 설정
                    nameError.style.display = 'block'; // 에러 메시지 표시
                } else { // 유효성 검사 통과한 경우
                    nameError.textContent = ''; // 에러 메시지 초기화
                    nameError.style.display = 'none'; // 에러 메시지 숨김
                }
            });

            //닉네임 확인

            const nickValue = document.querySelector('.nickValue');
            const nickError = document.querySelector('.nickError');

            nickValue.addEventListener('input', function() {
                const nick = nickValue.value;

                if (nick.length <= 1) { // 이름이 2글자 이하인 경우
                    nickError.textContent = '닉네임은 2글자 이상으로 입력해주세요.'; // 글자 수 에러 메시지 설정
                    nickError.style.display = 'block'; // 에러 메시지 표시
                } else if (nick.length > 8) { // 닉네임이 8글자 초과인 경우
                    nickValue.value = nick.slice(0, 8); // 8글자까지만 입력 가능하도록 잘라내기
                    nickError.textContent = '닉네임은 8글자 이하여야 합니다.'; // 글자 수 에러 메시지 설정
                    nickError.style.display = 'block'; // 에러 메시지 표시
                } else { // 유효성 검사 통과한 경우
                    nickError.textContent = ''; // 에러 메시지 초기화
                    nickError.style.display = 'none'; // 에러 메시지 숨김
                }
            });

            //비밀번호

            const passwordValue = document.querySelector('.passwordValue');
            const passwordError = document.querySelector('.passwordError');
            const passwordCheckValue = document.querySelector('.passwordCheckValue');
            const passwordCheckError = document.querySelector('.passwordCheckError');

            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

            passwordValue.addEventListener('input', function() {
            const password = passwordValue.value;

                if (!passwordRegex.test(password)) {
                    passwordError.textContent = '비밀번호는 영문자와 숫자를 포함하여 8자 이상이어야 합니다.';
                    passwordError.style.display = 'block';
                } else {
                    passwordError.textContent = '';
                    passwordError.style.display = 'none';
                }
            });

            passwordCheckValue.addEventListener('input', function() {
                const password = passwordValue.value;
                const passwordCheck = passwordCheckValue.value;

                if (password !== passwordCheck) {
                    passwordCheckError.textContent = '비밀번호가 일치하지 않습니다.';
                    passwordCheckError.style.display = 'block';
                } else {
                    passwordCheckError.textContent = '';
                    passwordCheckError.style.display = 'none';
                }
            });

            const signUpButton = document.getElementById('signUpButton');

            signUpButton.addEventListener('click', function() {
                const email = emailValue.value;
                const name = nameValue.value;
                const nick = nickValue.value;
                const password = passwordValue.value;
                const passwordCheck = passwordCheckValue.value;
            
                // 입력 검증
                if (
                    email === '' ||
                    name === '' ||
                    nick === '' ||
                    password === '' ||
                    passwordCheck === '' ||
                    emailError.style.display === 'block' ||
                    nameError.style.display === 'block' ||
                    nickError.style.display === 'block' ||
                    passwordError.style.display === 'block' ||
                    passwordCheckError.style.display === 'block'
                ) {
                    if (email === '') {
                        emailError.textContent = '이메일을 입력해 주세요.'; // 이메일 입력 에러 메시지 설정
                        emailError.style.display = 'block'; // 에러 메시지 표시
                    }
                    if (name === '') {
                        nameError.textContent = '이름을 입력해 주세요.'; // 이름 입력 에러 메시지 설정
                        nameError.style.display = 'block'; // 에러 메시지 표시
                    }
                    if (password === '') {
                        passwordError.textContent = '비밀번호를 입력해 주세요.'; // 이름 입력 에러 메시지 설정
                        passwordError.style.display = 'block'; // 에러 메시지 표시
                    }
                    alert('입력값을 확인해 주세요.');
                } else {
                    // 회원 정보 배열 생성
                    let usersArray = [];
            
                    // 기존에 저장된 회원 정보 가져오기
                    const storedUsers = localStorage.getItem('회원정보');
                    if (storedUsers) {
                        usersArray = JSON.parse(storedUsers);
                    }
            
                    // 새로운 회원 정보 추가
                    const userInfo = {
                        이메일_email: email,
                        이름_name: name,
                        닉네임_nick: nick,
                        비밀번호_password: password
                    };
                    usersArray.push(userInfo);
            
                    // 로컬 스토리지에 회원 정보 저장
                    localStorage.setItem('회원정보', JSON.stringify(usersArray));
            
                    // 성공적으로 가입되었다면 다음 페이지로 이동하도록 코드를 작성해야 합니다.
                    window.location.href = '../index.html';
                }
            });
            



            // 이름 입력 필드 비활성화 함수
            function disableNameInput() {
                nameValue.disabled = true;
                nameValue.style.backgroundColor = '#333333';
                nickValue.disabled = true;
                nickValue.style.backgroundColor = '#333333';
            }
            disableNameInput();
                // 이름 입력 필드 활성화 함수
                function enableNameInput() {
                nameValue.disabled = false;
                nameValue.style.backgroundColor = '#111';
                nickValue.disabled = false;
                nickValue.style.backgroundColor = '#111';
            }

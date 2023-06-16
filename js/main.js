function getRandomChoiceByKeyword(keyword) {
    let keywords = keyword.split(",");
    let randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];

      switch (randomKeyword) {
        case "귀여움":
          let cuteOptions = [
            { id:1, image: "img/cute01.jpg", info: "귀여운 POP 스타일" },
            { id:1, image: "img/cute02.jpg", info: "귀여운 POP 스타일" },
          ];
         return cuteOptions[Math.floor(Math.random() * cuteOptions.length)];
        case "액션":
          let coolOptions = [
            { id:2, image: "img/pop01.jpg", info: "액션 POP 스타일" },
            { id:2, image: "img/pop02.jpg", info: "액션 POP 스타일" },
          ];
         return coolOptions[Math.floor(Math.random() * coolOptions.length)];
        case "판타지":
          let fantasyOptions = [
            { id:3, image: "img/fantasy01.jpg", info: "판타지 POP 스타일" },
            { id:3, image: "img/fantasy02.jpg", info: "판타지 POP 스타일" },
          ];
         return fantasyOptions[Math.floor(Math.random() * fantasyOptions.length)];
          case "환상":
          let hwansangOptions = [
            { id:4, image: "img/fantasy03.jpg", info: "애니 POP 스타일" },
            { id:4, image: "img/fantasy04.jpg", info: "애니 POP 스타일" },
          ];
         return hwansangOptions[Math.floor(Math.random() * hwansangOptions.length)];




          case "귀여움2":
          let cuteOptions2 = [
            { id:1, image: "img/cute01.jpg", info: "귀여운 POP 스타일" },
            { id:1, image: "img/cute02.jpg", info: "귀여운 POP 스타일" },
          ];
         return cuteOptions2[Math.floor(Math.random() * cuteOptions2.length)];
        case "액션2":
          let coolOptions2 = [
            { id:2, image: "img/pop01.jpg", info: "액션 POP 스타일" },
            { id:2, image: "img/pop02.jpg", info: "액션 POP 스타일" },
          ];
         return coolOptions2[Math.floor(Math.random() * coolOptions2.length)];
        case "판타지2":
          let fantasyOptions2 = [
            { id:3, image: "img/fantasy01.jpg", info: "판타지 POP 스타일" },
            { id:3, image: "img/fantasy02.jpg", info: "판타지 POP 스타일" },
          ];
         return fantasyOptions2[Math.floor(Math.random() * fantasyOptions2.length)];
          case "환상2":
          let hwansangOptions2 = [
            { id:4, image: "img/fantasy05.jpg", info: "애니 POP 스타일" },
            { id:4, image: "img/fantasy06.jpg", info: "애니 POP 스타일" },
          ];
         return hwansangOptions2[Math.floor(Math.random() * hwansangOptions2.length)];



          case "귀여움3":
          let cuteOptions3 = [
            { id:1, image: "img/cute01.jpg", info: "귀여운 POP 스타일" },
            { id:1, image: "img/cute02.jpg", info: "귀여운 POP 스타일" },
          ];
         return cuteOptions3[Math.floor(Math.random() * cuteOptions3.length)];
        case "액션3":
          let coolOptions3 = [
            { id:3, image: "img/pop01.jpg", info: "액션 POP 스타일" },
            { id:3, image: "img/pop02.jpg", info: "액션 POP 스타일" },
          ];
         return coolOptions3[Math.floor(Math.random() * coolOptions3.length)];
        case "판타지3":
          let fantasyOptions3 = [
            { id:3, image: "img/fantasy03.jpg", info: "판타지 POP 스타일" },
            { id:3, image: "img/fantasy04.jpg", info: "판타지 POP 스타일" },
          ];
         return fantasyOptions3[Math.floor(Math.random() * fantasyOptions3.length)];
          case "환상3":
          let hwansangOptions3 = [
            { id:4, image: "img/fantasy01.jpg", info: "애니 POP 스타일" },
            { id:4, image: "img/fantasy02.jpg", info: "애니 POP 스타일" },
          ];
         return hwansangOptions3[Math.floor(Math.random() * hwansangOptions3.length)];



          case "귀여움4":
          let cuteOptions4 = [
            { id:1, image: "img/cute03.jpg", info: "귀여운 POP 스타일" },
            { id:1, image: "img/cute04.jpg", info: "귀여운 POP 스타일" },
          ];
         return cuteOptions4[Math.floor(Math.random() * cuteOptions4.length)];
        case "액션4":
          let coolOptions4 = [
            { id:2, image: "img/pop04.jpg", info: "액션 POP 스타일" },
            { id:2, image: "img/pop03.jpg", info: "액션 POP 스타일" },
          ];
         return coolOptions4[Math.floor(Math.random() * coolOptions3.length)];
        case "판타지4":
          let fantasyOptions4 = [
            { id:3, image: "img/fantasy03.jpg", info: "판타지 POP 스타일" },
            { id:3, image: "img/fantasy04.jpg", info: "판타지 POP 스타일" },
          ];
         return fantasyOptions4[Math.floor(Math.random() * fantasyOptions4.length)];
          case "환상4":
          let hwansangOptions4 = [
              { id:4, image: "img/fantasy01.jpg", info: "애니 POP 스타일" },
              { id:4, image: "img/fantasy02.jpg", info: "애니 POP 스타일" },
          ];
         return hwansangOptions4[Math.floor(Math.random() * hwansangOptions4.length)];






        default:
          return null;
      }
    }//getRandomChoiceByKeyword

      document.addEventListener("DOMContentLoaded", function() {
              const buttons = document.querySelectorAll(".keyword-btn");
              const resetButton = document.querySelector(".reset-btn");
              const resultButton = document.querySelector(".result-btn");
              const selectedKeywords = new Set();

              function displayRandomImage(event) {
                const keyword = event.target.dataset.keyword;

                if (selectedKeywords.has(keyword)) {
                  selectedKeywords.delete(keyword);
                  event.target.classList.remove("active");
                } else {
                  selectedKeywords.add(keyword);
                  event.target.classList.add("active");
                }
              }
              let styleTxt = document.querySelector('.style_txt')

              function resetFilters() {//리셋버튼효과
                selectedKeywords.clear(); // 선택된 키워드 목록 초기화
                document.querySelector('.home').classList.remove('on');
                styleTxt.innerHTML=`가장 마음에 드는 <br />스타일을 선택해 주세요`


                const activeButtons = document.querySelectorAll(".keyword-btn.active");
                activeButtons.forEach(function(button) {
                  button.classList.remove("active"); // 활성화된 버튼 클래스 제거
                });

                  localStorage.removeItem("selectedKeywords"); // 로컬 스토리지에서 선택된 키워드 제거
                  localStorage.removeItem("selectedImage"); // 로컬 스토리지에서 선택된 이미지 제거

                  const imageContainer = document.querySelector(".image-container");
                  imageContainer.style.transition = "opacity 0.5s"; // 페이드 아웃 트랜지션 적용
                  imageContainer.style.opacity = "0"; // 이미지 컨테이너 투명도를 0으로 설정

                // 애니메이션 종료 후 이미지 컨테이너 제거
                setTimeout(function() {
                  imageContainer.style.display = "none"; // 이미지 컨테이너 숨김

                  const image = document.getElementById("image");
                  image.src = "img/default.jpg"; // 디폴트 이미지로 설정
                  image.alt = "이미지";
                  document.getElementById("info").textContent = "";

                  // 페이드 인 효과 적용
                  image.style.transition = "opacity 0.5s"; // 페이드 인 트랜지션 적용
                  setTimeout(function() {
                    image.style.opacity = "1"; // 이미지 투명도를 1로 설정
                  }, 100); // 0.1초 후에 이미지 페이드 인 효과 적용
                }, 500); // 0.5초 후에 이미지 컨테이너 제거

              }





             // HTML 코드에서 각 버튼에 이벤트 리스너 추가
             const keywordButtons = document.getElementsByClassName("keyword-btn");
             for (let i = 0; i < keywordButtons.length; i++) {
               keywordButtons[i].addEventListener("click", function() {
                 const keyword = keywordButtons[i].textContent;
                 selectedKeywords.add(keyword);
                 showRandomImage();
               });
             }









         // 클릭한 이미지들을 저장할 배열 생성
         const clickedImages = [];

         // showRandomImage() 함수 수정
         function showRandomImage() {
           if (selectedKeywords.size === 0) {
             alert("필터를 선택해 주세요.");
             console.log("No keywords selected.");
             return;
           }

           const keywordArray = Array.from(selectedKeywords);
           const randomChoice = getRandomChoiceByKeyword(keywordArray.join(","));

           if (randomChoice) {
             const image = document.getElementById("image");
             image.style.animation = "none"; // 기존 애니메이션 초기화
             void image.offsetWidth; // 리플로우 강제 발생

             image.src = randomChoice.image;
             image.alt = "이미지";
             document.getElementById("info").textContent = randomChoice.info;

             image.style.animation = "zoomAndFallEffect 2s cubic-bezier(0.86, 0, 0.07, 1)";

             // 선택한 이미지 정보를 로컬스토리지에 저장
             localStorage.setItem("selectedImage", JSON.stringify(randomChoice));

             // 클릭한 이미지를 배열에 추가
             clickedImages.push(randomChoice);

             // 배열을 로컬스토리지에 저장
             localStorage.setItem("clickedImages", JSON.stringify(clickedImages));
           }
         }
























        buttons.forEach(function(button) {
          button.addEventListener("click", displayRandomImage);
        });

        resetButton.addEventListener("click", resetFilters);

        resultButton.addEventListener("click", function() {
          showRandomImage();
        });

        const storedKeywords = JSON.parse(localStorage.getItem("selectedKeywords"));
        if (storedKeywords && storedKeywords.length > 0) {
          storedKeywords.forEach(function(keyword) {
            selectedKeywords.add(keyword);
            const button = document.querySelector(`[data-keyword="${keyword}"]`);
            if (button) {
              button.classList.add("active");
            }
          });
        }

        const storedImage = JSON.parse(localStorage.getItem("selectedImage"));
        if (storedImage) {
            document.getElementById("image").src = storedImage.image;
            document.getElementById("info").textContent = storedImage.info;
        }

  });











document.addEventListener("DOMContentLoaded", function() {
  const buttonGroups = document.querySelectorAll(".btn-group");
  const transitionDuration = 400;
  const transitionDuration2 = 800;
  const fadeDelay = 200;
  let currentGroupIndex = 0; // 현재 그룹의 인덱스
  const resetButton = document.querySelector(".reset-btn");
  const resultBtns = document.querySelector(".resultBtns");
  const imageContainer = document.querySelector(".image-container");
  const btns = document.querySelector(".btns");
  const spanElements = document.querySelectorAll(".bar span");

  imageContainer.style.display = "none";

  function showNextGroup() {
      const currentGroup = buttonGroups[currentGroupIndex];
      const nextIndex = (currentGroupIndex + 1) % buttonGroups.length;
      const nextGroup = buttonGroups[nextIndex];

      currentGroup.style.transition = `opacity ${transitionDuration}ms`;
      currentGroup.style.opacity = 0;

      setTimeout(function() {
        currentGroup.style.display = "none";
        currentGroup.classList.remove("active");
        nextGroup.style.transition = `opacity ${transitionDuration}ms`;
        nextGroup.style.opacity = 0;
        nextGroup.style.display = "block";

        setTimeout(function() {
          nextGroup.style.opacity = 1;
        }, fadeDelay);

        nextGroup.classList.add("active");

        currentGroupIndex = nextIndex; // 다음 그룹으로 인덱스 업데이트
      }, transitionDuration);
  }

 // 필터 초기화 버튼 클릭 시 첫 번째 그룹으로 초기화
  resetButton.addEventListener("click", function() {
    currentGroupIndex = 0; // 첫 번째 그룹으로 인덱스 초기화
    buttonGroups.forEach(function(group, index) {
      if (index === 0) {
        group.style.display = "block";
        group.style.opacity = 1;
        group.classList.add("active");
      } else {
        group.style.opacity = 0;
        group.style.display = "none";
        group.classList.remove("active");
      }
    });

    resetButton.style.display = "none"; // 필터 초기화 버튼 숨기기
    resultBtns.style.display = "none"; // 결과 보기 버튼 숨기기
    removeOnClass();
  });





// 이전에 클릭한 버튼을 추적하는 변수 추가
let previousButton = null;
let styleTxt = document.querySelector('.style_txt')
  buttonGroups.forEach(function(group, index) {
    const buttons = group.querySelectorAll(".keyword-btn");

    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        // 현재 클릭한 버튼과 이전에 클릭한 버튼이 동일한 경우, 함수 종료
        if (button === previousButton) {
          return;
        }
      // 이전에 클릭한 버튼을 현재 클릭한 버튼으로 업데이트
        previousButton = button;
        const currentGroup = button.closest(".btn-group");

        buttons.forEach(function(btn) {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        if (index === 3) {
          currentGroup.style.transition = `opacity ${transitionDuration}ms`;
          currentGroup.style.opacity = 0;
          currentGroup.style.display = "none"; // btn-group 숨기기
          resetButton.style.display = "block"; // 필터 초기화 버튼 표시
          styleTxt.innerHTML='내 스타일 취향은?'
          
          document.querySelector('.home').classList.add('on');
          setTimeout(function() {
            resultBtns.style.transition = `opacity ${transitionDuration2}ms`;
            resultBtns.style.opacity = 0;
            resultBtns.style.display = "block";//취향다시버튼

            imageContainer.style.transition = `opacity ${transitionDuration2}ms`;
            imageContainer.style.opacity = 0;
            imageContainer.style.display = "block";

            setTimeout(function() {
              resultBtns.style.opacity = 1;
              imageContainer.style.opacity = 1;
            }, fadeDelay);
          }, 1000);

          buttonGroups.forEach(function(group, idx) {
            if (idx !== currentGroupIndex) {
              group.style.transition = `opacity ${transitionDuration}ms`;
              group.style.opacity = 0;
              group.style.display = "none";
            }
          });

          // 4번째 그룹에 대한 처리
          setTimeout(function() {
            addOnClass(index + 1); // 클릭한 그룹의 인덱스 + 1을 전달하여 on 클래스 추가
          }, 500);
        } else {
          setTimeout(function() {
            showNextGroup();
          }, 500);
          resetButton.style.display = "none"; // 필터 초기화 버튼 숨기기
          resultBtns.style.display = "none"; // 결과 보기 버튼 숨기기
          imageContainer.style.display = "none"; // 이미지 컨테이너 숨기기
          addOnClass(index + 1); // 클릭한 그룹의 인덱스 + 1을 전달하여 on 클래스 추가
        }
      });
    });
  });








      function addOnClass(index) {
          spanElements.forEach(function(span, idx) {
          if (idx < index) {

                span.classList.add("on");
          }
          });
      }



      function removeOnClass() {
            spanElements.forEach(function(span) {
                span.classList.remove("on");
            });
      }
});





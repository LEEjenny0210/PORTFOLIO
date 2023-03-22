$(document).ready(function () {

    const title = document.querySelector(".d-day");

    const getDDay = () => {
        // D-Day 날짜 지정
        const setDate = new Date("2023-05-20T00:00:00+0900");

        // 현재 날짜를 new 연산자를 사용해서 Date 객체를 생성
        const now = new Date();

        // D-Day 날짜에서 현재 날짜의 차이를 getTime 메서드를 사용해서 밀리초의 값으로 가져온다. 
        const distance = setDate.getTime() - now.getTime();

        // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
        // 밀리초 값이기 때문에 1000을 곱한다. 
        // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
        // 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
        const day = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;

        // D-Day 날짜를 가져오고,
        // 삼항 연산자를 사용해서 값이 10보다 작을 경우에 대해 조건부 렌더링을 해준다.
        title.innerText = `${day}일 `;
    }


    const init = () => {
        // init 함수 생성해서 getDDay함수 호출하고,
        getDDay();
        // setInterval 메서드에서 getDDay함수를 1초(1000밀리초)마다 호출한다.
        setInterval(getDDay, 1000);
    }

    init();

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = {
            center: new kakao.maps.LatLng(36.3025900589377, 127.3470985352889), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition = new kakao.maps.LatLng(36.3025900589377, 127.3470985352889);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null);    

})
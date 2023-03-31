$(document).ready(function () {

    AOS.init({
        once: true
    });

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
        loop: true,
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

    let a = 0
    $(".bank_num.groom div").click(function () {
        $(".detail_num").eq(0).slideToggle();
        if (a == 0) {
            $(".bank_num.groom .arrow").css("rotate", "-180deg")
            a = 1;
        } else if (a == 1) {
            $(".bank_num.groom .arrow").css("rotate", "0deg")
            a = 0;
        }
    });

    let b = 0
    $(".bank_num.bride div").click(function () {
        $(".detail_num").eq(1).slideToggle();
        if (b == 0) {
            $(".bank_num.bride i").css("rotate", "-180deg")
            b = 1;
        } else if (b == 1) {
            $(".bank_num.bride i").css("rotate", "0deg")
            b = 0;
        }
    });

    function copyClip(url) {
        var $temp = $('<input>');
        $('body').append($temp);
        $temp.val(url).select();
        document.execCommand('copy');
        $temp.remove();
        alert('URL이 복사되었습니다.');
    }
    $('.link_copy').on('click', function (e) {
        e.preventDefault();
        var link = location.href;
        copyClip(link);
    });


    const myDiv01 = document.getElementById("num01");

    // button 클릭 이벤트
    document.getElementById("copy01").onclick = () => {
        // div의 내용(textContent)을 복사한다.
        window.navigator.clipboard.writeText(myDiv01.textContent).then(() => {
            // 복사가 완료되면 호출된다.
            alert("복사완료");
        });
    };

    const myDiv02 = document.getElementById("num02");

    // button 클릭 이벤트
    document.getElementById("copy02").onclick = () => {
        // div의 내용(textContent)을 복사한다.
        window.navigator.clipboard.writeText(myDiv02.textContent).then(() => {
            // 복사가 완료되면 호출된다.
            alert("복사완료");
        });
    };

    const myDiv03 = document.getElementById("num03");

    // button 클릭 이벤트
    document.getElementById("copy03").onclick = () => {
        // div의 내용(textContent)을 복사한다.
        window.navigator.clipboard.writeText(myDiv03.textContent).then(() => {
            // 복사가 완료되면 호출된다.
            alert("복사완료");
        });
    };

    const myDiv04 = document.getElementById("num04");

    // button 클릭 이벤트
    document.getElementById("copy04").onclick = () => {
        // div의 내용(textContent)을 복사한다.
        window.navigator.clipboard.writeText(myDiv04.textContent).then(() => {
            // 복사가 완료되면 호출된다.
            alert("복사완료");
        });
    };

    Kakao.init("848d866b74fd9ea1ab8405d1b24d056e");

    Kakao.Link.createScrapButton({
        container: '#kakao-link-btn',
        requestUrl: 'http://127.0.0.1:5500/index.html#',
        templateId: 91974
    });


    (function ($) {
        // requestAnimationFrame Polyfill
        (function () {
            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];

            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        },
                        timeToCall);
                    lastTime = currTime + timeToCall;

                    return id;
                };

            if (!window.cancelAnimationFrame)
                window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
        }());

        // Sakura function.
        $.fn.sakura = function (options) {
            // We rely on these random values a lot, so define a helper function for it.
            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            // Helper function to attach cross-browser events to an element.
            var prefixes = ['moz', 'ms', 'o', 'webkit', ''];
            var prefCount = prefixes.length;

            function prefixedEvent(element, type, callback) {
                for (var i = 0; i < prefCount; i++) {
                    if (!prefixes[i]) {
                        type = type.toLowerCase();
                    }

                    element.get(0).addEventListener(prefixes[i] + type, callback, false);
                }
            }

            // Defaults for the option object, which gets extended below.
            var defaults = {
                blowAnimations: ['blow-soft-left', 'blow-medium-left', 'blow-hard-left', 'blow-soft-right', 'blow-medium-right', 'blow-hard-right'],
                className: 'sakura',
                fallSpeed: .2,
                maxSize: 14,
                minSize: 9,
                newOn: 300,
                swayAnimations: ['sway-0', 'sway-1', 'sway-2', 'sway-3', 'sway-4', 'sway-5', 'sway-6', 'sway-7', 'sway-8']
            };

            var options = $.extend({}, defaults, options);

            // Declarations.
            var documentHeight = $(document).height();
            var documentWidth = $(document).width();
            var sakura = $('<div class="' + options.className + '" />');

            // Set the overflow-x CSS property on the body to prevent horizontal scrollbars.
            $('.main_img').css({
                'overflow-x': 'hidden',
                'z-index': '999'
            });

            // Function that inserts new petals into the document.
            var petalCreator = function () {
                setTimeout(function () {
                    requestAnimationFrame(petalCreator);
                }, options.newOn);

                // Get one random animation of each type and randomize fall time of the petals.
                var blowAnimation = options.blowAnimations[Math.floor(Math.random() * options.blowAnimations.length)];
                var swayAnimation = options.swayAnimations[Math.floor(Math.random() * options.swayAnimations.length)];
                var fallTime = (Math.round(documentHeight * 0.007) + Math.random() * 5) * options.fallSpeed;

                var animations = 'fall ' + fallTime + 's linear 0s 1' + ', ' +
                    blowAnimation + ' ' + (((fallTime > 30 ? fallTime : 30) - 20) + getRandomInt(0, 20)) + 's linear 0s infinite' + ', ' +
                    swayAnimation + ' ' + getRandomInt(2, 4) + 's linear 0s infinite';
                var petal = sakura.clone();
                var size = getRandomInt(options.minSize, options.maxSize);
                var startPosLeft = Math.random() * documentWidth - 100;
                var startPosTop = -((Math.random() * 20) + 15);

                // Apply Event Listener to remove petals that reach the bottom of the page.
                prefixedEvent(petal, 'AnimationEnd', function () {
                    $(this).remove();
                });

                // Apply Event Listener to remove petals that finish their horizontal float animation.
                prefixedEvent(petal, 'AnimationIteration', function (ev) {
                    if ($.inArray(ev.animationName, options.blowAnimations) != -1) {
                        $(this).remove();
                    }
                });

                petal
                    .css({
                        '-webkit-animation': animations,
                        '-o-animation': animations,
                        '-ms-animation': animations,
                        '-moz-animation': animations,
                        animation: animations,
                        height: size,
                        left: startPosLeft,
                        'margin-top': startPosTop,
                        width: size
                    })
                    .appendTo('.main_img');
            };


            // Recalculate documentHeight and documentWidth on browser resize.
            $(window).resize(function () {
                documentHeight = $(document).height();
                documentWidth = $(document).width();
            });

            // Finally: Start adding petals.
            requestAnimationFrame(petalCreator);
        };
    }(jQuery));

    $(window).on('load', function () {
        $('body').sakura();
    });
});
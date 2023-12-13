function minus() {
    let countElement = document.getElementById('count');
    let currentCount = parseInt(countElement.value);

    if (currentCount <= 1) {
        alert("1개 이상 구매 가능합니다.");
    } else {
        currentCount--;
        countElement.value = currentCount;
        total(); // count가 변경될 때마다 total 함수 호출
    }
}

function plus() {
    let countElement = document.getElementById('count');
    let currentCount = parseInt(countElement.value);

    currentCount++;
    countElement.value = currentCount;
    total(); // count가 변경될 때마다 total 함수 호출
}

function total() {
    let count = parseInt(document.getElementById('count').value);
    let total_price = (count * 13800).toLocaleString('ko-KR');

    let best_item = `<div class="total_txt1">TOTAL</div>
                    <div class="total_count">(${count}개)</div>
                    <div class="total_price">${total_price}원</div>`;

    // 기존에 추가된 요소가 있다면 삭제
    $('.total_box').empty();

    $(best_item).appendTo('.total_box');
    console.log(count)
}

total(); // 초기화 시 한 번 호출


$(document).ready(function() {
                
// nav바 헤더 고정
    let nav_o_top = $('.nav').offset().top;
    let nav_h = $('.nav').height();  
        
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();

        // 스크롤이 nav 원래위치보다 클래(아래 있을때) - 끌고 다니기
        if(s_top >= nav_o_top) {
            $('.nav').addClass('nav_active');
            $('.container').addClass('main_active');
        }
        else {
            $('.nav').removeClass('nav_active');
            $('.container').removeClass('main_active');
        }

    });

    $(".top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });


    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 칸 수
        spaceBetween: 30,
        // freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
         // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1000, // 몇초마다 슬라이드 이동할지
        },
        speed: 500, // 몇초만에 left 0 으로 도착할지
        loop: true,
        direction: 'horizontal', //horizontal,vertical 배치 방향
        effect: 'slide' // 'slide', 'fade', 'cube', 'coverflow', 'flip' or 'creative'
    });


    $('#new_arr').hover(function(){
        swiper.autoplay.stop();
    }, function(){
        swiper.autoplay.start()
    })

    $('.txt_box a').click(function() {

        event.preventDefault();

        let href = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000)    
    })

    
    
})
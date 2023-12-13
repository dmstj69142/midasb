function new_load_data() {
    for(let i=0; i<8; i++) {

        let best_item = `<div class="new_content">
                        <a href="./portfolio_order.html">
                            <div class="new_content_img">
                                <img src="./img/new_content${i+1}.png" alt="" class="new1">
                                <img src="./img/new_content${i+1}_2.png" alt="" class="new2">
                            </div>
                            <div class="new_txt_box">
                                <div class="new_txt1">모먼트 베이직 슬림 무지 티셔츠</div>
                                <div class="new_price_box">
                                    <div class="new_final_price">13,800원</div>
                                    <div class="new_price">23,000원</div>
                                    <div class="new_sale_p">40%</div>
                                </div>
                            </div>
                        </a>
                    </div>`
        $(best_item).appendTo('.content_box2')
    }
}
new_load_data();

$(document).ready(function() {
    document.querySelector(".close").addEventListener("click", function () {
        this.closest(".popup").style.display = "none";
    });

            
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
    


// 메인베너 마우스 위치 
    $(window).mousemove(function(){
        let main_b_o_top = $('.main_banner_box').offset().top;
        let main_b_o_left = $('.main_banner_box').offset().left;
        let w_half = ($('.main_banner_box').width() / 2);
        let box_pox = event.pageX - ($('.box').outerWidth() / 2) - main_b_o_left;
        $('.box').css({
            left: event.pageX - ($('.box').outerWidth() / 2) - main_b_o_left,
            top: event.pageY - ($('.box').outerHeight() / 2 ) - main_b_o_top
        })
        
        if (box_pox > w_half) {
            $('.box').css({
                opacity: 0.8
            })
            $('.btn_slide_L').css({
                opacity: 0,
                zIndex: -999
            })
            $('.btn_slide_R').css({
                opacity: 1,
                zIndex: 999
            })
        }
        else if (box_pox < w_half) {
            $('.box').css({
                opacity: 0.8
            })
            $('.btn_slide_L').css({
                opacity: 1,
                zIndex: 999
            })
            $('.btn_slide_R').css({
                opacity: 0,
                zIndex: -999
            })
        }
        else {
            $('.box').css({
                opacity: 0
            })
            $('.btn_slide_L').css({ 
                opacity: 0
            })
            $('.btn_slide_L').css({ 
                opacity: 0
            })
        }
    });
// mainbanner
    $('.banner').eq(0).css({left: 0});

    let curr_idx=0;
    let bn_count = $('.banner').length;
    let timer = 1000; 
    $('.btn_slide_R').click(function(){ 
        btn_stop() 
        slide(curr_idx % bn_count, '-110%', (curr_idx+1) % bn_count, '110%',timer);
        curr_idx += 1;
    });

    $('.btn_slide_L').click(function(){ 
        btn_stop() 
        slide(curr_idx % bn_count, '110%', (curr_idx-1) % bn_count, '-110%',timer);
        curr_idx -= 1;
    })

    function slide(o_idx, o_pos, c_idx, c_pos, t) { 
        // 나갈방
        $('.banner').eq(o_idx).animate({
            left: o_pos
        }, t)

        // 들어올방
        $('.banner').eq((c_idx)).css({
            left: c_pos
        }).stop(true).animate({
            left: 0
        }, t)

        $('.circle').eq(o_idx).removeClass('circle_active');
        $('.circle').eq(c_idx).addClass('circle_active');
    }

    function btn_stop() {
        // 버튼 계속 눌러도 동작 다하고 실행되게 
        $('.btn_slide').css({pointerEvents:'none'})
        setTimeout(function(){
            $('.btn_slide').css({pointerEvents:'auto'})
        }, timer)
    }

    let interval;
    function auto_slide() {
        interval=setInterval(function(){
            $('.btn_slide_R').trigger('click')
        }, timer+2000)
    }

    $('.main_banner_box').hover(function(){
        clearInterval(interval)
    }, function(){
        auto_slide()
    })

    $('.circle').click(function(){

        let colored = $('.circle_active').index();
        let clicked = $(this).index();

        btn_stop();

        if(colored < clicked) { 
            slide(colored, '-110%', clicked, '110%', timer);
        }
        else if(colored > clicked) {
            slide(colored, '110%', clicked, '-110%', timer);
        }
        curr_idx = clicked;
    })



// best item으로 가면 밑에 아이템 스르륵 올라오게 
    let best_box_o_top = $('.main_box_img').offset().top;
    let new_box_o_top = $('.new_txt_title').offset().top;
    let best_review_o_top = ($('.review').offset().top - 500);
    
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        var WinW = $(window).width();
        if (WinW > 480 ) { //480px 보다 클 경우
            if(best_box_o_top <= s_top + nav_h) {
                $('.content_box1').css({
                    transform: 'translateY(0)',
                    opacity: 1
                })
            }
            else {
                $('.content_box1').css({
                    transform: 'translateY(10%)',
                    opacity: 0
                })
            }
    
            if(new_box_o_top <= s_top + nav_h) {
                $('.content_box2').css({
                    transform: 'translateY(0)',
                    opacity: 1
                })
            }
            else {
                $('.content_box2').css({
                    transform: 'translateY(10%)',
                    opacity: 0
                })
            }
    
            if(best_review_o_top <= s_top + nav_h+ nav_h) {
                $('.review_R').css({
                    transform: 'translate(0, 20%)'
                })
                $('.review1').css({
                    opacity: 1
                })
                $('.review2').css({
                    opacity: 1
                })
                $('.review_L').css({
                    transform: 'translateX(10%)'
                })
            }
            else {
                $('.review_R').css({
                    transform: 'translate(10%, 30%)',
                    // opacity: 0
                })
                $('.review1').css({
                    opacity: 0
                })
                $('.review2').css({
                    opacity: 0
                })
                $('.review_L').css({
                    transform: 'translateX(0)'
                })
            }
        }
    });

// 페이지 내부이동 (best랑 new)
    $('.a_click').click(function() {

        event.preventDefault();

        let href = $(this).attr('href')

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000)    
    })


// new 부분 more 버튼 누르면 item 나오게 (2번)
    let count2 = 0;
    $('.new_more').click(function(){

        if(count2 < 3) {
            new_load_data();
            count2++;
            if (count2 == 3) {
                $('.new_more').css({
                    display: 'none'
                })
            }
        }
    });

})
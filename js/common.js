$(document).ready(function() {
    
    
    /**********   탑배너   *************/
    let tb_curr_idx = 0;
    let tb_count = $('.tb_item').length;
    $('.tb_item').eq(tb_curr_idx).css({top: 0})
    setInterval(function(){
        // 나갈거
        $('.tb_item').eq(tb_curr_idx % tb_count).animate({
            top: '-100%'
        }, 500)

        // 들어올거
        $('.tb_item').eq((tb_curr_idx+1) % tb_count).css({
            top: '100%'
        }).animate({
            top: '0%'
        }, 500)
        tb_curr_idx++;
    }, 2000)

    // document.querySelector(".tb_btn").addEventListener("click", function () {
    //     this.closest(".top_banner").style.display = "none";
    // });

    /**********   헤더 100% 메뉴   *************/
    
    $('.nav_li, .nav_pan').hover(function(){

    // console.log($(this).prop('class'))

    // 100판 펼치기
    $('.nav_pan').addClass('pan_active')

    
    if($(this).prop('class') == "menu_item") {
        $('.pan_item').removeClass('pan_active')
        $('.pan_item').eq($(this).index()).addClass('pan_active')
    }

    }, function(){
        // 100판 접기
        $('.pan').removeClass('pan_active')
    })

    
    /***** 메뉴판 나오는 코드 시작 *****/
    let chk = true;
    $('.menu3').click(function(){
        $('.menu_pan').toggleClass('menu_pan_active')

        /***** X자 만드는 코드 시작 *****/
        if(chk) { // X자 만드는부분
            $('.line1').css({
                transform: 'translateY(10px)',
            })
            setTimeout(function(){
                $('.line1').css({
                    transform: 'translateY(8px) rotate(45deg)',
                })
            }, 500)

            setTimeout(function(){
                $('.line2').css({
                    transform: 'scale(0)',
                    transition: 'none'
                })
            }, 500)

            $('.line3').css({
                transform: 'translateY(-10px)',
            })
            setTimeout(function(){
                $('.line3').css({
                    transform: 'translateY(-8px) rotate(-45deg)',
                })
            }, 500)

            $('.menu_pan').css({
                opacity: 1,
            })
        }
        else { // = 자 만드는부분
            $('.line1').css({
                transform: 'translateY(8px) rotate(0)',
            })
            setTimeout(function(){
                $('.line1').css({
                    transform: 'translateY(0)',
                })
            }, 500)

            setTimeout(function(){
                $('.line2').css({
                    transform: 'scale(1)',
                    transition: 'none'
                })
            }, 500)

            $('.line3').css({
                transform: 'translateY(-8px) rotate(0)',
            })
            setTimeout(function(){
                $('.line3').css({
                    transform: 'translateY(0)',
                })
            }, 500)
            $('.menu_pan').css({
                opacity: 0
            })  
        }
        chk = !chk;
    })

    $(".top_btn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
    


})
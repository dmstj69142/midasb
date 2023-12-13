function content_load_data() {
    for(let i=0; i<8; i++) {

        let best_item = `<div class="content">
                            <a href="./portfolio_order.html">
                                <div class="content_img">
                                    <img src="./img/new_content${i+1}.png" alt="" class="content1">
                                    <img src="./img/new_content${i+1}_2.png" alt="" class="content2">
                                </div>
                                <div class="txt_box">
                                    <div class="txt1">모먼트 베이직 슬림 무지 티셔츠</div>
                                    <div class="price_box">
                                        <div class="final_price">13,800원</div>
                                        <div class="price">23,000원</div>
                                        <div class="sale_p">40%</div>
                                    </div>
                                </div>
                            </a>
                        </div>`
        $(best_item).appendTo('.content_box')
    }
}

content_load_data();


$(document).ready(function() {
    $('#item0').click(function() {
        $('#item0').addClass('select_menu')
        $('#item1').removeClass('select_menu')
        $('#item2').removeClass('select_menu')
        $('#item3').removeClass('select_menu')
        $('#item4').removeClass('select_menu')
    })        
    $('#item1').click(function() {
        $('#item0').removeClass('select_menu')
        $('#item1').addClass('select_menu')
        $('#item2').removeClass('select_menu')
        $('#item3').removeClass('select_menu')
        $('#item4').removeClass('select_menu')
    })
    $('#item2').click(function() {
        $('#item0').removeClass('select_menu')
        $('#item1').removeClass('select_menu')
        $('#item2').addClass('select_menu')
        $('#item3').removeClass('select_menu')
        $('#item4').removeClass('select_menu')
    })
    $('#item3').click(function() {
        $('#item0').removeClass('select_menu')
        $('#item1').removeClass('select_menu')
        $('#item2').removeClass('select_menu')
        $('#item3').addClass('select_menu')
        $('#item4').removeClass('select_menu')
    })
    $('#item4').click(function() {
        $('#item0').removeClass('select_menu')
        $('#item1').removeClass('select_menu')
        $('#item2').removeClass('select_menu')
        $('#item3').removeClass('select_menu')
        $('#item4').addClass('select_menu')
    })

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


    let count = 0;
    $(window).scroll(function(){
        let d_height = $(document).height();
        let s_top = $(window).scrollTop();
        let w_height = $(window).height();
        let s_bot = s_top + w_height;
        let f_height = $('.footer').height();

        if(count < 10) {
            if(d_height <= s_bot + f_height) {
                content_load_data();
                count++;
            }
        }
    });



})
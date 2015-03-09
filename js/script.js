
;
$(function(){
    function tab() {
        $(".js-tab").each(function(){

            var tab_link = $(this).find("a");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
            tab_cont.hide();
            $(this).parents(".js-tab-group").find(".js-tab1").show();

            tab_link.bind("click", function() {
                var index = $(this).attr("href");
                tab_link.removeClass("is-active");
                tab_link.parent().removeClass("is-active");
                $(this).addClass("is-active");
                $(this).parent().addClass("is-active");
                tab_cont.hide();
                $(this).parents(".js-tab-group").find("."+index).slideDown("fast");
                return false;
            });
        });
    }
    tab();
});


$(function(){
    initSlider();
    initDrop();
    initAccordion();
    $('.header>.cam-wrap>.search-form input[type="text"]').width($('.cam-wrap').width() - $('.lang-box').innerWidth() - $('.top-menu').width() - $('.log-in').width() - 30)
});



$(window).resize(function(){
    $('.header>.cam-wrap>.search-form input[type="text"]').width($('.cam-wrap').width() - $('.lang-box').innerWidth() - $('.top-menu').width() - $('.log-in').width() - 30)
})

function initSlider() {
    if($('.slider').length) {
        $('.slider').bxSlider({
            speed: 800
        });
    }
}
$(document).ready(function() {
    $('.mobile-heading').on('click', function(e) {
            $(this).children('.open').toggleClass('active');
            $(this).next('.inner-page-menu').toggleClass('active');
            e.preventDefault();
        })

});
function initDrop() {
    if($('.drop-section').length) {
        var opener = $('.lang-box a, .top-menu a'),
            parent = $('.drop-section'),
            closeBtn = parent.find('.close-drop'),
            drops = $('.drop-section .cam-wrap>div');

        opener.on('click', function(e){
            var id = $(this).attr('href').split('#').pop(),
                el = $(this);
            drops.each(function(){
                var drop = $(this);
                if($(this).attr('id') == id) {
                    drops.hide();
                    drop.show();
                    parent.show();
                    opener.parent().removeClass('active');
                    el.parent().addClass('active');
                }
            });

            e.preventDefault();
        });


        closeBtn.on('click', function(e){
            opener.parent().removeClass('active');
            parent.hide();
            drops.hide();

            e.preventDefault();
        });

        $('.search-btn').on('click', function(e) {
            $('#search-drop').toggle();
            $('#search-drop').parents('.drop-section').toggle();

            e.preventDefault();
        });

        $('.open-menu').on('click', function(e) {
            $('#menu-mobile').toggle();
            $('#menu-mobile').parents('.drop-section').toggle();

            e.preventDefault();
        });

        $('.btn-lang').on('click', function(e) {
            $('#lang-mobile').toggle();
            $('#lang-mobile').parents('.drop-section').toggle();

            e.preventDefault();
        });
    }
    if($('.inner-nav').length && $(window).width() < 600) {
        $('.has-drop a').on('click', function(e){
            $('ul.dropdown-menu').hide();
            if($(this).parents('ul.dropdown-menu').length) {
                $(this).parents('ul.dropdown-menu').show();
                $(this).parent().find('ul.dropdown-menu').find('>li.back span').html('&larr; ' + $(this).parent().find('>a').text())
            }
            $(this).parent().find('ul.dropdown-menu').show();
            $(this).parents('ul.inner-page-menu').animate({
                'left':parseInt($(this).parents('ul.inner-page-menu').css('left'))-$(this).innerWidth()
            })
            e.preventDefault();
        })
        $('.inner-page-menu>li .dropdown-menu .back').on('click', function(){
            $(this).parents('ul.inner-page-menu').animate({
                'left':parseInt($(this).parents('ul.inner-page-menu').css('left'))+$(this).parent().width()
            })
        })

    }
}

function initAccordion() {
    if($('.accordion').length) {
        $('.accordion .opener').on('click', function(e){
            if(!$(this).hasClass('active')) {
                $('.accordion .slide').slideUp();
                $('.accordion .opener').removeClass('active');
                $(this).next('.slide').slideDown();
                $(this).addClass('active');
            } else {
                $(this).next('.slide').slideUp();
                $(this).removeClass('active');
            }
            e.preventDefault();
        })
        $('.accordion .hide').on('click', function(e){
            $(this).parent().slideUp();
            $(this).parent().prev('.opener').removeClass('active');
            e.preventDefault();
        })
    }
}


function newFunc(element) {

}
$(function(){
    newFunc($('.article-title'));
})


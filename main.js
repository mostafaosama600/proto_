$(function(){
    'use strict';

    $('body').css('paddingTop',$('.navbar').innerHeight() + 11);

    $(window).scroll(function () {
        var scrollTop = $('.scroll_to_top') 
        if($(window).scrollTop() >= 1000){
            scrollTop.fadeIn(400);
        }else{
            scrollTop.fadeOut(400);
        }
        
    });

    $('.scroll_to_top').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },1000)
    });


    $('.navbar li a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        },1000);
    });

    $('.navbar li a').click(function(){
        $('.navbar a').removeClass('active');
        $(this).addClass('active');

    });

    // show popup
    $('.show_popup').click(function(){
        $($(this).data('popup')).fadeIn();
        
    });
    // close popup
    $('.close').click(function(e){
        e.preventDefault();
        $(this).parentsUntil('.popup').parent().fadeOut();

    });
    $('.popup').click(function(){
        $(this).fadeOut();

    });
    $('.popup .inner').click(function(e){
        e.stopPropagation();
    });
    //show menu bar
    $('.fixed-menu .fa-chevron-right').on('click',function(){
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        if( $(this).parent('.fixed-menu').hasClass('is-visible')) {
            $(this).parent('.fixed-menu').animate({
                left: 0
            },500);
        }
        else{
            $(this).parent('.fixed-menu').animate({
                left: '-244px',
            },500);
        }
    });
    //hide navbar
    $('.navbar .fa-times-circle').on('click', function(){
        $('.navbar').hide('slow');
    });
    //selected the img
    $('.thumbnails img').on('click',function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.master-img img').hide().attr('src', $(this).attr('src')).fadeIn('slow');
    });
    //next and prev
    $('.fa-caret-right').on('click', function(){
        if($('.selected').is(':last-child')){
            $('.thumbnails img').eq(0).click();
        }else{
            $('.selected').next().click();
        }
    });
    $('.fa-caret-left').on('click', function(){
        if($('.selected').is(':first-child')){
            $('.thumbnails img:last').click();
        }else{
            $('.selected').prev().click();
        }
    });

});

// $('.fa-caret-right').on('click',function(){
//     if($('.selected').is(':last-child')){
//         $('.thumbnails img').eq(0).click();
//     }
//     else{
//         $('.selected').next().click();
//     }
    
// });
// $('.fa-caret-left').on('click',function(){
//     if($('.selected').is(':first-child')){
//         $('.thumbnails img:last').click();
//     }
//     else{
//         $('.selected').prev().click();

//     }
// });
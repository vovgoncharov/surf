$(function () {
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow">',
        nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow">',
        asNavFor: '.slider-dots'
    })
    $('.slider-dots').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    })
    $('.surf-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class = "slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow">',
        nextArrow: '<img class = "slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow">'
    })
})
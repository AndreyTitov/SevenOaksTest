$(document).ready(function(){
    
    
    // Init header slider
    $('.header__slider').slick({
        prevArrow: "<button type=\"button\" class=\"slick-prev\"></button>",
        nextArrow: "<button type=\"button\" class=\"slick-next\"></button>",
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 414,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    var button = document.getElementById('btn');
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');
    var closeBtn = document.getElementById('close');
    
    button.addEventListener('click', function() {
        popup.classList.add('active');
        overlay.classList.add('active');
        document.documentElement.scrollTop = 0;
        document.body.style.overflowY = "hidden";
    })

    var closeBtn = document.getElementById('close');
    closeBtn.addEventListener('click', function() {
        popup.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflowY = "auto";
    })

    var burgerBtn = document.getElementById('burger-btn');
    var navigation = document.getElementById('navigation');
    burgerBtn.addEventListener('click', function() {
        navigation.classList.toggle('active');
    })
});


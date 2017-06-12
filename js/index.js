$(function () {
    function refRootFont() {
        let desW = 750,
            curW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = 100 * curW / 750 + 'px';
    }

    refRootFont();
    window.addEventListener('resize', refRootFont);
    let mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        pagination: '.swiper-pagination',
        onSlideChangeStart: function (swiper) {
            let slides = swiper.slides,
                tarIndex = swiper.activeIndex;
            $(slides[tarIndex]).prop('id', 'page' + tarIndex);
            tarIndex === 0 ? slides[tarIndex].id = 'page4' : null;
            tarIndex === 5 ? slides[tarIndex].id = 'page1' : null;
            for (let i = 0; i < slides.length; i++) {
                if (slides[i] !== slides[tarIndex]) {
                    slides[i].id = ""
                }
            }
        }
    });

    let $playTip = $('.play-tip'),
        music = $('#music').get(0);
    music.play();
    $playTip.on('click', function () {
        if (music.paused) {
            $(this).removeClass('pause');
            music.play()
        } else {
            music.pause();
            $(this).addClass('pause');
        }
    })
});

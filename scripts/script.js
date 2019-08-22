function printIcon() {
    window.print();
}

$(document).ready(function() {

    //slider
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        autoplay:2500,
        speed: 3000,
        loop: true,
    });
});

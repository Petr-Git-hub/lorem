$(document).ready(function () {


    $('.select').select2({
        minimumResultsForSearch: 10,
        width: "100%",
    }).on("select2:open", function () {
        $('.select2-results__options').niceScroll({
            cursorwidth:  "8px",
            cursorborder: "0",
            cursorborderradius: "3px",
            cursorcolor: "#3E9CDC",

            railpadding: { top: 0, right: 0, left: 0, bottom: 4 },
            background: "#3D4050",
            railoffset: false,
            cursoropacitymin: 1,
        });
    });


    $(function(){
        $(".range-slider").slider({
            range: 'max',
            min: 0,
            max: 100,
            value: 75,
            slide: function(event, ui){
                $(".range-slider-text").html(ui.value +" %");
            }
        });
    });

});

var body = document.querySelector('body');
var hamburger = document.querySelector('.hamburger');
hamburger.addEventListener("click", function (e) {
    e.preventDefault();
    body.classList.toggle("hidden-header");
});
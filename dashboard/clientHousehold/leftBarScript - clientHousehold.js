// JavaScript source code
$(document).ready(function () {
    $('#leftbar').mouseenter(function () {
        $('#lb').animate({ left: "20%" });
    });


   $(document).ready(function () {
        $('#lb').mouseleave(function () {
            $('#lb').animate({ left: "-15%" });
        });
    });
});



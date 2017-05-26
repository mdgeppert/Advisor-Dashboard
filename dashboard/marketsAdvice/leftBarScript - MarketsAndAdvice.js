//JavaScript source code
$(document).ready(function () {
    $('#leftbar').mouseenter(function () {
        $('#lb').animate({ left: "14vw" });
    });


    $(document).ready(function () {
        $('#lb').mouseleave(function () {
            $('#lb').animate({ left: "-15%" });
        });
    });
});


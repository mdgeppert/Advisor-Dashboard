//JavaScript source code
$(document).ready(function () {
    $('#leftbar').mouseenter(function () {
        $('#lb').animate({ left: "37.5vw" });
    });


    $(document).ready(function () {
        $('#lb').mouseleave(function () {
            $('#lb').animate({ left: "-15vw" });
        });
    });
});


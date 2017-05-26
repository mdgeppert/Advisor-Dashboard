// JavaScript source code
$(document).ready(function () {
    $('#filter').click(function () {
        $(this).append('<div id="filterBox">test data</div>');
    })
})

$(document).ready(function () {
    $('#filterBox').mouseleave(function () {
        $(this).detach();
    })
})
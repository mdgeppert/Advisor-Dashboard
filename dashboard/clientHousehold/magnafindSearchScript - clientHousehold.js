// JavaScript source code
$(document).ready(function () {
    $('#icon1').click(function () {
        $('#void').append("<aside id='searchPop'><div id='searchForm'><input type='text' /><div id='searchSubmit'><button>Submit</button></div></div></div></aside>")
    });
});

$(document).ready(function () {
    $('#top, #bottom').click(function () {
        $('#searchPop').remove();
    })
})
// JavaScript source code
$(".rowGValue").each(function () {
    var item = $(this).text();
    var num = Number(item).toLocaleString('en');

    num = num.replace();

    $(this).text(num);
});

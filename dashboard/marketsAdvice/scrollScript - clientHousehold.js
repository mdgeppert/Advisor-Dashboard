// JavaScript source code
$('.paneSections, #rightPane2').on('mousewheel', function (e) {
    var event = e.originalEvent,
        d = event.wheelDelta || -event.detail;

    this.scrollTop += (d < 0 ? 1 : -1) * 30;
    e.preventDefault();
});
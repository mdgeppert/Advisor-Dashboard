// JavaScript source code
$('#people, #householdComments, #serviceLevel, #internalAccounts, #clientName2Box, #clientName1Box, #relationship, #sendCorrespondenceBox, #contactInformation, #futureActivityBox, #recentActivityBox').on('mousewheel', function (e) {
    var event = e.originalEvent,
        d = event.wheelDelta || -event.detail;

    this.scrollTop += (d < 0 ? 1 : -1) * 30;
    e.preventDefault();
});

$(document).ready( function() {
    $('.table12Col2ValuePM, #SPChange, #YBBusiness, .table10Col3Value, .table13Col2PM, .table14Col2PM, .rowGValuePercentP_M, .table13Col2PM').each(function () {
        var currency = $(this).html();
        var val = Number(currency.replace(/[^0-9\.-]+/g,""));
        if(val > 0) {
            $(this).addClass('positive');
        }
        if(val < 0) {
            $(this).addClass('negative');
        }
    })
})


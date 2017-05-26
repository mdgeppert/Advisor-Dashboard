// JavaScript source code
$(".table12Col2Value, .table12Col2ValuePM, .table10Col3Value, .table10Col2Value, .table13Col2PM, .table14Col2PM, .table14Col2, .table13Col2, .table1Row1Col3, .table1Row2Col3, .table1Row3Col3, .table1Row4Col3, .table1Row5Col3, .table1Row6Col3").each(function () {
    var item = $(this).text();
    var num = Number(item).toLocaleString('en');

        num = num.replace();
  
        $(this).text(num);
    });


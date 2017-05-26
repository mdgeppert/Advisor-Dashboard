var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];
var tomorrow = new Date();
tomorrow.setTime(tomorrow.getTime() + (500 * 1800 * 24));
document.getElementById('spanDate').innerHTML = days[tomorrow.getDay()]+ " " + months[tomorrow.getMonth()] + " " + tomorrow.getDate() + ", " + tomorrow.getFullYear();
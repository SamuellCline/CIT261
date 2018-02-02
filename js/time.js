
    var a = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var month = new Array(12);
    month[0] = "January";
    month[1] = "Febuary";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";


    var d = weekday[a.getDay()];
    var d1 = a.getDate();
    var m = month[a.getMonth()];
    var y = a.getFullYear();
    var date = d + ", " + d1 + " " + m + " " + y;
    document.getElementById("date").innerHTML = date;


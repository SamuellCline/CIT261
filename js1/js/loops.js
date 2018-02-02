document.getElementById('loop1').onclick = function loop1() {
    //while loop
    var i = 0;
    while (i < 6 ) {
        document.getElementById('l1').innerHTML = i + "<br>";
        i++
          }
    }
document.getElementById('loop2').onclick = function loop2() {
    //for loop
    var i;
    for (i = 0; i < 6; i++) {
        document.getElementById('l2').innerHTML = i + "<br>";
    }

}
document.getElementById('loop3').onclick = function loop3() {
    //do while
    var i = 0;
    do {
        document.getElementById('l3').innerHTML = i + "<br>";
        i++
    }

    while (i < 6);

}
document.getElementById('truefalse').onclick = function tffunction() {
    // If Else
    if (document.getElementById('tru').value == 1){
        document.getElementById('tf').innerHTML = "You have selected True";
    }
        else{
        document.getElementById('tf').innerHTML = "You have selected False";
    }

}

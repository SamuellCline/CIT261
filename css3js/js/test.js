var colorSetting = localStorage.getItem("color");
if (colorSetting == 1) {
document.getElementById('div123').style.background = "red";
}
if (colorSetting == 2) {
    document.getElementById('div123').style.background = "blue";
}
document.getElementById('color1').onclick = function colorBlue() {

    document.getElementById('div123').style.background = "blue";
localStorage.setItem("color", 2);
}

document.getElementById('color2').onclick = function colorRed() {

    document.getElementById('div123').style.background = "red";
    localStorage.setItem("color", 1);
}
document.getElementById('dance').onclick = function dance() {

    document.getElementById('div123').className = "div1";

}
document.getElementById('reset').onclick = function reset() {


    document.getElementById('div123').className = "div1off";
}



var bike = {
    "make": "Honda",
    "model": "CB300F",
    "color": "Black",
    "weight": 348,
    "displacement": "286cc",
    "vehicalClass": "Sport"};
document.getElementById('bike1').onclick = function objectBike1() {

    var bikeString = JSON.stringify(bike);
    document.getElementById('bikeout1').innerHTML = bikeString;

}
document.getElementById('bike2').onclick = function objectBike2() {
    var bikeString = JSON.stringify(bike);
    var bikeJSON = JSON.parse(bikeString);
    document.getElementById('bikeout2').innerHTML = bikeJSON;
}


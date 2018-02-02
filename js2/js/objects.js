//Object Constructor

function motorcycle(make, model, color, weight, displacement, vclass) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.weight = weight;
    this.displacement = displacement;
    this.info = function () {
        return this.make + "<br>" + this.model + "<br>" + this.color + "<br>" + this.weight + "<br>" + this.displacement + "<br>" + this.vehicalClass;}
    this.vehicalClass = vclass;
}

var bike2 = new motorcycle("Yamaha", "YZF-R3", "Blue", 368, "321cc", "Sport");
document.getElementById('bike2').onclick = function objectBike() {

    document.getElementById('bikeout2').innerHTML = bike2.info();

}


//simple Object
var bike = {
    make: "Honda",
    model: "CB300F",
    color: "Black",
    weight: 348,
    displacement: "286cc",
    info: function () {
        return this.make + "<br>" + this.model + "<br>" + this.color + "<br>" + this.weight + "<br>" + this.displacement + "<br>" + this.vehicalClass;},
    vehicalClass: "Sport"
};
document.getElementById('bike1').onclick = function objectBike() {

    document.getElementById('bikeout1').innerHTML = bike.info();

}

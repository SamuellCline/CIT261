//Loops

document.getElementById('loop1').onclick = function loop1() {
    //while loop
    var i = 0;
    while (i < 6) {
        document.getElementById('l1').innerHTML += i + "<br>";
        i++;
    }
}
document.getElementById('loop2').onclick = function loop2() {
    //for loop
    var i;
    for (i = 0; i < 6; i++) {
        document.getElementById('l2').innerHTML += i + "<br>";
    }

}
document.getElementById('loop3').onclick = function loop3() {
    //do while
    var i = 0;
    do {

        document.getElementById('l3').innerHTML += i + "<br>";
        i++;
    }

    while (i < 6);

}

//conditional
document.getElementById('truefalse').onclick = function tffunction() {
    // If Else
    if (document.getElementById('tru').value == 1) {
        document.getElementById('tf').innerHTML = "You have selected True";
    } else {
        document.getElementById('tf').innerHTML = "You have selected False";
    }

}



//functions and parameters


function doPayment() {
    var a = parseFloat(document.getElementById('Principal').value);
    var r = parseFloat(document.getElementById('Rate').value);
    var y = parseFloat(document.getElementById('Years').value);
    var n = parseFloat(document.getElementById('Periods').value);
    var p = out1
    var out1 = computePayment(a, r, y, n);

    document.getElementById('output1').value = out1;




}

function doBalance() {
    var a = parseFloat(document.getElementById('Principal').value);
    var r = parseFloat(document.getElementById('Rate').value);
    var y = parseFloat(document.getElementById('Years').value);
    var n = parseFloat(document.getElementById('Periods').value);
    var p = out1
    var out1 = computePayment(a, r, y, n);
    var out2 = computeBalance(a, r, y, n, p);
    document.getElementById('output1').value = out1;
    document.getElementById('output2').value = out2;



}

function computePayment(a, r, y, n) {
    var i = 1;
    while (i <= y) {
        var p = (a * r) / (1 - (Math.pow((1 + r), n)));



        // document.getElementById('output').innerHTML = text;
        i++;
    }
    return p;
}

function computeBalance(a, r, y, n, p) {
    var p = computePayment(a, r, y, n)
    var i = 1;
    while (i <= y) {
        var f = (a * (Math.pow((1 + r), n))) - ((p * ((Math.pow(1 + r, n)) - 1))) / r;



        // document.getElementById('output').innerHTML = text;
        i++;
    }
    return f;

}

//arrays

//one dimensionall array
document.getElementById('a1button').onclick = function aLoop1() {
    var a1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

    var i = 0;
    while (i < a1.length) {
        document.getElementById('a1').innerHTML += a1[i] + "<br>";
        i++;
    }
}




//assosiative array

var bike = {
    make: "Honda",
    model: "CB300F",
    color: "Black",
    weight: 348,
    displacement: "286cc",
    info: function () {
        return this.make + "<br>" + this.model + "<br>" + this.color + "<br>" + this.weight + "<br>" + this.displacement;
    },
    vehicalClass: "Sport"
};
document.getElementById('bike').onclick = function objectBike() {

    document.getElementById('bikeout').innerHTML = bike.info();

}


document.getElementById('div1').addEventListener("touchstart", display);

function display() {
    document.getElementById('map1').style.display = "block";
    var x = document.getElementById("output");
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;

        var a = position.coords.latitude;
        var b = position.coords.longitude;
        var maploc = "";
        maploc = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAUUNVZK5sHDkQfAFX887UEIIM7a2d3zKo&zoom=18&maptype=satellite" + '&q=' + a + ',' + b;
        document.getElementById('map1').src = maploc;

    }

    document.getElementById('click').onclick = function clear(){

        document.getElementById('map1').style.display = "none";
    }
}

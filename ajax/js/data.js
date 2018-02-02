document.getElementById('clickme').onclick = function submit() {
    var i;
    var selection = document.getElementById('city').value;
    switch (selection) {
        case 'Franklin':
            i = 0;
            break;
        case 'Greenville':
            i = 1;
            break;
        case 'Placerton':
            i = 2;
            break;
        case 'Springfield':
            i = 3;
            break;
        default:
            i = null;
            break;
    }




    var requestURL = 'https://byui-cit230.github.io/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json'
    request.send();
    request.onload = function () {
        var info = request.response;

        tData(info);
    }

    function tData(json) {


        var name = document.getElementById("name");
        var motto = document.getElementById("motto");
        var yearFounded = document.getElementById("yearFounded");
        var currentPopulation = document.getElementById("currentPopulation");
        var averageRainfall = document.getElementById("averageRainfall");
        var events = document.getElementById("events");
        name.textContent = "Name: " + json.towns[i].name;
        motto.textContent = "Motto: " + json.towns[i].motto;
        yearFounded.textContent = "Year Founded: " + json.towns[i].yearFounded;
        currentPopulation.textContent = "Current Population: " + json.towns[i].currentPopulation;
        averageRainfall.textContent = "Average Rainfall: " + json.towns[i].averageRainfall;



    }
}

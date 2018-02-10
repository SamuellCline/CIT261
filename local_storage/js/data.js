//ACCOUNT CREATION
document.getElementById('hash').onclick = function hash() {
    if (document.getElementById('pass').value !== "" && document.getElementById('name').value !== "") {
        //the purpose of combination is to link the password to the username for authentication

        var combination = " ";
        var n = document.getElementById('name').value;
        var x = document.getElementById('pass').value;
        var combination = n + x;

        var hash = hashCode(combination);
        //    document.getElementById('hashout').innerHTML = hash;
        localStorage.setItem("uName" + n, n);
        localStorage.setItem(n + "Password", hash);
    } else {
        document.getElementById('hashout').innerHTML = "YOU CANNOT HAVE A BLANK USERNAME OR PASSWORD!";
    }


}


//LOGIN

document.getElementById('login').onclick = function hash() {
    if (document.getElementById('passl').value !== "" && document.getElementById('namel').value !== "") {
        var nl = document.getElementById('namel').value;
        var xl = document.getElementById('passl').value;
        var combination2 = nl + xl;
        var hash2 = hashCode(combination2);
        var nl2 = localStorage.getItem("uName" + nl);
        var xl2 = localStorage.getItem(nl + "Password");
        if (nl == nl2 && hash2 == xl2) {
            document.getElementById('hashout2').innerHTML = "YOUR LOGIN IS CORRECT";
        } else {
            document.getElementById('hashout2').innerHTML = "YOUR LOGIN IS INCORRECT";
        }

    } else {
        document.getElementById('hashout2').innerHTML = "YOU CANNOT HAVE A BLANK USERNAME OR PASSWORD!";
    }
}

//JS implementation of Java's String.hashCode()
function hashCode(str) {

    var hash = 0;

    if (str.length == 0) return hash;

    for (i = 0; i < str.length; i++) {

        char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;

    }

    return hash;

}

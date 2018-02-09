function check(e, value) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
    if (value.indexOf(".") != -1) if (unicode == 46) return false;
    if (unicode != 8) if ((unicode < 48 || unicode > 57) && unicode != 46) return false;
}
function checkLength() {
    var fromLength = document.getElementById('from').value.length;
    if (fromLength <= 7) {
        return true;
    }
    else {
        var str = document.getElementById('from').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('from').value = str;
    }
}
function checkLength2() {
    var toLength = document.getElementById('to').value.length;
    if (toLength <= 7) {
        return true;
    }
    else {
        var str = document.getElementById('to').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('to').value = str;
    }
}

function randomize() {
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    if ((to-from)<0) {
        console.log(to-from);
        alert("'To' is less than 'From'");
    }
    else {
        var randomNumber = Math.floor((Math.random() * to) + from);
        document.getElementById("number").innerHTML = randomNumber;

        if (randomNumber > 99) {
            document.querySelector("body").className = "hundred"
            document.querySelector("button").className = "hundred";
            document.getElementById("reset").className = "hundred";
            document.getElementById("from").className = "input-hundred";
            document.getElementById("to").className = "input-hundred";
        }
        if (randomNumber > 999) {
            document.querySelector("body").className = "thousand";
            document.querySelector("button").className = "thousand";
            document.getElementById("reset").className = "thousand";
            document.getElementById("from").className = "input-thousand";
            document.getElementById("to").className = "input-thousand";
        }
        if (randomNumber > 999999) {
            document.querySelector("body").className = "million";
            document.querySelector("button").className = "million";
            document.getElementById("reset").className = "million";
            document.getElementById("from").className = "input-million";
            document.getElementById("to").className = "input-million";
        }
    }
}

function reset() {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("number").innerHTML = "0";
    document.querySelector("body").className = "ten";
    document.querySelector("button").className = "ten";
    document.getElementById("reset").className = "ten";
    document.getElementById("from").className = "input-ten";
    document.getElementById("to").className = "input-ten";
}

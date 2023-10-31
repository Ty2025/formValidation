let array = {
    errorID: "Invalid phone number",
    errorNum: "Only enter numbers",
    errorLen: "Must be 13 characters",
    valid : "valid"
};


function myFunction() {
    switch (validators()) {
        case "errorNum":
            document.getElementById("errorLbl").innerHTML = array.errorNum;
            document.getElementById("IdNumberInput").style.borderBottom = "1px solid red";
            document.getElementById("sendID").disabled = true;
            break;
        case "errorLen":
            document.getElementById("errorLbl").innerHTML = array.errorLen;
            document.getElementById("IdNumberInput").style.borderBottom = "1px solid red";
            document.getElementById("sendID").disabled = true;
            break;
        case "errorID":
            document.getElementById("errorLbl").innerHTML = array.errorID;
            document.getElementById("IdNumberInput").style.borderBottom = "1px solid red";
            document.getElementById("sendID").disabled = true;
            break;
        case "empty":
            document.getElementById("errorLbl").innerHTML = "";
            document.getElementById("IdNumberInput").style.borderBottom = "1px solid #747474";
            break;
        case "valid":
            document.getElementById("errorLbl").innerHTML = "";
            document.getElementById("IdNumberInput").style.borderBottom = "1px solid green";
            break;
    }
}

function validators() {
    var regex = /^[0-9]+$/; 
    var inputField = document.getElementById("IdNumberInput").value;
    var len = inputField.length;


    if (len < 1) { return "empty"; }

    if (!(len == 13)) { return "errorLen"; }

    if (!(regex.test(inputField))) { return "errorNum"; }

    if (!(checkLuhn(inputField))) { return "errorID" }

    document.getElementById("sendID").disabled = false;
    return "valid";

}

function checkLuhn(cardNo) {
    var nDigits = cardNo.length;

    var nSum = 0;
    var isSecond = false;
    for (var i = nDigits - 1; i >= 0; i--) {
        var d = cardNo[i].charCodeAt() - "0".charCodeAt();
        if (isSecond == true) d = d * 2;
        nSum += parseInt(d / 10, 10);
        nSum += d % 10;
        isSecond = !isSecond;
    }
    return nSum % 10 == 0;
}

function setErrorMessage() {
    console.log("")
}

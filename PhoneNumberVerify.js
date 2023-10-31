let array = {
    errorCell: "Invalid phone number",
    errorNum: "Only enter numbers",
    errorLen: "Must be 10 characters",
    matchError: "Numbers do not match",
    valid: "valid"
};


function validate(elementId) {

    let labelSelector = "errorLbl" + elementId;
    errorLabel = document.getElementById(labelSelector);

    switch (validators(elementId)) {
        case "errorNum":
            document.getElementById(labelSelector).innerHTML = array.errorNum;
            document.getElementById(elementId).style.borderBottom = "2px solid red";
            document.getElementById("sendID").disabled = true;
            break;
        case "errorLen":
            document.getElementById(labelSelector).innerHTML = array.errorLen;
            document.getElementById(elementId).style.borderBottom = "2px solid red";
            document.getElementById("sendID").disabled = true;
            break;
        case "matchError":
            document.getElementById(labelSelector).innerHTML = array.matchError;
            document.getElementById(elementId).style.borderBottom = "2px solid red";
            document.getElementById("sendID").disabled = true;
            break;
        case "empty":
            document.getElementById(labelSelector).innerHTML = "";
            document.getElementById(elementId).style.borderBottom = "2px solid black";
            break;
        case "valid":
            document.getElementById(labelSelector).innerHTML = "";
            document.getElementById("sendID").disabled = false;
            document.getElementById(elementId).style.borderBottom = "2px solid green";
            break;
    }
}

function validators(elementId) {

    var regex = /^[0-9]+$/;
    var inputField = document.getElementById(elementId).value;
    var len = inputField.length;
    if (len == 0) { return "empty"; }
    if (!(len == 10)) { return "errorLen"; }
    if (!(regex.test(inputField))) { return "errorNum"; }
//(a) => (a > 15 ? 15 : a)
    
    return "valid";

}


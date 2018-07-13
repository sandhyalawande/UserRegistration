function validate() {
    var error = 0;
    document.getElementById("success").innerHTML = "";
    if (document.userReg.fName.value == "") {
        document.getElementById("error_fname").innerHTML = "Please Enter First Name!";
        document.userReg.fName.focus();
        var error = 1;
    } else if (!/^[a-zA-Z]*$/g.test(document.userReg.fName.value)) {
        document.getElementById("error_fname").innerHTML = "Please Enter Alphabet Character in First Name!";
        document.userReg.fName.focus();
        var error = 1;
    } else {
        document.getElementById("error_fname").innerHTML = "";
    }


    if (document.userReg.lName.value == "") {
        document.getElementById("error_lname").innerHTML = "Please Enter Last Name!";
        document.userReg.lName.focus();
        var error = 1;
    } else if (!/^[a-zA-Z]*$/g.test(document.userReg.lName.value)) {
        document.getElementById("error_lname").innerHTML = "Please Enter Alphabet Character in Last Name!";
        document.userReg.lName.focus();
        var error = 1;
    } else {
        document.getElementById("error_lname").innerHTML = "";
    }

    if (document.userReg.gender.value == "") {
        document.getElementById("error_gender").innerHTML = "Please Select Gender!";
        var error = 1;
    } else {
        document.getElementById("error_gender").innerHTML = "";
    }
    if (document.userReg.country.value == "") {
        document.getElementById("error_country").innerHTML = "Please Select Country!";
        document.userReg.country.focus();
        var error = 1;
    }
    
    if (error == 1) {
        return false;
    } else {
         console.log("First Name");
         console.log(document.userReg.fName.value);
         console.log("Last Name");
         console.log(document.userReg.lName.value);
         console.log("Gender");
         console.log(document.userReg.gender.value);
         console.log("Country");
         console.log(document.userReg.country.value);
         console.log("Message");
         console.log(document.userReg.Message.value);
         console.log("hobbies");
         var checkboxes = document.getElementsByName('hobbies[]');
         for (var i = 0, n = checkboxes.length; i < n; i++) {
             if (checkboxes[i].checked) {
                 console.log(checkboxes[i].value);
             }
         }
         document.getElementById("success").innerHTML = "Form has been submited successfully!!";
         document.getElementById("success").focus();
         document.location.href = "#success";
        
    }
    return false;

}
// Ajax Call

function loadList() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            country(this);
        }
    };
    xhttp.open("GET", "country.xml", true);
    xhttp.send();
}

function country(xml) {
    var i;
    var i;
    var xmlDoc = xml.responseXML;
    var option = "";
    var x = xmlDoc.getElementsByTagName("COUNTRY");
    for (i = 0; i < x.length; i++) {
        option += "<option value='" +
    x[i].getElementsByTagName("VALUE")[0].childNodes[0].nodeValue +
    "'>" +
    x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "</option>";
    }
    document.getElementById("country").innerHTML = option;
}

window.onload = loadList; 
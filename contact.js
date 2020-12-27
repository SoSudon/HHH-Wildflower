function validation () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var information = document.getElementById("information").value;
    var error_message = document.getElementById("error_message");
    var text;

    if(name.length < 2){
        text = "Please Enter Valid Name More Than Two Letters";
        error_message.innerHTML = text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6 || email.length == null) {
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(information.length < 5){
        text = "Please Tell Us Location or County You Find This Flower";
        error_message.innerHTML = text;
        return false;
    }

    alert("Form Submitted Successfully!")
    return true;
 
}
 